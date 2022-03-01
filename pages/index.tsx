import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
const Teleport = dynamic(import("../components/teleport"))
const Mobile = dynamic(import("../components/mobile"))

export default function Home() {
	const [showMobile, setShowMobile] = useState(false)
	const [showTeleport, setShowTeleport] = useState(false)
	const init = async () => {
		//把方法变成异步模式
		const skynet = await import("utils/skynet")
		skynet.default.start()
	}

	useEffect(() => {
		require('common/rem.js')
		if (
			window.navigator.userAgent.match(
				/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
			)
		) {
			setTimeout(() => {
				setShowMobile(true)
				setShowTeleport(false)
			}, 1);
		} else {
			setTimeout(() => {
				setShowTeleport(true)
				setShowMobile(false)
			}, 1);
		}
		init().then()
		return () => { }
	})

	return (
		<>
			{showMobile && <Mobile></Mobile>}
			{showTeleport && <Teleport></Teleport>}
		</>
	)
}
