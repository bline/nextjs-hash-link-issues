import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log("styles", styles);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <Link href="#section1">Section1</Link><br />
          <Link href="#section2">Section2</Link><br />
          <Link href="#section3">Section3</Link><br />
          <Link href="#section4">Section4</Link><br />
          <Link href="#section5">Section5</Link><br />
        </div>
        <div className={styles.section}>
          <a id="section1"></a>
          <h1>Section1</h1>
        </div>
        <div className={styles.section}>
          <a id="section2"></a>
          <h1>Section2</h1>
        </div>
        <div className={styles.section}>
          <a id="section3"></a>
          <h1>Section3</h1>
        </div>
        <div className={styles.section}>
          <a id="section4"></a>
          <h1>Section4</h1>
        </div>
        <div className={styles.section}>
          <a id="section5"></a>
          <h1>Section5</h1>
        </div>
      </main>
    </>
  )
}
