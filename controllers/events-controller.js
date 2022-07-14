const { response, request } = require("express");
const { responseSuccess, responseError } = require("../utils/responseManager");
const { createEventDB } = require("./store-events-controller");

const eventsFakes = [
  {
    _id: new Date().getTime(),
    title: "Cumpleaños de pruebas",
    start: new Date().getTime(),
    end: new Date().getTime(),
    bgcolor: "#fafafa",
    notes: "alicha hehuche",
    user: {
      _id: "12346",
      name: "licha",
    },
  },
];

const getEvents = (req, res = response) => {
  res.status(200).send({
    ok: true,
    data: eventsFakes,
  });
};

const createEvent = async (req, res = response) => {
  const { title, start, end, notes } = req.body;
  try {
    //const response = await createEventDB(req.body);
    res.status(201).send({
      ok: true,
      data: {
        title,
        start,
        end,
        notes,
      },
    });
  } catch (error) {
    console.error("[errorCreateEvent]: ", error);
    responseError(res, 500, "Error to create event");
  }
};

const updateEvent = (req = request, res = response) => {
  const { id } = req.params;
  res.status(201).send({
    ok: true,
    data: "update",
    id,
  });
};

const deleteEvent = (req = request, res = response) => {
  const { id } = req.params;
  res.status(201).send({
    ok: true,
    data: "delete",
    id,
  });
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
