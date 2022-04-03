import nodemailer from 'nodemailer';
import { mailTransporterType } from '../../@types/mail.d';

export const mailTransporter: mailTransporterType = (testAccount) => {
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
};
