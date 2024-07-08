import Sequelize from 'sequelize';

const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    //'lgpd',
    //'postgres',
    //'postgres',
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      //host: 'localhost',
      //port: 5432,
      dialect: 'postgres',
      define: {
          timestamps: false
      }
    }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// O restante do seu código de aplicação


export default sequelize;