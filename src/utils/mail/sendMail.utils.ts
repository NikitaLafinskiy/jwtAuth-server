import { sendMailType } from '../../@types/mail.d';
import { mailTransporter } from './mailTransporter.utils';
import nodemailer from 'nodemailer';

export const sendMail: sendMailType = async (to, link) => {
  let testAccount = await nodemailer.createTestAccount();
  const transporter = mailTransporter(testAccount);

  let info = await transporter.sendMail({
    from: `Mikita <${process.env.SMTP_EMAIL}>`,
    to,
    subject: 'Follow the link to confirm your email address',
    text: '',
    html: `
            <div>
                <h1>Follow the link to confirm your email address</h1>
                <a href="${link}" target="_blank">${link}</a>
            </div>
    `,
  });

  return { msg: info.messageId };
};
