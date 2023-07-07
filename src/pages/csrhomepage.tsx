'use client'

import { useRouter } from "next/router"


export default function Home () {
    const params = useRouter();
    
    // let's display the object returned by useRouter in the inspection console
    console.log(params);

    return (
        <>
            <h1>CSR Home Page</h1>
            <h2> You passed { params.query.text }</h2>
        </>
    )
}
