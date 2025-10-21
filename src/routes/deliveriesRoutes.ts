import { Router } from "express";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { DeliveriesController } from "@/controllers/deliveriesController";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

import { DeliveriesStatusController } from "@/controllers/deliveriesStatusController";

const deliveriesRoutes = Router();
const deliveriesController = new DeliveriesController();
const deliveriesStatusController = new DeliveriesStatusController();

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]));
deliveriesRoutes.get("/", deliveriesController.index);
deliveriesRoutes.post("/", deliveriesController.create);
deliveriesRoutes.patch("/:id/status", deliveriesStatusController.update);

export { deliveriesRoutes };
