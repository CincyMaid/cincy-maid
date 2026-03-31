import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const {
    fullName,
    email,
    phone,
    currentWorkplace,
    city,
    travelDistance,
    ownTransportation,
    ownCleaningSupplies,
    hasInsurance,
    backgroundCheck,
    yearsExperience,
    hoursPerWeek,
  } = body;

  const { error } = await resend.emails.send({
    from: "Cincy Maid Careers <careers@cincymaid.com>",
    to: "admin@cincymaid.com",
    replyTo: email,
    subject: `New Job Application — ${fullName}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2d2d2d;">
        <div style="background: #0d9488; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Job Application</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">Submitted via cincymaid.com/careers</p>
        </div>
        <div style="background: #f9f6f1; padding: 32px; border: 1px solid #e5e0d8; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: 600; width: 200px; color: #555;">Full Name</td><td style="padding: 8px 0;">${fullName}</td></tr>
            <tr style="background: #fff;"><td style="padding: 8px 0; font-weight: 600; color: #555;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0d9488;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #0d9488;">${phone}</a></td></tr>
            <tr style="background: #fff;"><td style="padding: 8px 0; font-weight: 600; color: #555;">Current Workplace</td><td style="padding: 8px 0;">${currentWorkplace || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">City</td><td style="padding: 8px 0;">${city}, OH</td></tr>
            <tr style="background: #fff;"><td style="padding: 8px 0; font-weight: 600; color: #555;">Travel Distance</td><td style="padding: 8px 0;">${travelDistance} miles</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Own Transportation</td><td style="padding: 8px 0;">${ownTransportation}</td></tr>
            <tr style="background: #fff;"><td style="padding: 8px 0; font-weight: 600; color: #555;">Own Cleaning Supplies</td><td style="padding: 8px 0;">${ownCleaningSupplies}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Has Insurance</td><td style="padding: 8px 0;">${hasInsurance}</td></tr>
            <tr style="background: #fff;"><td style="padding: 8px 0; font-weight: 600; color: #555;">Background Check</td><td style="padding: 8px 0;">${backgroundCheck}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #555;">Years of Experience</td><td style="padding: 8px 0;">${yearsExperience}</td></tr>
            <tr style="background: #fff;"><td style="padding: 8px 0; font-weight: 600; color: #555;">Hours Per Week</td><td style="padding: 8px 0;">${hoursPerWeek}</td></tr>
          </table>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
