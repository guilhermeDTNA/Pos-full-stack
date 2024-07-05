import Sequelize from 'sequelize';

const sequelize = new Sequelize (
    process.env.DB_HOST,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT,
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