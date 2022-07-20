const express = require("express");
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const chalk = require("chalk");
const internalIp = require("internal-ip");
const bodyParser = require("body-parser");
const httpStatus = require("http-status");
const cors = require("cors");
const pathToRegexp = require("path-to-regexp");
const printStatus = require("./printStatus");
const routes = require("./routes");
const db = {};
const SECRET_KEY = "6Lex89kbAAAAAEvLhCndgt3EBMjtq8YykA9jwbMf";

db['login'] = require('./bff/login.json');
db['listar'] = require('./bff/obtenerArchivos.json');
db['obtenerCandidato'] = require('./bff/obtener-datos-candidato.json');
db['actualizarCandidato'] = require('./bff/actualizar-datos-candidato.json');
db['sesion'] = require('./bff/sesion.json');
db['crearArchivosAdjuntos'] = require('./bff/crearArchivosAdjuntos.json');
db['listarLocaciones'] = require('./bff/locations.json');

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
  res.json("Welcome to mockup");
});

/* app.post("/bff-onboarding-pyme-100/v1/candidato/adjunto/listar", (_req, res) => {
  res.status(400).send({
    "status":500,"code":1034,"error":{"type":"error","message":"<strong>Estamos con inestabilidad en nuestro servicios.</strong> Por favor, vuelva a intentarlo"}
 });
});  */

app.post("/recaptcha", (req, res) => {
  console.log("req", req.body.token);
  verify(req.body.token).then((response) => {
    console.log(response);
    res.json(response);
  });
});

const verify = (token) => {
  const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

  return fetch(VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${SECRET_KEY}&response=${token}`,
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data;
    });
};

app.use(({ path }, res, next) => {
  const routeNames = Object.keys(routes);
  let statusCode = res.statusCode;

  if (!res.capturado) {
    for (let index = 0; index < routeNames.length; index++) {
      const name = routeNames[index];
      const fromPath = pathToRegexp(name);
      console.log("res", res);
      if (fromPath.exec(path)) {
        const dataName = routes[name];
        const data = db[dataName];
        if (data) {
          printStatus(path, statusCode);
          return res.json(data);
        }
        statusCode = httpStatus.INTERNAL_SERVER_ERROR;

        res.status(statusCode).send("No hay data para esta url");
        printStatus(path, statusCode);

        return next();
      }
    }

    statusCode = httpStatus.NOT_FOUND;
    res
      .status(statusCode)
      .send("No existe ninguna ninguna referencia a esta url");
  }
  if (!res.cargando) {
    printStatus(path, statusCode);

    return next();
  }
});

const ip = internalIp.v4();
const port = process.env.PORT || 3010;

app.listen(port, () => {
  console.log(`Los servicios mockup estan desplegados en:`);
  console.log();
  console.log(`  ${chalk.bold("Local:")}           http://localhost:${port}/`);
  console.log();
});

module.exports = app;