import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
const Teleport = dynamic(import("../components/teleport"))
const Mobile = dynamic(import("../components/mobile"))

export default function Home() {
	const [isMobile, setIsMobile] = useState(false)

	const init = async () => {
		//把方法变成异步模式
		const skynet = await import("utils/skynet")
		skynet.default.start()
	}

	useEffect(() => {
		if (
			window.navigator.userAgent.match(
				/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
			)
		) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
		init().then()
		return () => {}
	})

	return (
		<>
			{isMobile && <Mobile></Mobile>}
			{!isMobile && <Teleport></Teleport>}
		</>
	)
}
