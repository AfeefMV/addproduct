// import db
const db = require("./db");
// get all products from the database
const getAllProducts = () => {
  // to fetch all products from mongodb
  return db.Product.find().then((result) => {
    if (result) {
      return {
        status: true,
        statusCode: 200,
        products: result,
      };
    } else {
      return {
        status: false,
        statusCode: 404,
        message: "No product found",
      };
    }
  });
};


const addProduct = (id, title, price, description, brand, image) => {
    return db.Product.findOne({ id }).then((result) => {
      console.log("result:", result);
      if (result) {
        return {
          status: false,
          statusCode: 401,
          message: "product already exist",
        };
      } else {
        const newProduct = new db.Product({
          id,
          title,
          price,
          description,
          brand,
          image,
        });
        newProduct.save();
        console.log(newProduct);
        return {
          status: true,
          statusCode: 200,
          message: "Product added",
        };
      }
    });
  };
  
  const UpdateProduct = (id, title, price, description, brand, image) => {
    return db.Product.findOne({
     id
    }).then((result) => {
      console.log("result:", result);
      if (result) {
        result.id = id;
        result.title = title;
        result.price = price;
        result.description = description;
        result.brand = brand;
        result.image = image;
        result.save();
        return {
          status: true,
          statusCode: 200,
          message: "product updated successfully",
        };
      } else {
        return {
          status: false,
          statusCode: 403,
          message: "failed",
        };
      }
    });
  };
  
  const deleteProduct = (id) => {
    return db.Product.deleteOne({ id }).then((result) => {
      console.log(result);
      if (result) {
        return {
          status: true,
          statusCode: 200,
          message: ` product is deleted successfully`,
        };
      } else {
        return {
          status: false,
          statusCode: 401,
          message: "failed",
        };
      }
    });
  };

module.exports={
    getAllProducts,addProduct,UpdateProduct,deleteProduct
}