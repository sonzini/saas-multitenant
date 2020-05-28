export const createSubscriptionFormatter = (subscription) => ({
  ...subscription,
  accountId: subscription.account_id,
  AccountId: subscription.account_id,
  planId: subscription.plan_id,
});
