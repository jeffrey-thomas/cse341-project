import { dbInit, getDbClient } from "../data/database.js";
import { ObjectId } from "mongodb";

await dbInit();
const mongo = getDbClient();

export const contactsController = {
  getAll: async (req, res) => {
    const result = await mongo.db("cse341").collection("contacts").find();
    result.toArray().then((contacts) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(contacts);
    });
  },

  getSingle: async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongo
      .db("cse341")
      .collection("contacts")
      .find({ _id: contactId });
    result.toArray().then((contacts) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(contacts[0]);
    });
  },

  createContact: async (req, res) => {
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };

    const response = await mongo
      .db("cse341")
      .collection("contacts")
      .insertOne(contact);

    //Check database response
    if (response.acknowledged) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(
          response.error || "An error occurred while inserting the contact.",
        );
    }
  },

  updateContact: async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    console.log(req.params.id);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };

    const response = await mongo
      .db("cse341")
      .collection("contacts")
      .replaceOne({ _id: contactId }, contact);

    //Check database response
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(
          response.error || "An error occurred while updating the contact.",
        );
    }
  },

  deleteContact: async (req, res) => {
    const contactId = new ObjectId(req.params.id);

    const response = await mongo
      .db("cse341")
      .collection("contacts")
      .deleteOne({ _id: contactId });

    //check mongo respose
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(
          response.error || "An error occurred while deleting the contact.",
        );
    }
  },
};
