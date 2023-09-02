'use client'

import useFetch from '@/hooks/useFetch'
import React from 'react'
import { useParams } from 'next/navigation'

const SingleCard = () => {
    const { id } = useParams()
    const { data, isLoading, isError } = useFetch(Number(id))

    return (
        <div>SingleCard</div>
    )
}

export default SingleCard