const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');

// console.log(process.env)
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

dotenv.config({ path: './config.env' });

mongoose
  // .connect(process.env.DATABASE_LOCAL, {    // LOCAL DATABASE
  .connect(DB, {
    // HOSTED DATABASE
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful!');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});