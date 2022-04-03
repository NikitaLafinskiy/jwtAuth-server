import express from 'express';
import register from './auth/register.route';
import emailActivation from './auth/email.route';
import login from './auth/login.route';
import logout from './auth/logout.route';
import refresh from './auth/refresh.route';
import getUser from './auth/getUser.route';

export const routes = (app: express.Application) => {
  app.use(register);
  app.use(emailActivation);
  app.use(login);
  app.use(logout);
  app.use(refresh);
  app.use(getUser);
};
