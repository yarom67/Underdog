"use client"

import { motion } from "framer-motion"
import { Heart, Trophy, Users, ShieldCheck } from "lucide-react"
import Image from "next/image"

const features = [
    {
        icon: Heart,
        title: "קטגוריות מכילות",
        description: "מרוצים המותאמים ליכולות שונות: ספרינטים בכיסאות גלגלים, מקצי תלת-רגל, ומסלולי ניווט לעיוורים/חירשים."
    },
    {
        icon: Users,
        title: "תמיכה קהילתית",
        description: "התחברו לבעלים אחרים, וטרינרים ומומחים שמבינים את הצרכים הייחודיים של כלבים מיוחדים."
    },
    {
        icon: Trophy,
        title: "כל כלב מנצח",
        description: "למרות שיש לנו מנצחים, כל משתתף מקבל מדליה. זה עניין של קו הסיום, לא הזמן."
    },
    {
        icon: ShieldCheck,
        title: "פיקוח וטרינרי",
        description: "צוות מלא של וטרינרים ופיזיותרפיסטים באתר כדי להבטיח את הבטיחות והבריאות של כל ספורטאי."
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
                        className="text-4xl font-bold mb-4 text-primary"
                    >
                        למה אנחנו רצים
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        סביבה בטוחה ומנוהלת באופן מקצועי שבה הכלב שלכם יכול לזרוח.
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
                            "לראות את הכלב שלי רץ בחופשיות עם אחרים כמוהו היה הרגע המרגש ביותר בחיי."
                            <span className="block text-primary text-lg mt-2">- שרה, אמא של מקס</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
