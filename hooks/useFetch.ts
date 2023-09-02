'use client'

import { isError, useQuery } from "@tanstack/react-query";
import axios from "axios"
import { useCallback, useMemo } from "react";

const useFetch = (id?: number) => {

    const endPoint = useMemo(
        () => (id ? `https://fakestoreapi.com/products/${id}` : "https://fakestoreapi.com/products/"),
        [id]
    );

    const { isLoading, isError, data } = useQuery({
        queryKey: ["products", id],
        queryFn: () => {
            try {
                const data = axios(endPoint)
                return data
            } catch (error) {
                console.log(error)
                return
            }

        }
    })
    return { isLoading, isError, data }
}


export default useFetch
