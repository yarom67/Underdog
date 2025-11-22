"use client"

import { motion } from "framer-motion"
import { Heart, Trophy, Users, ShieldCheck } from "lucide-react"
import Image from "next/image"

const features = [
    {
        icon: Heart,
        title: "Inclusive Categories",
        description: "Races tailored for different abilities: Wheelchair Sprints, Tripod Dashes, and Blind/Deaf Navigation courses."
    },
    {
        icon: Users,
        title: "Community Support",
        description: "Connect with other owners, vets, and specialists who understand the unique needs of special dogs."
    },
    {
        icon: Trophy,
        title: "Every Dog Wins",
        description: "While we have winners, every participant receives a medal. It's about the finish line, not the time."
    },
    {
        icon: ShieldCheck,
        title: "Vet Supervised",
        description: "A full team of veterinarians and physios on-site to ensure the safety and health of every athlete."
    }
]

export function Features() {
    return (
        <section className="py-20 bg-muted/30 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4 text-secondary"
                    >
                        Why We Run
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        A safe, professionally managed environment where your dog can shine.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border/50"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 rounded-3xl overflow-hidden relative h-[400px]"
                >
                    <Image
                        src="/features.png"
                        alt="Dogs playing together"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <p className="text-white text-2xl font-medium max-w-xl">
                            "Seeing my dog run freely with others like him was the most emotional moment of my life."
                            <span className="block text-primary text-lg mt-2">- Sarah, Max's Mom</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
