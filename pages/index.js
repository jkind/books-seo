import Link from 'next/link'
export default function Home() {
  return (
    <div className="text-center mt-4">
      <h1 className="text-2xl mb-4">Home Page</h1>
      <ul>
        <li><Link href="/api/lists"><a>All Books</a></Link></li>
        <li><Link href="/list/top-3-books-to-learn-business"><a>Top 3 Books to Learn Business</a></Link></li>
      </ul>
    </div>
  )
}
