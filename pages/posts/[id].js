import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'

export async function getStaticProps({ params }) {
  console.log('getStaticProps')
  console.log(params);

  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  console.log('getStaticPaths');
  console.log(paths);

  return {
    paths,
    fallback: true
  }
}

export default function Post({ postData }) {

  const router = useRouter();
  const [param, setParam] = useState('');

  useEffect(() => {
      setParam(router.query.data);
  }, [])

  return (
    <Layout passData={param}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.description}</h1>
      </article>
    </Layout>
  )
}
