const Events = require("../models/EventsModel");

const getEventsDB = async (request) => {
  try {
    const events = await Events.find({ user: request.uid }).populate(
      "user",
      "name"
    );
    return events;
  } catch (error) {
    console.error("[errorGetEventsDB]: ", error);
    return error;
  }
};

const createEventDB = async (request) => {
  const event = new Events(request.body);
  try {
    event.user = request.uid;
    const eventSave = await event.save();
    return eventSave;
  } catch (error) {
    console.error("[errorCreateEventDB]: ", error);
    return error;
  }
};

const updateEventDB = async (request) => {
  try {
    const { id } = request.params;
    const findEvent = await Events.findById(id);
    const uid = request.uid;

    if (!findEvent) {
      return null;
    } else if (findEvent.user.toString() !== uid) {
      return "you can't performe this operation";
    }

    const updateEvent = {
      ...request.body,
      user: uid,
    };
    const response = Events.findByIdAndUpdate(id, updateEvent, { new: true });
    return response;
  } catch (error) {
    console.error("[errorUpdateEventDB]: ", error);
    return error;
  }
};

const deleteEventDB = async (request) => {
  try {
    const { id } = request.params;
    const findEvent = await Events.findById(id);
    if (!findEvent) {
      return null;
    } else if (findEvent.user.toString() !== request.uid) {
      return "you can't performe this operation";
    }
    await Events.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.error("[errorDeleteEventDB]: ", error);
    return error;
  }
};

module.exports = { createEventDB, getEventsDB, updateEventDB, deleteEventDB };
