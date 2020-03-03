import { Sequelize } from 'sequelize';

// Import Models
import AccountsModel from './Accounts';
import CardsModel from './Cards';
import FeaturesModel from './Features';
import PaymentAttemptsModel from './PaymentAttempts';
import PaymentsModel from './Payments';
import ServicesModel from './Services';
import UsersModel from './Users';

// Get config data to connect to MainDB
// const NODE_ENV = process.env.NODE_ENV || 'develop';
const DB_USERNAME = process.env.DB_USERNAME || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'root';
const DB_DATABASE = process.env.DB_DATABASE || 'main-saas';
const DB_PORT = process.env.DB_PORT || 3306;
const DB_HOSTNAME = process.env.DB_HOSTNAME || 'localhost';

// Initialize Sequelize
const sequelizeMain = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOSTNAME,
  dialect: 'mysql',
  port: DB_PORT,
});

// Set Models
const Accounts = AccountsModel(sequelizeMain, Sequelize);
const Cards = CardsModel(sequelizeMain, Sequelize);
const Features = FeaturesModel(sequelizeMain, Sequelize);
const PaymentAttempts = PaymentAttemptsModel(sequelizeMain, Sequelize);
const Payments = PaymentsModel(sequelizeMain, Sequelize);
const Services = ServicesModel(sequelizeMain, Sequelize);
const Users = UsersModel(sequelizeMain, Sequelize);

const models = {
  Accounts,
  Cards,
  Features,
  PaymentAttempts,
  Payments,
  Services,
  Users,
}

// Associate Models
for (const model in models) {
  if (typeof models[model].associate === 'function') {
    models[model].associate(models);
  }
}

sequelizeMain.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});

// Inicializar Scopes (Aunque aun no los usamos)

export default {
  sequelizeMain,
  ...models,
};
