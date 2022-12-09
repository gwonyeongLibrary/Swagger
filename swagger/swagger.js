const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");
const swagger_autogen = require("swagger-autogen");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "권영 스웨거 연습장",
      description: "Practice Swagger!",
    },
    servers: [
      {
        url: "http://localhost:3000", // 요청 URL
      },
    ],
  },
  apis: ["./routers/*.js"], //Swagger 파일 연동
};
const specs = swaggereJsdoc(options);
const output_file = "./swagger/swagger-output.json";
const endpoints_file = ["./routers/index.js"];
swagger_autogen(output_file, endpoints_file, options);

module.exports = { swaggerUi, specs };
