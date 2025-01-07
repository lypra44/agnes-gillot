"use server";
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async () => {
    const { error } = await resend.emails.send({
        from: 'test@resend.dev',
        to: ['mel.kitenge@gmail.com'],
        subject: 'Hello world',
        react: EmailTemplate({ firstName: 'John' }),
      });
    
      if (error) {
        return error;
      }
}