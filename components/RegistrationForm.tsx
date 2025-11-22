"use client"

import { useState } from "react"
import { Button } from "./ui/Button"
import { submitRegistration } from "@/app/actions"
import { Loader2, CheckCircle } from "lucide-react"

export function RegistrationForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        const formData = new FormData(event.currentTarget)
        await submitRegistration(formData)

        setIsLoading(false)
        setIsSuccess(true)
    }

    if (isSuccess) {
        return (
            <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">תודה שנרשמתם!</h3>
                <p className="text-gray-600">
                    פרטי ההרשמה נשלחו בהצלחה. ניצור איתכם קשר בקרוב עם פרטים נוספים.
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-right" dir="rtl">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="ישראל ישראלי"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">אימייל</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                />
            </div>

            <div>
                <label htmlFor="dogName" className="block text-sm font-medium text-gray-700 mb-1">שם הכלב/ה</label>
                <input
                    type="text"
                    id="dogName"
                    name="dogName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="רקס"
                />
            </div>

            <div>
                <label htmlFor="dogBreed" className="block text-sm font-medium text-gray-700 mb-1">גזע / סוג המוגבלות</label>
                <textarea
                    id="dogBreed"
                    name="dogBreed"
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="לדוגמה: לברדור, מתנייד בכיסא גלגלים..."
                />
            </div>

            <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3"
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        שולח...
                    </>
                ) : (
                    "שלח הרשמה"
                )}
            </Button>
        </form>
    )
}
