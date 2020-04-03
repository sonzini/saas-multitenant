import { Plans, Products } from "../db/main";

export const getProducts = ({ transaction = null } = {}) =>
  Products.findAll({ transaction });

export const getProductById = (id, { transaction = null } = {}) =>
  Products.findByPk(id, { transaction });

export const createProduct = (payload, { transaction = null } = {}) =>
  Products.create(payload, { transaction });

export const editProduct = async (payload, { transaction = null } = {}) => {
  const { id } = payload;
  const product = await getProductById(id, { transaction });
  return product.update(payload, { transaction });
};

export const deleteProduct = async (id, { transaction = null } = {}) => {
  const product = await getProductById(id, { transaction });
  return product.destroy();
};

export const getProductsByPlanId = async (plan_id, { transaction = null } = {}) => {
  const plan = await Plans.findByPk(plan_id, {
    include: ["products"],
    transaction
  });
  return plan.plans;
};
