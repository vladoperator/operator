import process from "node:process";
import { T as TSS_SERVER_FUNCTION, c as createServerFn } from "./server-05IN_zjX.mjs";
import { n as nodemailer } from "../_libs/nodemailer.mjs";

import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, n as numberType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/unenv.mjs";


import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";





import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";











var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const sendReservation_createServerFn_handler = createServerRpc({
  id: "9f4bb2cd98d614225fcadf4b7fd806933c5bafeac5c38edd29a85a82bbf19d7a",
  name: "sendReservation",
  filename: "src/lib/api/reservation.functions.ts"
}, (opts) => sendReservation.__executeServer(opts));
const sendReservation = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  name: stringType().min(1),
  date: stringType().min(1),
  time: stringType().min(1),
  guests: numberType().min(1)
})).handler(sendReservation_createServerFn_handler, async ({
  data
}) => {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailPass) {
    console.error("GMAIL_USER or GMAIL_APP_PASSWORD environment variables are missing");
    throw new Error("SMTP server configuration is missing GMAIL_USER or GMAIL_APP_PASSWORD.");
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass
    }
  });
  const mailOptions = {
    from: `"Crosta Reservation System" <${gmailUser}>`,
    to: gmailUser,
    // Sends the email to the restaurant (the user's email)
    subject: `New Reservation Confirmation - ${data.name}`,
    text: `You have received a new reservation request:
      
Name: ${data.name}
Date: ${data.date}
Time: ${data.time}
Guests: ${data.guests}

Best regards,
Crosta Kitchen Bakery`,
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #c5a880; padding-bottom: 10px;">New Reservation Received</h2>
          <p style="font-size: 16px; color: #555;">Here are the reservation details for Crosta Kitchen Bakery:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Date:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.date}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Time:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.time}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Guests:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.guests}</td>
            </tr>
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">This is an automated notification from the Crosta Kitchen Bakery reservation system.</p>
        </div>
      `
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: %s", info.messageId);
    return {
      success: true
    };
  } catch (error) {
    console.error("Nodemailer failed to send email:", error);
    throw new Error(error?.message || "Failed to send email");
  }
});
export {
  sendReservation_createServerFn_handler
};
