import Router from "express";
import { contactsRouter } from "./contacts.js";
import { swaggerRouter } from "./swagger.js";

export const router = Router();

router.use("/", swaggerRouter);

router.get("/", (req, res) => {
  //#swagger.tags=['Hello World']
  res.send("Hello World");
});

router.use("/contacts", contactsRouter);
router.use(swaggerRouter);
