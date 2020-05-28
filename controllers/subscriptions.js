import { DBMain } from '../services/db/main';
import {
  getSubscriptions,
  getSubscriptionById,
  createSubscription,
} from '../services/subscriptions';

export const getSubscriptionsController = async () => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const subscriptions = await getSubscriptions({ transaction });

      return subscriptions;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
    console.log(error);
  }
};

export const getSubscriptionByIdController = async (id) => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const subscription = await getSubscriptionById(id, { transaction });

      return subscription;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
    console.log(error);
  }
};

export const createSubscriptionController = async (payload) => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const subscription = await createSubscription(payload, { transaction });

      return subscription;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
    console.log(error);
  }
};
