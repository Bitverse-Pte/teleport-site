import React, { memo, useEffect, useState } from 'react'
import { Menu, Dropdown } from 'antd';
// import sensorHelper from 'sensors';
import { HomeStyled } from './style'
import logo from 'assets/imgs/logo.jpg'
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


const Teleport = () => {
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
  const docMenu = (
    <div className="communityView">
      <img className="arrow" src={top_arrow} alt="" />
      <div className="communityViewItem" key="0">
        {/* <img src={nav_twitter} alt="" /> */}
        <a className="media" target="_blank" href="https://docs.teleport.network">Teleport</a>
      </div>
      {/* <div className="communityViewItem" key="1">
        <a className="media" target="_blank" href="https://bridge.qa.davionlabs.com">bridge</a>
      </div> */}
      <div className="communityViewItem" key="2">
        {/* <img src={nav_discord} alt="" /> */}
        <a className="media" target="_blank" href="https://chain-docs.teleport.network">Chain</a>
      </div>
    </div>
  );
  const exploreMenu = (
    <div className="communityView">
      <img className="arrow" src={top_arrow} alt="" />
      <div className="communityViewItem" key="0">
        {/* <img src={nav_twitter} alt="" /> */}
        {/* https://blockscout.qa.davionlabs.com */}
        <a className="media" target="_blank" href="https://evm-explorer.testnet.teleport.network">EVM</a>
      </div>
      {/* <div className="communityViewItem" key="1">
        <a className="media" target="_blank" href="https://bridge.qa.davionlabs.com">bridge</a>
      </div> */}
      <div className="communityViewItem" key="2">
        {/* <img src={nav_discord} alt="" /> */}
        {/* https://explorer.qa.davionlabs.com */}
        <a className="media" target="_blank" href="https://explorer.testnet.teleport.network">Tendermint</a>
      </div>
    </div>
  );
  const fauctMenu = (
    <div className="communityView">
      <img className="arrow" src={top_arrow} alt="" />
      <div className="communityViewItem" key="0">
        {/* <img src={nav_twitter} alt="" /> */}
        <a className="media" target="_blank" href="https://rinkeby-erc20-faucet.testnet.teleport.network">Rinkeby</a>
      </div>
      {/* <div className="communityViewItem" key="1">
        <a className="media" target="_blank" href="https://bridge.qa.davionlabs.com">bridge</a>
      </div> */}
      <div className="communityViewItem" key="2">
        {/* <img src={nav_discord} alt="" /> */}
        <a className="media" target="_blank" href="https://bsctest-erc20-faucet.testnet.teleport.network">BSC Testnet</a>
      </div>
    </div>
  );
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
          <Dropdown className="dropdown" overlay={docMenu}
          >
            <a className="ant-dropdown-link"
            >
              Docs
              <img className="dropdown_arrow" src={dropdown_arrow} alt="" />
            </a>
          </Dropdown>
          <Dropdown className="dropdown" overlay={fauctMenu}
          >
            <a className="ant-dropdown-link"
            >
              Faucet
              <img className="dropdown_arrow" src={dropdown_arrow} alt="" />
            </a>
          </Dropdown>
          <Dropdown className="dropdown" overlay={exploreMenu}
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
          {/* <button className="launchApp">Launch App</button> */}
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
          <a className="bannerBtn2 topMove" target="_blank" href="https://docs.teleport.network">Docs</a>
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
            <div className="liTitle">DApp <br></br> Interoperability</div>
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
          <div className="subtitle ">Token swap between any chains <span className="addView dml10"></span></div>
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
        <div className="right">©2022 Teleport Network. All rights reserved.</div>
        {/* <div>© 2019 - 2020 Byvrese. All Rights Reserved.</div> */}
        <div className="contactView">
          <a className="contactItem topMove" target="_blank" href="https://twitter.com/TeleportChain">
            <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.1312 9.67773C34.1312 9.30569 34.1243 8.93785 34.1086 8.57253C35.6323 7.3875 36.9544 5.9041 38 4.20663C36.58 4.87351 35.069 5.30498 33.5215 5.48547C35.1321 4.45099 36.3673 2.79654 36.951 0.811121C35.4429 1.76571 33.7748 2.44815 32.0011 2.80375C30.58 1.116 28.552 0.0410181 26.3101 0.00107178C22.0043 -0.0732242 18.5139 3.72447 18.5139 8.48235C18.5139 9.15864 18.5817 9.8145 18.7162 10.4478C12.2323 10.0123 6.48676 6.48979 2.64345 1.17952C1.97283 2.45179 1.58809 3.93869 1.58809 5.53213C1.58809 8.54594 2.96451 11.2246 5.05585 12.8052C3.77555 12.7448 2.57622 12.3401 1.52428 11.6765V11.7872C1.52428 15.9994 4.2125 19.5286 7.77946 20.352C7.12554 20.5461 6.43582 20.6472 5.72646 20.6435C5.23361 20.6409 4.74235 20.5847 4.26063 20.476C5.25177 23.9278 8.13236 26.4497 11.5427 26.5337C8.87362 28.8435 5.51144 30.2232 1.8611 30.2136C1.2317 30.2136 0.609753 30.1695 0 30.0896C3.4516 32.5607 7.54875 34 11.9532 34C26.2904 34.0036 34.1312 20.9786 34.1312 9.67773Z" />
            </svg>

          </a>
          <a className="contactItem topMove" target="_blank" href="https://t.me/TeleportNetwork">
            <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2956 29.9576L14.8859 21.0393L31.0781 6.44955C31.7949 5.79596 30.9305 5.47971 29.9817 6.04896L9.99457 18.678L1.35034 15.9371C-0.50501 15.41 -0.526094 14.1239 1.77201 13.1963L35.4424 0.208831C36.9814 -0.486924 38.4573 0.588335 37.867 2.94969L32.1322 29.9576C31.7317 31.8762 30.5721 32.3401 28.9697 31.4546L20.2411 25.003L16.0455 29.0721C15.5606 29.5571 15.16 29.9576 14.2956 29.9576Z" />
            </svg>
          </a>
          <a className="contactItem topMove" target="_blank" href="https://discord.gg/5YQtRDF4Rh">
            <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.5912 7.07419C37.5792 7.04978 37.5593 7.03066 37.5351 7.02024C34.7369 5.67222 31.7841 4.71097 28.7504 4.16056C28.7228 4.15518 28.6944 4.15906 28.669 4.17165C28.6437 4.18424 28.6228 4.2049 28.6092 4.23069C28.2072 4.99697 27.8422 5.78406 27.5156 6.58897C24.2455 6.06775 20.9192 6.06775 17.649 6.58897C17.3203 5.78202 16.9495 4.99473 16.5381 4.23069C16.524 4.20546 16.503 4.18528 16.4778 4.17277C16.4526 4.16026 16.4244 4.15601 16.3969 4.16056C13.3629 4.70982 10.4099 5.67114 7.61205 7.02032C7.5881 7.03098 7.56789 7.04918 7.55421 7.07242C1.95916 15.8457 0.426458 24.4032 1.17835 32.8548C1.18046 32.8755 1.18652 32.8956 1.19617 32.9138C1.20582 32.932 1.21885 32.948 1.2345 32.9608C4.49245 35.4936 8.13651 37.427 12.0112 38.6784C12.0384 38.6869 12.0676 38.6866 12.0947 38.6772C12.1217 38.6679 12.1454 38.6501 12.1626 38.6263C12.9948 37.4373 13.7322 36.1783 14.3672 34.8621C14.376 34.844 14.3809 34.8242 14.3819 34.804C14.3828 34.7838 14.3796 34.7636 14.3725 34.7447C14.3655 34.7259 14.3547 34.7088 14.3409 34.6947C14.3271 34.6805 14.3106 34.6696 14.2924 34.6627C13.1296 34.1955 12.0039 33.6323 10.9258 32.9785C10.9062 32.9664 10.8898 32.9494 10.8779 32.9291C10.8661 32.9087 10.8592 32.8856 10.8578 32.8618C10.8565 32.838 10.8607 32.8142 10.8702 32.7926C10.8797 32.7709 10.8942 32.752 10.9122 32.7376C11.1391 32.5596 11.362 32.3763 11.5808 32.1875C11.6 32.1709 11.6232 32.1603 11.6479 32.1568C11.6725 32.1533 11.6976 32.1571 11.7203 32.1678C18.7833 35.5524 26.43 35.5524 33.4094 32.1678C33.4322 32.1565 33.4575 32.1521 33.4825 32.1553C33.5075 32.1585 33.5311 32.169 33.5506 32.1858C33.7697 32.3755 33.9932 32.5595 34.2209 32.7376C34.2391 32.7519 34.2536 32.7706 34.2633 32.7922C34.2729 32.8138 34.2773 32.8375 34.2762 32.8614C34.275 32.8852 34.2683 32.9083 34.2565 32.9287C34.2448 32.9492 34.2285 32.9663 34.209 32.9785C33.1334 33.6378 32.0066 34.2006 30.8408 34.6609C30.8227 34.6681 30.8062 34.6793 30.7925 34.6936C30.7788 34.708 30.7681 34.7253 30.7612 34.7443C30.7543 34.7632 30.7512 34.7836 30.7523 34.8039C30.7534 34.8242 30.7585 34.844 30.7674 34.8621C31.4131 36.171 32.1494 37.4284 32.9703 38.6242C32.987 38.6487 33.0106 38.6671 33.0378 38.6768C33.0649 38.6865 33.0943 38.6869 33.1218 38.6781C37.0034 37.431 40.6538 35.4975 43.9158 32.9608C43.9317 32.9486 43.9449 32.933 43.9546 32.915C43.9643 32.8971 43.9702 32.8771 43.972 32.8566C44.8721 23.0857 42.465 14.5983 37.5912 7.07419V7.07419ZM15.422 27.7087C13.2956 27.7087 11.5434 25.6597 11.5434 23.1432C11.5434 20.6268 13.2616 18.5777 15.422 18.5777C17.5994 18.5777 19.3346 20.6446 19.3006 23.1431C19.3006 25.6597 17.5824 27.7087 15.422 27.7087V27.7087ZM29.7626 27.7087C27.6361 27.7087 25.884 25.6597 25.884 23.1432C25.884 20.6268 27.6022 18.5777 29.7626 18.5777C31.9401 18.5777 33.6752 20.6446 33.6412 23.1431C33.6412 25.6597 31.9401 27.7087 29.7626 27.7087Z" />
            </svg>
          </a>
          <a className="contactItem topMove" target="_blank" href="https://medium.com/@TeleportNetwork">
            <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6486 6.92741V31.8008C12.6486 32.1539 12.5604 32.4543 12.384 32.7021C12.2076 32.9499 11.9498 33.0738 11.6105 33.0738C11.3701 33.0738 11.1372 33.0172 10.9118 32.904L1.06038 27.9628C0.763794 27.8211 0.513081 27.5844 0.308239 27.2527C0.103397 26.921 0.000976562 26.5924 0.000976562 26.267V2.09309C0.000976562 1.81047 0.0717616 1.5702 0.213332 1.37228C0.354902 1.17436 0.559743 1.07541 0.827856 1.07541C1.02558 1.07541 1.3364 1.18149 1.76032 1.39366L12.5857 6.82172C12.6284 6.86447 12.6497 6.8997 12.6497 6.92741H12.6486ZM14.0045 9.06847L25.3175 27.432L14.0045 21.7913V9.06847ZM37.9639 9.45085V31.8008C37.9639 32.1539 37.865 32.4401 37.6673 32.6594C37.4696 32.8786 37.2011 32.9883 36.8618 32.9883C36.5225 32.9883 36.1907 32.8965 35.8664 32.7128L26.524 28.0471L37.9639 9.45085ZM37.8998 6.90603C37.8998 6.94878 36.0887 9.91397 32.4664 15.8016C28.8441 21.6892 26.7221 25.135 26.1005 26.1388L17.8388 12.6951L24.703 1.51953C24.9434 1.1237 25.3108 0.925781 25.8051 0.925781C26.0028 0.925781 26.1863 0.968136 26.3555 1.05284L37.8168 6.77778C37.8729 6.80628 37.901 6.84864 37.901 6.90485L37.8998 6.90603Z" />
            </svg>
          </a>
          <a className="contactItem topMove" title="support@teleport.network" href="mailto:support@teleport.network">
            <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.9647 4.80483L18.7504 15.8968L0.0151255 5.07709C0.19663 2.2436 2.55115 0 5.43001 0H32.57C35.3581 0 37.6572 2.09739 37.9647 4.80483ZM38 8.77776V25.6627C38 28.6626 35.5699 31.0927 32.57 31.0927H5.43001C2.43014 31.0927 0 28.6626 0 25.6627V9.06514L17.8933 19.3958C18.5084 19.7487 19.2496 19.6832 19.784 19.2899C19.8092 19.2798 19.8294 19.2647 19.8546 19.2496L38 8.77776Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </HomeStyled>
}
export default memo(Teleport)