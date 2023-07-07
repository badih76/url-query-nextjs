import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>URL Query & Dynamic Route params in Next.js</h1>
      <div>
        <Link href={{ pathname: '/csrhome', query: { text: 'Client Side' } }}>CSR Home (App Router)</Link>
      </div>
      <div>
        <Link href={{ pathname: '/csrhomepage', query: { text: 'Client Side' } }}>CSR Home (Page Router)</Link>
      </div>
      <div>
        <Link href={{ pathname: '/ssrhome', query: { text: 'Server Side' } }}>SSR Home (App Router)</Link>
      </div>
      <div>
        <Link href={{ pathname: '/ssrhomepage', query: { text: 'Server Side' } }}>SSR Home (Page Router)</Link>
      </div>
      <div>
        <Link href='/blog'>Blog (Dynamic Routing)</Link>
      </div>
    </div>
  )
}
