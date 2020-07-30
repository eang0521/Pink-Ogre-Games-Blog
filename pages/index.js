import { getSortedPostsData } from '../lib/posts'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Pink Ogre Games Blog</title>
      </Head>
          <Carousel>
          <Carousel.Item>
          <img
      className="d-block w-100"
      src="/images/Hoops.jpg"
      alt="First slide"
          />
          <Carousel.Caption>
          <h3>Hoops!</h3>
          <p>Our first game</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
      className="d-block w-100"
      src="/images/StAnSmash.jpg"
      alt="Second slide"
          />

          <Carousel.Caption>
          <h3>Stuffed Animal Smash</h3>
          <p>A stuffed animal brawl</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
      className="d-block w-100"
      src="/images/SpaceTrader.jpg"
      alt="Third slide"
          />

          <Carousel.Caption style={{backgroundColor: 'rgba(200, 200, 200, 0.5)'}}>
          <h3 style={{color: 'black'}}>Space Trader</h3>
          <p style={{color: 'black'}}>Making money, in space!</p>
          </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
          <br />
          <Jumbotron fluid style={{padding: 25}}>
        <h1 style={{textAlign: "center"}}>Pink Ogre Games</h1>
        <p style={{textAlign: "center"}}>Welcome to the <b>official</b> Pink Ogre Games Blog! We'll write about all kinds of things here, from our favorite board games, to our least favorite game mechanics! We'll post new content as often as possible (hopefully everyday!)</p>
      </Jumbotron>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
          </section>
    </Layout>
  )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
	props: {
	    allPostsData
	}
    }
}
