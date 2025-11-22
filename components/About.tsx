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
                        <h2 className="text-4xl font-bold mb-6 text-secondary">יותר מסתם מרוץ</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            מרוץ האנדרדוג הוא האירוע התחרותי הראשון בעולם המיועד אך ורק לכלבים עם מוגבלויות.
                            בין אם על גלגלים, שלוש רגליים, או עם אתגרים ייחודיים אחרים, הספורטאים האלה מוכיחים שלרוח אין גבולות.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            המשימה שלנו היא לחגוג את החוסן של החברים הפרוותיים שלנו ולהעלות את המודעות ליכולות המדהימות של חיות מחמד עם צרכים מיוחדים. זהו יום של שמחה, קהילה וכשקושי זנב במהירות גבוהה.
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
