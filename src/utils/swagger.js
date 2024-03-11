import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerJson } from "../../swagger.js";
const options = {
  definition: {
    openapi: "3.0.0",
    host: "localhost:3008",
    basePath: "/",
    info: {
      title: "My Brand Jacques",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default function swaggerDoc(app, port) {
  try {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));
    app.get("docs.json", (req, res) => {
      res.setHeader("content-Type", "application/json");
      res.send(swaggerSpec);
    });
  } catch (error) {
    console.log(error.message);
  }
}
