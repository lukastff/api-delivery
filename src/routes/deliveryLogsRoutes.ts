import { Router } from "express";
import { DeliveryLogsController } from "@/controllers/deliveryLogsController";

import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

const deliveryLogsRoutes = Router();
const deliveryLogsController = new DeliveryLogsController();

deliveryLogsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["sale"]),
  deliveryLogsController.create
);

export { deliveryLogsRoutes };
