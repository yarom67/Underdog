"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/Button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { useRegistration } from "@/context/RegistrationContext"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { openModal } = useRegistration()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className={`text-2xl font-bold transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
                    Underdog
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {["אודות", "המרוצים", "סיפורים", "שאלות ותשובות"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? "text-muted-foreground" : "text-white/90"
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                    <Button
                        className={isScrolled ? "" : "bg-white text-black hover:bg-white/90"}
                        onClick={openModal}
                    >
                        הרשמה
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-current"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className={isScrolled ? "text-foreground" : "text-white"} /> : <Menu className={isScrolled ? "text-foreground" : "text-white"} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 md:hidden shadow-xl"
                    >
                        <div className="flex flex-col gap-4">
                            {["אודות", "המרוצים", "סיפורים", "שאלות ותשובות"].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-lg font-medium text-foreground hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <Button className="w-full" onClick={() => { setIsMobileMenuOpen(false); openModal(); }}>הרשמה</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
