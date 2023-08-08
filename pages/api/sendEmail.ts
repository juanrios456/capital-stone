import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend'
import { NextRequest, NextResponse } from "next/server";
import WelcomeEmail from "../../email/welcome";


const resend = new Resend(process.env.PROD_EMAIL_API_KEY);
const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;

export default async (req:NextApiRequest, res:NextApiResponse) =>{
  const values:any =  await req.body

  const parsedValues = JSON.parse(values);

    try {
      const data = await resend.emails.send({
        from: 'Juan <email@capitalstonellc.com>',
        to: ['juanriis456@gmail.com'],
        subject: `New Contact Form Recieved`,
        react: WelcomeEmail( parsedValues ),
      });

      return res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  };
