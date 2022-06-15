import getConfig from 'next/config'
import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { withRouter } from 'next/router'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const name = 'INFERNA'
export const siteTitle = 'Reverse-Image-Search'

export default function Layout({ children, home, passData }) {
  const pass_data = passData === '' || passData == undefined ? [] : JSON.parse(passData)
  console.log(pass_data)

  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="icon"
          href={`${publicRuntimeConfig.rootFolder}/favicon.ico`}
        />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src={`${publicRuntimeConfig.rootFolder}/images/white-logo.png`}
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
          <Link href="/">
            <a>
              <img
                  src={`${publicRuntimeConfig.rootFolder}/images/white-logo.png`}
                  className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
            </a>
          </Link>
           
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>

      {/* display the searching result into list */}
      {

        (pass_data && pass_data.length) ? 
          (<div className={styles.searchImagePanel}>
             Finded Image: {pass_data.length}
            {
              pass_data.map((element, index) => 
                  element.url ? 
                  ( <div key={index} className={styles.searchImageItem}>
                      <a key={index} target="_blank" rel="noopener noreferrer" href={element.url}>{element.title} </a>
                    </div>
                  ) : null
              )
            }
          </div>)
          :
          null
      }

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
