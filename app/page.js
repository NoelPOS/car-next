import Image from 'next/image'

export default function Home({ params, searchParams }) {
  return <h1>Hello {searchParams.name || 'world'}</h1>
}
