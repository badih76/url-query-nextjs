import { NextPage } from "next";

interface IParams {
    text: string 
}

interface IProps {
    searchParams: IParams 
}

const SSRHome: NextPage<IProps> =  ({ searchParams }) => {
    console.log(searchParams);

    return (
        <>
            <h1>SSR Home Page</h1>
            <h2>You passed { searchParams.text }</h2>
        </>
        
    )
}

// const SSRHome =  ({ searchParams } : any) => {
//     console.log(searchParams);

//     return (
//         <>
//             <h1>SSR Home Page</h1>
//             <h2>You passed { searchParams.text }</h2>
//         </>
        
//     )
// }

export default SSRHome;
