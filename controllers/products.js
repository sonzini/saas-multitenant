import { createProduct, getProducts, getProductById } from "../services/products";
import { DBMain } from "../services/db/main";

export const getProductsController = async () => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async transaction => {
      const products = await getProducts({ transaction });

      return products;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
    console.log(error);
  }
};
export const getProductByIdController = async id => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async transaction => {
      const product = await getProductById(id, { transaction });

      return product;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
    console.log(error);
  }
};
export const createProductController = async payload => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async transaction => {
      const product = await createProduct(payload, { transaction });

      return product;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
  }
};
export const editProductController = () => {};
export const deleteProductController = () => {};

export const getProductsByPlanIdController = () => {};
