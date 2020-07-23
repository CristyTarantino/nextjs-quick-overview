import React from 'react'
import Link from 'next/link';

const IndexPage = ({ stars }) => {
  return (
    <div>
      <h1>The Main Page</h1>
      <p>
        Go to <Link href="/auth"><a>Auth</a></Link>
      </p>
      <div>Next stars: {stars}</div>
    </div>
  )
}

IndexPage.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default IndexPage
