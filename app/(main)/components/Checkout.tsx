'use client'

import React, { useState } from 'react'

const Checkout = () => {
    const [showCase, setShowCase] = useState<"statistics" | "services" | "faq">('statistics')

    const isActive = (title: string) => {
        if (title == showCase) return true
        return false
    }
    return (

        <h2>Showcase</h2>

    )
}

export default Checkout