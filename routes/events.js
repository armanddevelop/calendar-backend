/*
  Routes of user /authUser
  host + /api/v1/events
*/
const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events-controller");
const { validateJWT } = require("../middlewares/valid-jwt");
const { validateFields } = require("../middlewares/validateFields");
const { isDate } = require("../utils/isDate");

router.use(validateJWT);

router.get("/", getEvents);
router.post(
  "/create-new-event",
  [
    check("title").notEmpty().withMessage("The title is required"),
    check("start")
      .notEmpty()
      .withMessage("The start date is required")
      .custom(isDate),
    check("end")
      .notEmpty()
      .withMessage("The end date is required")
      .custom(isDate),
    validateFields,
  ],
  createEvent
);
router.put("/update-event/:id", updateEvent);
router.delete("/delete-event/:id", deleteEvent);

module.exports = router;
