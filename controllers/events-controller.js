const { response, request } = require("express");
const { responseSuccess, responseError } = require("../utils/responseManager");
const {
  createEventDB,
  getEventsDB,
  updateEventDB,
  deleteEventDB,
} = require("./store-events-controller");

const getEvents = async (req, res = response) => {
  try {
    const response = await getEventsDB(req);
    responseSuccess(res, 200, response);
  } catch (error) {
    console.error("[errorGetEvents]: ", error);
    return responseError(res, 500, "Error to show Events try again later");
  }
};

const createEvent = async (req, res = response) => {
  try {
    const response = await createEventDB(req);
    if (!response?.id) {
      return responseError(res, 400, response);
    }
    responseSuccess(res, 201, response);
  } catch (error) {
    console.error("[errorCreateEvent]: ", error);
    return responseError(res, 500, "Error to create event");
  }
};

const updateEvent = async (req = request, res = response) => {
  try {
    const response = await updateEventDB(req);
    if (!response)
      return responseError(res, 404, "no event for the id requested");
    if (typeof response === "string") return responseError(res, 401, response);
    responseSuccess(res, 201, response);
  } catch (error) {
    console.error("[errorUpdateEvent]: ", error);
    return responseError(res, 500, "Error to udpate event");
  }
};

const deleteEvent = async (req = request, res = response) => {
  try {
    const response = await deleteEventDB(req);
    if (!response)
      return responseError(res, 404, "no event for the id requested");
    if (typeof response === "string") return responseError(res, 401, response);
    return responseSuccess(res, 201, response);
  } catch (error) {
    console.error("[errorDeleteEvent]: ", error);
    return responseError(res, 500, "Error to delete event");
  }
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
