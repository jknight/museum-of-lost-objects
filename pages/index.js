import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>The Museum of Lost Objects</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>The Museum of Lost Objects</p>
            <ul>
                <li><Link href="/posts/first-post"><a>Page 1</a></Link></li>
                <li><Link href="/posts/second-post"><a>Page 2</a></Link></li>
            </ul>
        </section>
      </Layout>
  )
}
