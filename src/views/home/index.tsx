import React, { memo, useEffect, useState } from 'react'
import { Menu, Dropdown } from 'antd';
// import sensorHelper from 'sensors';
import { HomeStyled } from './style'
import logo from 'assets/imgs/logo.jpg'
import twitter from 'assets/imgs/twitter.svg'
import tg from 'assets/imgs/tg.svg'
import mSvg from 'assets/imgs/m.svg'
import email from 'assets/imgs/email.svg'
import nav_telegram from 'assets/imgs/nav_telegram.png'
import nav_discord from 'assets/imgs/nav_discord.png'
import nav_medium from 'assets/imgs/nav_medium.png'
import nav_twitter from 'assets/imgs/nav_twitter.png'
import logo1 from 'assets/imgs/logo1.png'
import top_arrow from 'assets/imgs/top_arrow.png'
import dropdown_arrow from 'assets/imgs/dropdown_arrow.png'
import { useInterval } from 'hooks/timer';
import sendToSvg from 'assets/imgs/sendTo.svg'
import { setTimeout } from 'timers';

import BTC_icon from 'assets/imgs/token/BTC.png';
import ETH_icon from 'assets/imgs/token/ETH.png';
import USDC_icon from 'assets/imgs/token/USDC.png';
import USDT_icon from 'assets/imgs/token/USDT.png';
import DAI_icon from 'assets/imgs/token/DAI.png';

import AVALANCHE_icon from 'assets/imgs/chain/AVALANCHE.png';
import BSC_icon from 'assets/imgs/chain/BSC.png';
import COSMOS_icon from 'assets/imgs/chain/COSMOS.png';
import POLYGON_icon from 'assets/imgs/chain/POLYGON.png';
import SOLANA_icon from 'assets/imgs/chain/SOLANA.png';
import TERRA_icon from 'assets/imgs/chain/TERRA.png';


