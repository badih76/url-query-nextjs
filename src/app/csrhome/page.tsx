'use client'

import { useSearchParams } from "next/navigation"


const CSRHome = () => {
    const params = useSearchParams();
    
    return (
        <>
            <h1>CSR Home Page</h1>
            <h2> You passed { params!.get('text') }</h2>
        </>
    )
}

export default CSRHome;