import { Plans, Products } from "../db/main";
import { getProductById } from "../products";

export const getPlans = ({ transaction = null } = {}) => Plans.findAll({ transaction });

export const getPlanById = (id, { transaction = null } = {}) =>
  Plans.scope("view").findByPk(id, { transaction });

export const createPlan = (payload, { transaction = null } = {}) =>
  Plans.create(payload, { transaction });

export const editPlan = async (payload, { transaction = null } = {}) => {
  const { id } = payload;
  const plan = await getPlanById(id, { transaction });
  return plan.update(payload, { transaction });
};

export const editPlanProducts = async (payload, { transaction = null } = {}) => {
  /**
   * Selected: In the payload
   * Original: All the products that have been in the plan
   * New: New product that weren't before (to add)
   * Discard: Products that should no longer be in the plan (to remove)
   */

  const { id, products } = payload;
  const selectedProductsId = products.map(p => p.id);

  const plan = await getPlanById(id, { include: ["products"], transaction });

  const originalProductsId = plan.products.map(p => p.id);
  const newProductsId = selectedProductsId.filter(
    pid => !originalProductsId.includes(pid)
  );
  const discardProductsId = originalProductsId.filter(
    pid => !selectedProductsId.includes(pid)
  );

  const discardProducts = await Products.findAll({
    where: { id: discardProductsId },
    transaction
  });

  await plan.removeProducts(discardProducts, { transaction });

  const newProducts = await Products.findAll({
    where: { id: newProductsId },
    transaction
  });

  await plan.addProducts(newProducts, { transaction });

  return plan.reload({ transaction });
};

export const addPlanProduct = async (payload, { transaction = null } = {}) => {
  const { id, productId } = payload;
  const plan = await getPlanById(id, { transaction });
  const product = await getProductById(productId, { transaction });
  return plan.addProduct(product, { transaction });
};

export const deletePlan = async (id, { transaction = null } = {}) => {
  const plan = await getPlanById(id, { transaction });
  return plan.destroy();
};

export const getPlansByAccountId = (account_id, { transaction = null } = {}) =>
  Plans.findAll({ where: { account_id }, transaction });

export const getPlansByProductId = async (product_id, { transaction = null } = {}) => {
  const product = await Products.findByPk(product_id, {
    include: ["plans"],
    transaction
  });
  return product.plans;
};