const Home = () => {
  const [aboutViewAnimate, setaboutViewAnimate] = useState("");
  const [bridgeViewAnimate, setBridgeViewAnimate] = useState("");
  const [teleswapAnimate, setTeleswapAnimate] = useState("");
  const [metaAnimate, setMetaAnimate] = useState("");
  const [roadmapLineViewAnimate, setRoadmapLineViewAnimate] = useState("");
  const [sendAnimate, setSendAnimate] = useState("");
  const [toAnimate, setToAnimate] = useState("");
  const [headViewMove, setHeadViewMove] = useState("");
  const bridgeSends = ["BTC", "ETH", "USDT", "USDC", "DAI"]
  const sendIcons = [BTC_icon, ETH_icon, USDT_icon, USDC_icon, DAI_icon]
  const bridgeTos = ["Ethereum", "BSC", "Polygon", "Avalanche", "Cosmos", "Solana", "Terra"]
  const toIcons = [ETH_icon, BSC_icon, POLYGON_icon, AVALANCHE_icon, COSMOS_icon, SOLANA_icon, TERRA_icon]
  let [sendLoopIndex, setSendLoopIndex] = useState(0);
  let [toLoopIndex, setToLoopIndex] = useState(0);
  let pageEnds = [1, 1, 1, 1, 1, 1]

  useEffect(() => {
    // sensorHelper.track('autoTrack2222')
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  useInterval(3000, () => {
    if (sendLoopIndex >= bridgeSends.length - 1) {
      setSendLoopIndex(0)
    } else {
      setSendLoopIndex(sendLoopIndex => sendLoopIndex + 1)
    }
    setSendAnimate("animate__animated animate__fadeInUp")
    setTimeout(() => {
      setSendAnimate("")
    }, 1000)
    if (toLoopIndex >= bridgeTos.length - 1) {
      setToLoopIndex(0)
    } else {
      setToLoopIndex(toLoopIndex => toLoopIndex + 1)
      setToAnimate("")
    }
    setToAnimate("animate__animated animate__fadeInUp")
    setTimeout(() => {
      setToAnimate("")
    }, 1000)
  });

  const handleScroll = (e: any) => {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop < 100) {
      setHeadViewMove("")
    } else {
      setHeadViewMove("headViewMove")
    }
    const aboutView: any = document.getElementsByClassName("aboutView")[0]
    if (pageEnds[0] && aboutView && aboutView.offsetTop && scrollTop >= aboutView.offsetTop - 800) {
      setaboutViewAnimate('animate__animated animate__fadeInUp')
      pageEnds[0] = 0
    }
    const bridgeView: any = document.getElementsByClassName("bridgeView")[0]
    if (pageEnds[1] && bridgeView && bridgeView.offsetTop && scrollTop >= bridgeView.offsetTop - 800) {
      setBridgeViewAnimate('animate__animated animate__fadeInUp')
      pageEnds[1] = 0
    }
    const teleswap: any = document.getElementsByClassName("teleswap")[0]
    if (pageEnds[2] && teleswap && teleswap.offsetTop && scrollTop >= teleswap.offsetTop - 800) {
      setTeleswapAnimate('animate__animated animate__fadeInUp')
      pageEnds[2] = 0
    }
    const metaView: any = document.getElementsByClassName("metaView")[0]
    if (pageEnds[3] && metaView && metaView.offsetTop && scrollTop >= metaView.offsetTop - 800) {
      setMetaAnimate('animate__animated animate__fadeInUp')
      pageEnds[3] = 0
    }

    const roadmapLineView: any = document.getElementsByClassName("roadmapLineView")[0]
    if (pageEnds[4] && roadmapLineView && roadmapLineView.offsetTop && scrollTop >= roadmapLineView.offsetTop - 800) {
      setRoadmapLineViewAnimate('animate__animated animate__fadeInUp')
      pageEnds[4] = 0
    }
    const bottomView: any = document.getElementsByClassName("bottomView")[0]
    if (bottomView && bottomView.offsetTop && scrollTop >= bottomView.offsetTop) {
      setaboutViewAnimate('')
      setBridgeViewAnimate('')
      setTeleswapAnimate('')
      setMetaAnimate('')
      setRoadmapLineViewAnimate("")
      // window.removeEventListener('scroll', handleScroll)
    }
  }
  const menu = (
    <div className="communityView">
      <img className="arrow" src={top_arrow} alt="" />
      <div className="communityViewItem" key="0">
        <img src={nav_twitter} alt="" />
        <a className="media" target="_blank" href="https://twitter.com/TeleportChain">Twitter</a>
      </div>
      <div className="communityViewItem" key="1">
        <img src={nav_telegram} alt="" />
        <a className="media" target="_blank" href="https://t.me/TeleportNetwork">Telegram</a>
      </div>
      <div className="communityViewItem" key="2">
        <img src={nav_discord} alt="" />
        <a className="media" target="_blank" href="https://discord.gg/5YQtRDF4Rh">Discord</a>
      </div>
      <div className="communityViewItem" key="3">
        <img src={nav_medium} alt="" />
        <a className="media" target="_blank" href="https://medium.com/@TeleportNetwork">Medium</a>
      </div>
    </div>
  );
  return <HomeStyled>
    {/* <div onClick={e => sensorHelper.track('getCode',{name:"top"})}>top</div>
    <div onClick={e => sensorHelper.track('getCode',{name:"right"})}>right</div>
    <div onClick={e => sensorHelper.track('getCode',{name:"bottom"})}>bottom</div>
    <div onClick={e => sensorHelper.track('getCode',{name:"left"})}>left</div> */}
    <div className={["headView", headViewMove].join(" ")}>
      <div className="centerView   dflexRowBetweenCenter">
        <div className="logo">
          <img className="logoImg1" src={logo1} alt="" />
          <img className="logoImg" src={logo} alt="" />
        </div>
        <div className="rightNav">
          <Dropdown className="dropdown" overlay={menu}
          >
            <a className="ant-dropdown-link"
            >
              Docs
              <img className="dropdown_arrow" src={dropdown_arrow} alt="" />
            </a>
          </Dropdown>
          <Dropdown className="dropdown" overlay={menu}
          >
            <a className="ant-dropdown-link"
            >
              Faucet
              <img className="dropdown_arrow" src={dropdown_arrow} alt="" />
            </a>
          </Dropdown>
          <Dropdown className="dropdown" overlay={menu}
          >
            <a className="ant-dropdown-link"
            >
              Explorer
              <img className="dropdown_arrow" src={dropdown_arrow} alt="" />
            </a>
          </Dropdown>
          <Dropdown className="dropdown" overlay={menu}
          // trigger={['click']}
          >
            <a className="ant-dropdown-link"
            // onClick={e => e.preventDefault()}
            >
              Community
              <img className="dropdown_arrow" src={dropdown_arrow} alt="" />
            </a>
          </Dropdown>
          {/* <span className="doc">Docs</span> */}
          {/* <span className="languages">Languages</span> */}
          <button className="launchApp">Launch App</button>
        </div>
      </div>
    </div>
    <div className="bannerView">
      <div className="centerView ">
        <div className="title title1">Interoperability Platform</div>
        <div className="title title2">for Web3.0</div>
        {/* <div className="title title3 topMove">for WEB3</div> */}
        <div className="subTitle">
          {/* An ecosystem for multi-chain assets & <br></br>  cross-chain transactions */}
          Accelerate crypto assets & dApps to multi-chain
        </div>
        <div>
          {/* <span className="bannerBtn1 topMove">Docs</span> */}
          <button className="bannerBtn2 topMove">Docs</button>
        </div>

        <div className="contactView">
          {/* <div className="contactItem topMove">
            <img src={twitter} alt="" />
          </div>
          <div className="contactItem topMove">
            <img src={tg} alt="" />
          </div>
          <div className="contactItem topMove">
            <img src={mSvg} alt="" />
          </div>
          <div className="contactItem topMove">
            <img src={email} alt="" />
          </div> */}
        </div>
      </div>
    </div>
    <div className={["aboutView", aboutViewAnimate].join(" ")}>
      <div className="centerView">
        <div className="title ">Teleport Features</div>
        <div className="table dflexRowStartStart">
          <div className="cell dflex1 ">
            <div>
              <span className="round"></span>
              <span className="round round2"></span>
            </div>
            <div className="liTitle">Omni-chain Integration</div>
            <div className="liSubtitle dmb10">Support EVM & non-EVM <br></br> chains via XIBC protocol</div>
            {/* <div className="liSubtitle2">*Extensible Inter-Blockchain Communication</div> */}
          </div>
          <div className="cell dflex1 cell2 topMove">
            <div>
              <span className="round"></span>
              <span className="round round2"></span>
            </div>
            <div className="liTitle">Alternative Cross-chain Approach</div>
            <div className="liSubtitle">State Relay - Trustless <p>Oracle TSS - Cost effective</p></div>
          </div>
          <div className="cell dflex1 topMove">
            <div>
              <span className="round"></span>
              <span className="round round2"></span>
            </div>
            <div className="liTitle">dApp <br></br> Interoperability</div>
            <div className="liSubtitle">Non-invasive SDK for   <br></br> seamless dApp  integration</div>
          </div>
        </div>
      </div>
    </div>
    <div className={["bridgeView", bridgeViewAnimate].join(" ")}>
      <div className="centerView">
        <div className="title dmb20">
          <div>Teleport Bridge</div>
        </div>
        <div className="subtitle">Cross-chain Token Transfer</div>
        <div className="sendToView dflexRowStartCenter">
          <div className={["dflexColumnStartCenter", sendAnimate].join(" ")}>
            <img className="sendImg dmb20" src={sendIcons[sendLoopIndex]} alt="" />
            <div className="chainName">{bridgeSends[sendLoopIndex]}</div>
          </div>
          <div>
            <img className="sendToImg" src={sendToSvg} alt="" />
          </div>
          <div className={["dflexColumnStartCenter", toAnimate].join(" ")}>
            <img className="toImg dmb20" src={toIcons[toLoopIndex]} alt="" />
            <div className="chainName">{bridgeTos[toLoopIndex]}</div>
          </div>
          <div className="dflex1"></div>
        </div>
      </div>
    </div>
    <div className={["teleswap", teleswapAnimate].join(" ")}>
      <div className="centerView dflexRowEndCenter">
        <div className="dflex1">
        </div>
        <div className="dflex1">
          <div className="title">Teleswap</div>
          <div className="subtitle subtitle1 ">Cross-chain liquidity aggregator <span className="addView dml10"></span></div>
          <div className="subtitle ">Support token swap between any chains <span className="addView dml10"></span></div>
        </div>
      </div>
    </div>
    <div className={["metaView", metaAnimate].join(" ")}>
      <div className="centerView dflexRowEndCenter">
        <div className="dflex1">
          <div className="title ">Metaverse Hub</div>
          <div className="desc dflexRowStartStart">
            <span className="addView dmr20" style={{ position: "relative", top: "1.2rem" }}></span>
            <div>First EVM-compatible relay chain <br></br> for DeFi, NFT, and game</div>
          </div>
        </div>
        <div className="dflex1"></div>
      </div>
    </div>
    <div className="roadmapView animate__animated animate__fadeInUp">
      <div className="centerView">
        <div className="roadmapTitle">Teleport Roadmap</div>
      </div>
    </div>
    <div className={["roadmapLineView", roadmapLineViewAnimate].join(" ")}>
      <div className="centerView">
        <div className="dflexRowCenterCenter">
          <div className="dflex1"></div>
          <div className="dflex5 roadItem roadItem1  dflexColumnStartCenter">
            <div className="roadItemCtt">
              <div className="title">2021 Q4</div>
              <div className="desc">
                <div><span className="roadmapRound"></span> Team setup</div>
                <div><span className="roadmapRound"></span> Product design & early-</div>
                <div><span className="roadmapRoundNo"></span> stage development</div>
              </div>
            </div>
          </div>
          <div className="dflex5 roadItem roadItem2 dflexColumnEndCenter">
            <div className="roadItemCtt">
              <div className="title">2022 Q1</div>
              <div className="desc">
                <div><span className="roadmapRound"></span> Testnet launch</div>
                <div><span className="roadmapRound"></span> Cross-chain transfer &</div>
                <div><span className="roadmapRoundNo"></span> contract call via IBC & TSS</div>
              </div>
            </div>
          </div>
          <div className="dflex5 roadItem roadItem3 dflexColumnStartCenter">
            <div className="roadItemCtt">
              <div className="title">2022 Q2</div>
              <div className="desc">
                <div><span className="roadmapRound"></span> Mainnet launch</div>
                <div><span className="roadmapRoundNo"></span> EVM chain support</div>
                <div><span className="roadmapRound"></span> Cross-chain relayer Incentive</div>
                <div><span className="roadmapRoundNo"></span> Program</div>
                <div><span className="roadmapRound"></span> Multi-chain wallet release</div>
              </div>
            </div>
          </div>
          <div className="dflex5 roadItem roadItem4 dflexColumnEndCenter">
            <div className="roadItemCtt">
              <div className="title">2022 Q3</div>
              <div className="desc">
                <div><span className="roadmapRound"></span> Cross-chain DEX launch</div>
                <div><span className="roadmapRound"></span> Connecting non-EVM chains</div>
                <div><span className="roadmapRound"></span> Plug & play SDK</div>
              </div>
            </div>
          </div>
          <div className="dflex5 roadItem roadItem5 dflexColumnStartCenter">
            <div className="roadItemCtt">
              <div className="title">2022 Q4</div>
              <div className="desc">
                <div><span className="roadmapRound"></span> TSS Node on-chain</div>
                <div><span className="roadmapRoundNo"></span> governance</div>
                <div><span className="roadmapRound"></span> ZK cross-chain relay</div>
              </div>
            </div>
          </div>
          <div className="dflex1"></div>
        </div>
      </div>
    </div>
    <div className="bottomView animate__animated animate__fadeInUp">
      <div className="centerView dflexRowBetweenCenter">
        <div className="right">©2021 Teleport Network. All rights reserved.</div>
        {/* <div>© 2019 - 2020 Byvrese. All Rights Reserved.</div> */}
        <div className="contactView">
          <a className="contactItem topMove" target="_blank" href="https://twitter.com/TeleportChain">
            <img src={twitter} alt="" />
          </a>
          <a className="contactItem topMove" target="_blank" href="https://t.me/TeleportNetwork">
            <img src={tg} alt="" />
          </a>
          <a className="contactItem topMove" target="_blank" href="https://medium.com/@TeleportNetwork">
            <img src={mSvg} alt="" />
          </a>
          <span className="contactItem topMove" title="support@teleport.network">
            <img src={email} alt="" />
          </span>
        </div>
      </div>
    </div>
  </HomeStyled>
}
export default memo(Home)