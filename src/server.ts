// Setup root config dir
process.env["NODE_CONFIG_DIR"] = __dirname + '/config';

import express from 'express';
import connectDB from './config/db';
import cors from 'cors';
import routes from './routes';

const app = express();

// Connect Database
connectDB();

// Init cors setup middleware
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  response.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
  );
  next();
});

app.use(cors());

// Init JSON Middleware
app.use(express.json());

// Init routes middleware
app.use(routes);

// Init express server
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
