import Link from "next/link";

interface IItem {
    id: string,
    title: string,
    details: string
}

const BlogPage = async () => {
    const req = await fetch('http://localhost:3000/api/blog',
        {
            method: "get",
            cache: "no-store"
        });

    const items = await req.json();

    return (
        <>
            <h1>This is the blog page</h1>
            <ul>
                {
                items.map((i: IItem) => {
                    return (
                    <li>
                        <Link href={`/blog/${i.id}`}>{`This is ${i.title}`}</Link>
                    </li>
                    )
                })
                }
            </ul>
        </>
    )
}

export default BlogPage;