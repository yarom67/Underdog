"use client"

import { motion } from "framer-motion"

export function About() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-6 text-secondary">More Than Just a Race</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            The Underdog Race is the world's first competitive event designed exclusively for dogs with disabilities.
                            Whether on wheels, three legs, or with other unique challenges, these athletes prove that spirit knows no bounds.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our mission is to celebrate the resilience of our furry friends and raise awareness about the incredible capabilities
                            of special needs pets. It's a day of joy, community, and high-speed tail wags.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Placeholder for a video or another image if needed, using a gradient for now or I can reuse the hero image with different crop */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <span className="text-6xl">🐾</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
