import { DBMain } from '../services/db/main';
import {
  getPlans,
  getPlanById,
  createPlan,
  editPlan,
  deletePlan,
  getPlansByAccountId,
  getPlansByProductId,
  editPlanProducts,
  addPlanProduct,
} from '../services/plans';

export const getPlansController = async () => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const plans = await getPlans({ transaction });

      return plans;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
  }
};

export const getPlanByIdController = async (id) => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const plan = await getPlanById(id, { transaction });

      return plan;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
    console.log(error);
  }
};

export const createPlanController = async (payload) => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const plan = await createPlan(payload, { transaction });

      return plan;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
    console.log(error);
  }
};

export const editPlanController = async (payload) => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const plan = await editPlan(payload, { transaction });

      return plan;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
    console.log(error);
  }
};

export const editPlanProductsController = async (payload) => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const plan = await editPlanProducts(payload, { transaction });

      return plan;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
    console.log(error);
  }
};

export const addPlanProductController = async (payload) => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const plan = await addPlanProduct(payload, { transaction });

      return plan;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
    console.log(error);
  }
};

export const deletePlanController = async () => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const plan = await deletePlan(id, { transaction });

      return plan;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
  }
};

export const getPlansByAccountIdController = async (accountId) => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const plans = await getPlansByAccountId(accountId, { transaction });

      return plans;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
  }
};

export const getPlansByProductIdController = async (planId) => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const plans = await getPlansByProductId(planId, { transaction });

      return plans;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
  }
};
