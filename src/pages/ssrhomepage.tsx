import { NextPageContext } from "next";

const SSRHome = ({ query }: NextPageContext) => {

    return (
        <>
            <h1>SSR Home Page</h1>
            <h2>You passed { query.text }</h2>
        </>
        
    )
}

SSRHome.getInitialProps = async ({ query }: NextPageContext) => {
    console.log(query);

    return { query }
}

export default SSRHome;