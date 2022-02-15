import React, { memo, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
// import sensorHelper from 'sensors';
const Home = () => {
  const history = useHistory();
  useEffect(() => {
    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
      history.push("/mobile");
    }else{
      history.push("/teleport");
    }
  })
  return <div>
  </div>
}
export default memo(Home)