import { AsyncRouter } from "express-async-router";

import cards from "./cards";
import plans from "./plans";
import products from "./products";

const router = AsyncRouter();

router.get("/ping", async (req, res) => res.status(200).send("pong"));
router.get("/date", async (req, res) => res.status(200).send(new Date().toISOString()));
router.get("/favicon.ico", async (req, res) => res.status(204).end());

router.use("/cards", cards);
router.use("/plans", plans);
router.use("/products", products);

export default router;
