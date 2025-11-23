"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/Button"
import Image from "next/image"

import { useRegistration } from "@/context/RegistrationContext"

export function Hero() {
    const { openModal } = useRegistration()

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Dog running in a race"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 flex justify-center"
                >
                    <Image
                        src="/logo.png"
                        alt="מרוץ ה-אנדרדוג"
                        width={500}
                        height={200}
                        className="w-[500px] h-auto"
                        priority
                    />
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200"
                >
                    חוגגים את הרוח, הנחישות והשמחה הבלתי ניתנת לעצירה של כלבים עם מוגבלויות. הצטרפו למרוץ שבו כל צעד הוא ניצחון.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold" onClick={openModal}>
                        הירשמו עכשיו
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                        למידע נוסף
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
