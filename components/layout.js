import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Pink Ogre Games'
export const siteTitle = 'Pink Ogre Games Blog'

export default function Layout({ children, home }) {
    return (
	    <div className={styles.container}>
	    <Head>
	    <link rel="icon" href="images/TransparentLogo.png" />
	    </Head>
	    <main>{children}</main>
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
