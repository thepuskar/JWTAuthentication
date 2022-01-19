import nodemailer from 'nodemailer';
import { BadRequestError } from './errors';
import { renderFile } from 'ejs';

interface IOptions {
  user: object;
  url: string;
  template: string;
  date?: Date;
  email: string;
  subject: string;
}

export const sendMail = async ({
  user,
  url,
  template,
  date,
  email,
  subject,
}: IOptions) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      service: process.env.EMAIL_SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const html = await renderFile(
      `${__dirname}/../../views/email/${template}`,
      {
        user,
        url,
        date,
      },
    );

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      html,
    });
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Email sending failed');
  }
};
