"use client"
import { useState, useEffect } from "react"
import styles from "@/app/ui/navbar.module.css"

export default function Navbar() {
    const [visibleNavbar, setVisibleNavbar] = useState(false)
    const [visibleSidebar, setVisibleSidebar] = useState(false)
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            setScrollY(currentY)
            setVisibleNavbar(currentY > 200)
        }

        // Ejecución inicial por si la página carga con scroll abajo
        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleSidebar = () => setVisibleSidebar((prev) => !prev)

    return (
        <nav className={`${styles.main} ${visibleNavbar ? styles.appear : styles.disappear}`}>
            <div className={styles.button} onClick={toggleSidebar}>
                <p>{scrollY}</p>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        </nav>
    )
}