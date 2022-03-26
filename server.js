const path = require("path");
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret", // change and add to .env
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(session(sess));
app.use(routes);

// turn on connection to db and server
// FYI .sync() means that sequelize is taking the models and connecting them to their associated tables in the db. if it doesn't find a table it creates one.
// FYI force:true means that the db tables will be dropped and re-created on startup. same as DROP TABLE IF EXISTS in sql.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
