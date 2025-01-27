import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content={keywords}
      />
      <meta rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="msapplication-TileColor" content="#5000ff" />
      <meta name="theme-color" content="#5000ff" />

      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Bookify",
  keywords: "books",
  description: "Bookify provides access to 100+ hand-picked books for you to start learning new skills"
}

export default Meta
