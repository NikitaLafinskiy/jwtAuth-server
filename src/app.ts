import 'reflect-metadata';
import { DataSource } from 'typeorm';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { routes } from './routes';
import { User } from './entity';
import { handleErr } from './middleware/error.middleware';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 6969;

const start = async () => {
  const AppSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '7913LafaDereh',
    database: 'jwt-auth-db',
    synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
    migrations: [],
    dropSchema: true,
  });
  await AppSource.initialize();

  app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  routes(app);
  app.use(handleErr);

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

start();
