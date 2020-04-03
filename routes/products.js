import { AsyncRouter } from "express-async-router";

import {
  createRequestLog,
  createCreationLog,
  createEditionLog,
  createDeletionLog
} from "../services/logger";
import {
  getProductsController,
  createProductController,
  editProductController,
  deleteProductController,
  getProductByIdController
} from "../controllers/products";
import { getPlansByProductIdController } from "../controllers/plans";

const router = AsyncRouter();

router.get("/", async (req, res) => {
  const products = await getProductsController();

  createRequestLog(req);

  res.json(products);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const product = await getProductByIdController(id);

  createRequestLog(req);

  res.json(product);
});

router.post("/", async (req, res) => {
  const payload = {
    ...req.body
  };

  const product = await createProductController(payload);

  createCreationLog(req, product);

  res.json(product);
});

router.put("/:id", async (req, res) => {
  const payload = {
    ...req.body,
    id: req.params.id
  };

  const product = await editProductController(payload);

  createEditionLog(req, product);

  res.json(product);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const product = await deleteProductController(id);

  createDeletionLog(req, product);

  res.json(product);
});

router.get("/:id/plans", async (req, res) => {
  const { id } = req.params;

  const plans = await getPlansByProductIdController(id);

  createRequestLog(req);

  res.json(plans);
});

export default router;
