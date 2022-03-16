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
				<meta name="title" content="Teleport Network" />
				<meta
					name="keywords"
					content="Teleport,Evmos,Teleport Network,Cross-chain Bridge,Multi-Chain,Token Transfer,blockchain, crypto, web3, bridge, cross-chain, ethereum, bitcoin, cosmos, wallet, crypto wallet"
				/>
				<meta
					name="description"
					content="Teleport,Evmos,Teleport Network,Cross-chain Bridge,Multi-Chain,Token Transfer,blockchain, crypto, web3, bridge, cross-chain, ethereum, bitcoin, cosmos, wallet, crypto wallet"
				/>
				<meta property="og:title" content="Teleport Network" />
				<meta
					property="og:description"
					content="Teleport,Evmos,Teleport Chain,Cross-chain Bridge,Multi-Chain,Token Transfer,blockchain, crypto, web3, bridge, cross-chain, ethereum, bitcoin, cosmos, wallet, crypto wallet"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Teleport Network" />
				<meta
					name="google-site-verification"
					content="2OFRwzykwoKPyUADzZ9JCA4jED2l5zZy31Q5lFsaHes"
				/>
				<meta name="google-site-verification" content="lix4hrWneSKRDr7ooDLj1wz3tuRDo1Zitxm_WAJZ8nY" />
				<title>Teleport Network, Teleport Bridge, Multi-Chain</title>
				<link rel="icon" href="/teleport.png" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
