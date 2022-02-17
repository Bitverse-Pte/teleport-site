import React, { memo, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
const Teleport = React.lazy(() => import("views/teleport"));
const Mobile = React.lazy(() => import("views/mobile"));

// import sensorHelper from 'sensors';
const Home = () => {
  const history = useHistory();
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  })
  return <div>
    {
      isMobile && <Mobile></Mobile>
    }
     {
      !isMobile && <Teleport></Teleport>
    }
  </div>
}
export default memo(Home)