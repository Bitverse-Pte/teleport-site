import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
const Teleport = dynamic(import("../components/teleport"))
const Mobile = dynamic(import("../components/mobile"))

export default function Home({ isMobile }: any) {
	const [showPc, setShowPc] = useState(true)
	const [showLoading, setShowLoading] = useState(true)
	const init = async () => {
		const skynet = await import("utils/skynet")
		skynet.default.start()
	}

	useEffect(() => {
		require('common/rem.js')
		// if (
		// 	window.navigator.userAgent.match(
		// 		/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
		// 	)
		// )
		if (isMobile) {
			setTimeout(() => {
				setShowPc(false)
				setShowLoading(false)
			}, 1);
		} else {
			setTimeout(() => {
				setShowPc(true)
				setShowLoading(false)
			}, 1);
		}
		init().then()
		return () => { }
	}, [])

	return (
		<>
			{
				showLoading && <div style={{
					width: "100%",
					height: "100%",
					backgroundColor: "black",
					position: "fixed",
					zIndex: 10000
				}}>
				</div>
			}
			{!showPc && <Mobile></Mobile>}
			{showPc && <Teleport></Teleport>}
		</>
	)
}
Home.getInitialProps = async ({ req }: any) => {
	let userAgent = req?.headers && req?.headers['user-agent'] || "";
	let isMobile = false
	if (userAgent && userAgent.match(
		/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
	)) {
		isMobile = true
	}
	console.log("isMobile", isMobile)
	return { isMobile }
}