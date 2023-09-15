import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {

  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Ângelo. I'm a software developer and a technology enthusiastic</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (

            <Link key={id} href={`/posts/${id}`}>
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            </Link>

          ))}
        </ul>
      </section>
    </Layout>
  );
}