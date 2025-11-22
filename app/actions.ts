"use server"

import nodemailer from "nodemailer"

export async function submitRegistration(formData: FormData) {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const dogName = formData.get("dogName") as string
    const dogBreed = formData.get("dogBreed") as string

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    })

    try {
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: "yarom67@gmail.com",
            subject: `New Underdog Race Registration: ${name}`,
            text: `
New Registration Details:

Owner: ${name}
Email: ${email}
Dog: ${dogName}
Details: ${dogBreed}
            `,
            html: `
                <h2>New Registration for Underdog Race</h2>
                <p><strong>Owner:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Dog:</strong> ${dogName}</p>
                <p><strong>Details:</strong> ${dogBreed}</p>
            `,
        })

        return { success: true, message: "Registration submitted successfully!" }
    } catch (error) {
        console.error("Error sending email:", error)
        return { success: false, message: "Failed to send registration email." }
    }
}
