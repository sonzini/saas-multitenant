import { AsyncRouter } from "express-async-router";

import {
  createRequestLog,
  createCreationLog,
  createEditionLog,
  createDeletionLog
} from "../services/logger";
import {
  getPlansController,
  getPlanByIdController,
  createPlanController,
  editPlanController,
  deletePlanController,
  editPlanProductsController
} from "../controllers/plans";
import { getPaymentsByPlanIdController } from "../controllers/payments";
import { getProductsByPlanIdController } from "../controllers/products";

const router = AsyncRouter();

router.get("/", async (req, res) => {
  const plans = await getPlansController();

  createRequestLog(req);

  res.json(plans);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const plan = await getPlanByIdController(id);

  createRequestLog(req);

  res.json(plan);
});

router.post("/", async (req, res) => {
  const payload = {
    ...req.body
  };

  const plan = await createPlanController(payload);

  createCreationLog(req, plan);

  res.json(plan);
});

router.put("/:id", async (req, res) => {
  const payload = {
    ...req.body,
    id: req.params.id
  };

  const plan = await editPlanController(payload);

  createEditionLog(req, plan);

  res.json(plan);
});

router.put("/:id/products", async (req, res) => {
  const payload = {
    id: req.params.id,
    products: req.body.products,
  };

  const plan = await editPlanProductsController(payload);

  createEditionLog(req, plan);

  res.json(plan);
});

router.post("/:id/product/:product_id", async (req, res) => {
  const payload = {
    id: req.params.id,
    productId: eq.params.product_id,
  };

  const plan = await addPlanProductController(payload);

  createEditionLog(req, plan);

  res.json(plan);
});

// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;

//   const plan = await deletePlanController(id);

//   createDeletionLog(req, plan);

//   res.json(plan);
// });

// router.get("/:id/products", async (req, res) => {
//   const { id } = req.params;

//   const products = await getProductsByPlanIdController(id);

//   createRequestLog(req);

//   res.json(products);
// });

// router.get("/:id/payments", async (req, res) => {
//   const { id } = req.params;

//   const payments = await getPaymentsByPlanIdController(id);

//   createRequestLog(req);

//   res.json(payments);
// });

export default router;
