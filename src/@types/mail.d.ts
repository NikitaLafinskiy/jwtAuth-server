import nodemailer from 'nodemailer';

export type emailActivationType = (
  link: string
) => Promise<{ user: UserDTO; isActive: boolean; msg: string }>;

export type mailTransporterType = (testAccount: {
  user: string;
  pass: string;
}) => nodemailer.Transporter<>;

export type sendMailType = (
  to: string,
  activationLink: string
) => Promise<{ msg: string }>;
