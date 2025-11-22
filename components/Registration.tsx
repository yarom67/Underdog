"use client"

import { Button } from "./ui/Button"
import { motion } from "framer-motion"

export function Registration() {
    return (
        <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Ready to Race?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto"
                >
                    Join hundreds of other dogs and their humans for a day of unforgettable fun.
                    Registration includes a race kit, medal, and professional photos.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                        Register Your Dog
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto rounded-full">
                        Volunteer
                    </Button>
                </motion.div>

                <p className="mt-8 text-sm text-secondary-foreground/60">
                    Next Race: June 15th, 2025 • Central Park, NY
                </p>
            </div>
        </section>
    )
}
