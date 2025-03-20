import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Contacts API",
    desccription: "CSE341 Project 1 - API to track contacts ",
  },
  host: "cse341-project-ex42.onrender.com",
  schemes: ["https"],
};

const ouput = "./swagger-output.json";
const routes = ["./routes/index.js"];

swaggerAutogen()(ouput, routes, doc);
