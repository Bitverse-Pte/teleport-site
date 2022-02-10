import styled from 'styled-components'
import home_bg1 from 'assets/imgs/home_bg1.png'
import home_bg2 from 'assets/imgs/home_bg2.png'
import home_bg3 from 'assets/imgs/home_bg3.png'
import home_bg4 from 'assets/imgs/home_bg4.png'
import home_bg5 from 'assets/imgs/home_bg5.png'
import home_bg5_1 from 'assets/imgs/home_bg5-1.png'
import home_bg6 from 'assets/imgs/home_bg6.png'
import home_bg8 from 'assets/imgs/home_bg8.png'
import home_bg9 from 'assets/imgs/home_bg9.png'

export const HomeStyled = styled.div`
    padding-top: 10rem;
    .topMove:hover {
        position: relative;
        top: -4px;
    }
    .headViewMove {
        background: rgba(18, 22, 21, 0.69) !important;
        box-shadow: 0px 9px 10px rgba(0, 0, 0, 0.08) !important;
        backdrop-filter: blur(20px) !important;
    }
   
    .headView {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 10rem;
        line-height:10rem;
        background-image: url(${home_bg1});
        background-size: 100% 100%;
        color: #FFFFFF;
        .logoImg1 {
            width: 6rem;
            height: auto;
            margin-right: 1rem;
        }
        .logoImg {
            width: 20.6rem;
            height: 2.8rem;
        }
        .rightNav {
            font-size: 2.2rem;
            .dropdown {
                margin-right: 5rem;
                font-weight: 500;
                text-align: right;
                color: #FFFFFF;
            }
            .doc {
                margin-right: 9rem;
                font-weight: 500;
            }
            .launchApp {
                display: inline-block;
                text-align: center;
                width: 17.7rem;
                line-height: 4.7rem;
                background: #00C6A9;
                border-radius: 8px;
                color: #FFFFFF;
                font-weight: bold;
                font-size: 2rem;
            }
            .launchApp:hover {
                background: #00C6A9;
                color: #FFFFFF;
                cursor: pointer;
                font-weight: bold;
            }
        }
    }
    .bannerView {
        width:100vw;
        height: 84rem;
        background-image: url(${home_bg2});
        background-size: 100% 100%;
        padding-top: 16.7rem;
        .title {
            font-weight: 600;
            font-size: 6rem;
            color: #FFFFFF;
        }
        .title1 {
        }
        .title2 {
            margin-top: -2.5rem;
        }
        .title3 {
            margin-top: -2.5rem;
            margin-bottom: 2.3rem;
        }
        .subTitle {
            width: 72.3rem;
            font-weight: 300;
            font-size: 3rem;
            line-height: 4rem;
            color: #FFFFFF;
            letter-spacing: 0.02em;
            opacity: 0.7;
            margin-bottom: 8.1rem;
        }
        .bannerBtn1 {
            display: inline-block;
            width: 17.7rem;
            line-height: 4.7rem;
            background: #00C6A9;
            border-radius: 8px;
            text-align: center;
            font-size: 2.6rem;
            color: #FFFFFF;
            margin-right: 2rem;
        }
        .bannerBtn1:hover {
            background: #00B197;
            box-shadow: 0px 0px 6px 1px #00C6A9;
        }
        .bannerBtn2 {
            display: inline-block;
            width: 17.7rem;
            line-height: 4.7rem;
            border-radius: 8px;
            text-align: center;
            font-size: 2.6rem;
            color: #FFFFFF;
            margin-bottom: 9.7rem;
            background-color: rgba(2,5,5,1);
            border: 1px solid rgba(255,255,255,1)
        }
        .bannerBtn2:hover {
            color: #00C6A9;
            border: 1px solid #00C6A9;
        }
        .contactView {
            
        }
    }

    .aboutView {
        width:100vw;
        height: 78rem;
        background-image: url(${home_bg3});
        background-size: 100% 100%;
        padding-top: 20rem;
        .title {
            font-size: 6.6rem;
            margin-bottom: 8rem;
            height: 9.9rem;
            font-weight: bold;
            line-height: 9.9rem;
            text-align: center;
            text-transform: capitalize;
            color: #FFFFFF;
        }
        .table {
            .cell {
                margin-right: 2.8rem;
                padding: 3rem;
                height: 27.4rem;
                background: rgba(123, 195, 200, 0.1);
                backdrop-filter: blur(4px);
                border-radius: 8px;
                border: 1px solid rgba(18,26,25,1);
                .round {
                    display: inline-block;
                    width: 1rem;
                    height: 1rem;
                    border: 0.05rem solid #FFFFFF;
                    box-sizing: border-box;
                    border-radius: 50%;
                    margin-bottom: 3.8rem;
                }
                .round2 {
                    position: relative;
                    left: -0.4rem;
                }
                .liTitle {
                    font-weight: 600;
                    font-size: 2.8rem;
                    line-height: 2.7rem;
                    margin-bottom: 2.4rem;
                    letter-spacing: 0.08em;
                    color: #FFFFFF;
                }
                .liSubtitle {
                    font-weight: 300;
                    font-size: 2.2rem;
                    line-height: 2.6rem;
                    letter-spacing: 0.06em;
                    color: #FFFFFF;
                    opacity: 0.7;
                }
            }
            .cell:hover {
                margin-top: -1rem;
                background: rgba(123, 195, 200, 0.1);
                border: 1px solid #00C6A9;
                box-sizing: border-box;
                box-shadow: 0px 41px 22px -16px rgba(0, 198, 169, 0.17), 0px 0px 10px 1px rgba(0, 198, 169, 0.5);
                border-radius: 8px;
                .round2 {
                   background: #00C6A9;
                   border: 1px solid #00C6A9;
                }
            }
            .cell2 {
                position: relative;
                top: 5.2rem;
            }
        }
    }

    .bridgeView {
        width:100vw;
        height: 82.6rem;
        background-image: url(${home_bg4});
        background-size: 100% 100%;
        padding-top: 21rem;
        .title {
            margin-bottom: 2rem;
            >div {
                line-height: 7rem;
                font-weight: bold;
                font-size: 6.6rem;
                color: #FFFFFF;
            }
        }
        .subtitle {
            margin-bottom: 5.5rem;
            height: 2.7rem;
            font-size: 2.6rem;
            line-height: 2.7rem;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            opacity: 0.8;
            margin-left: 0.6rem;
        }
        .chainName {
            font-weight: 600;
            font-size: 2.4rem;
            line-height: 2.7rem;
            color: #FFFFFF;
        }
        .sendToView {
            .sendToImg {
                display: inline-block;
                width: 16rem;
                height: 5.2rem;
                margin: 0 2.5rem 0 1rem;
            }
            .label {
                display: inline-block;
                width: 6rem;
                font-size: 2.2rem;
                letter-spacing: 0.08em;
                color: #FFFFFF;
                margin-right: 1.3rem;
            }
            .sendImg {
                width: 5rem;
                height: 5rem;
            }
            
            .toImg {
                width: 5.6rem;
                height: 5.6rem;
            }
        }
    }

    .teleswap {
        width: 100vw;
        height: 86rem;
        background-image: url(${home_bg5});
        background-size: 100% 100%;
        padding-top: 32rem;
        text-align: right;
        .teleswapIcon {
            width: 155rem;
            height: 178rem;
        }
        .title {
            line-height: 10rem;
            font-weight: bold;
            font-size: 6.6rem;
            line-height: 99px;
            text-align: right;
            color: #FFFFFF;
            margin-bottom: 1rem;
        }
        .subtitle {
            font-size: 2.6rem;
            line-height: 2.7rem;
            text-align: right;
            letter-spacing: 0.06em;
            color: #FFFFFF;
            opacity: 0.8;
        }
        .subtitle1 {
            margin-bottom: 1.8rem;
        }
       
    }
    .metaView {
        width: 100vw;
        height: 95rem;
        background-image: url(${home_bg5_1});
        background-size: 100% 100%;
        padding-top: 35rem;
        .title {
            font-weight: bold;
            font-size: 6.6rem;
            line-height: 9.9rem;
            text-transform: capitalize;
            color: #FFFFFF;
            margin-bottom: 1.6rem;
        }
        .desc {
            width: 51.2rem;
            font-size: 2.6rem;
            line-height: 3.6rem;
            letter-spacing: 0.06em;
            color: #FFFFFF;
            opacity: 0.8
        }
    }
    .roadmapView {
        text-align: center;
        background-image: url(${home_bg6});
        background-size: 100% 100%;
        line-height: 27.5rem;
        .roadmapTitle {
            font-weight: bold;
            font-size: 6.6rem;
            text-transform: capitalize;
            color: #FFFFFF;
        }
    }
   
    .roadmapLineView {
        width: 100vw;
        /* height: 73.3rem; */
        background-image: url(${home_bg8});
        background-size: 100% 100%;
        .roadmapRound {
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            margin-right: 1rem;
            background: #9B9B9B;
        }
        .roadmapRoundNo {
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            margin-right: 1rem;
        }
        .roadItem {
            height: 73.3rem;
            font-weight: normal;
            color: #FFFFFF;
            color: rgba(255, 255, 255,0.8);
            .roadItemCtt {
                .title {
                    font-size: 2.8rem;
                    color: #03C7AB;
                    margin-bottom: 1rem;
                    font-weight: bold;
                }
                .desc {
                    font-size: 1.8rem;
                }
            }
            .roadItemCtt:hover {
                position: relative;
                top: -4px;
                color: rgba(255, 255, 255,1);
            }
            .roadItemCtt:hover .roadmapRound{
                background: #03C7AB;
                border-radius: 50%;
            }
        }
        .roadItem1 {
            padding-top: 10rem;
        }
        .roadItem2 {
            padding-bottom: 8rem;
        }
        .roadItem3 {
            padding-top: 4rem;
        }
        .roadItem4 {
            padding-bottom: 10rem;
        }
        .roadItem5 {
            padding-top: 11rem;
        }
    }
    .bottomView {
        width: 100vw;
        background-image: url(${home_bg9});
        background-size: 100% 100%;
        color: #FFFFFF;
        .centerView {
            height: 22rem;
            .right {
                opacity: 0.7;
                position: relative;
                bottom: -1rem;
            }
        }
    }
`

