import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend'
import { NextRequest, NextResponse } from "next/server";
import WelcomeEmail from "../../email/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;

export default async function handler(req:Request, res:NextApiResponse){
  const data:any = await req.body

    try {
      await resend.sendEmail({
        from: process.env.EMAIL_FROM || '',
        to: ['juanriis456@gmail.com'],
        subject: `New Website Contact Form Recieved by:${data.name}`,
        react: WelcomeEmail({
          name: data.name,
          phone: data.phone,
          email: data.email,
          details: data.details,
          project: data.project,
        }),
      });

      return NextResponse.json({
        status: 'Ok'
      }, {
        status: 200
      })
    } catch (e:unknown) {
      if(e instanceof Error){
        console.log(`Failed to Send Email: ${e.message}`)

      }
      return NextResponse.json({
        error: 'Internal server error.'
      }, {
        status: 500
      })
    }
  }
