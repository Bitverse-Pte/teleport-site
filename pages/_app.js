import Head from "next/head"
import "common/reset.css"
import "common/base.css"
import "common/animation.css"
import "antd/dist/antd.css"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="title" content="Teleport - Multi-Chain" />
				<meta
					name="keywords"
					content="Teleport,Evmos,Teleport Chain,Cross-chain Bridge,Multi-Chain,Token Transfer"
				/>
				<meta
					name="description"
					content="Teleport,Evmos,Teleport Chain,Cross-chain Bridge,Multi-Chain,Token Transfer"
				/>
				<meta property="og:title" content="Teleport - Multi-Chain" />
				<meta
					property="og:description"
					content="Teleport,Evmos,Teleport Chain,Cross-chain Bridge,Multi-Chain,Token Transfer"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Teleport" />
				<meta
					name="google-site-verification"
					content="2OFRwzykwoKPyUADzZ9JCA4jED2l5zZy31Q5lFsaHes"
				/>
				<title>Teleport</title>
				<link rel="icon" href="/teleport.png" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
