import { Sequelize } from 'sequelize';

// Import Models
import AccountsModel from './Accounts';
import CardsModel from './Cards';
import ProductsModel from './Products';
import PaymentAttemptsModel from './PaymentAttempts';
import PaymentsModel from './Payments';
import PlansModel from './Plans';
import UsersModel from './Users';
import SubscriptionsModel from './Subscriptions';

// Get config data to connect to MainDB
// const NODE_ENV = process.env.NODE_ENV || 'develop';
const DB_USERNAME = process.env.DB_USERNAME || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'root';
const DB_DATABASE = process.env.DB_DATABASE || 'main-saas';
const DB_PORT = process.env.DB_PORT || 3306;
const DB_HOSTNAME = process.env.DB_HOSTNAME || 'localhost';

// Initialize Sequelize
const DBMain = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOSTNAME,
  dialect: 'mysql',
  port: DB_PORT,
});

// Set Models
const Accounts = AccountsModel(DBMain, Sequelize);
const Cards = CardsModel(DBMain, Sequelize);
const Products = ProductsModel(DBMain, Sequelize);
const PaymentAttempts = PaymentAttemptsModel(DBMain, Sequelize);
const Payments = PaymentsModel(DBMain, Sequelize);
const Plans = PlansModel(DBMain, Sequelize);
const Users = UsersModel(DBMain, Sequelize);
const Subscriptions = SubscriptionsModel(DBMain, Sequelize);

const models = {
  Accounts,
  Cards,
  Products,
  PaymentAttempts,
  Payments,
  Plans,
  Users,
  Subscriptions,
};

// Associate Models
for (const model in models) {
  if (typeof models[model].associate === 'function') {
    models[model].associate(models);
  }
}

// Initialize Scopes
for (const model in models) {
  if (typeof models[model].initScopes === 'function') {
    models[model].initScopes(models);
  }
}

// DBMain.sync({ force: true }).then(() => {
//   console.log(`Database & tables created!`);
// });

// DBMain.sync({ force: false }).then(() => {
//   console.log(`Database & tables created!`);
// });

export {
  DBMain,
  Accounts,
  Cards,
  Products,
  PaymentAttempts,
  Payments,
  Plans,
  Users,
  Subscriptions,
};
