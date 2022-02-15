import styled from "styled-components";
import m1 from 'assets/imgs/mobile/m1.png'
import m2 from 'assets/imgs/mobile/m2.png'
import m3 from 'assets/imgs/mobile/m3.png'
import m4 from 'assets/imgs/mobile/m4.png'
import m5 from 'assets/imgs/mobile/m5.png'
import m6 from 'assets/imgs/mobile/m6.png'

export const MobileStyled = styled.div`
    .menuSpan {
        display: inline-block;
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
        background-color: white;
        margin-right: 0.3rem;
    }
    .topMoveMobile:hover {
        position: relative;
        top: -2px;
    }
    .m_headView {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 7.2rem;
        line-height: 7.2rem;
        color: #FFFFFF;
        background-color: rgba(6, 6, 6, 1);
        /* .logoImg1 {
            width: 6rem;
            height: auto;
            margin-right: 1rem;
        } */
        .logoImg {
            width: 10rem;
            height: auto;
        }
        .rightNav {
            .dropdownView {
                font-weight: 500;
                color: #FFFFFF;
            }
            .dropdownButton {
                height: 100%;
                display: inline-block;
            }
            .launchApp {
                display: inline-block;
                text-align: center;
                width: 10.8rem;
                line-height: 3.2rem;
                background: #00C6A9;
                border-radius: 8px;
                color: #FFFFFF;
                font-weight: 600;
                font-size: 1.3rem;
            }
            .launchApp:hover {
                background: #00C6A9;
                color: #FFFFFF;
                cursor: pointer;
                font-weight: bold;
            }
           
        }
    }
    .bannerViewMobile {
        width:100%;
        height: 33rem;
        background-image: url(${m1});
        background-size: 100% 100%;
        margin-top: 7.2rem;
        padding-top: 3.8rem;
        .title {
            font-weight: 600;
            font-size: 2.6rem;
            color: #FFFFFF;
        }
        .title2 {
            position: relative;
            top: -1rem;
            margin-bottom: .4rem;
        }
        .subTitle {
            font-size: 1.6rem;
            color: #FFFFFF;
            letter-spacing: 0.02em;
            opacity: 0.8;
        }
        .subTitle2 {
            margin-bottom: 3.2rem;
        }
        .bannerBtn1 {
            display: inline-block;
            width: 12.5rem;
            line-height: 3.5rem;
            background: #00C6A9;
            border-radius: 8px;
            text-align: center;
            font-size: 1.4rem;
            color: #FFFFFF;
            margin-right: 2rem;
            background-color: rgba(2,5,5,1);
            border: 1px solid rgba(255,255,255,1)
        }
        .bannerBtn1:hover {
            background: #00B197;
            box-shadow: 0px 0px 6px 1px #00C6A9;
        }
    }
    .aboutView {
        width:100vw;
        .title {
            font-size: 2.6rem;
            font-weight: bold;
            line-height: 3.9rem;
            text-align: center;
            color: #FFFFFF;
            margin: 3rem 0 2.4rem 0;
        }
        .table {
            .cell {
                width:100%;
                padding: 3rem;
                height: 22.2rem;
                background: rgba(123, 195, 200, 0.1);
                backdrop-filter: blur(4px);
                border-radius: 8px;
                border: 1px solid rgba(18,26,25,1);
                margin-bottom: 2rem;
                .round {
                    display: inline-block;
                    width: 1rem;
                    height: 1rem;
                    border: 0.05rem solid #FFFFFF;
                    box-sizing: border-box;
                    border-radius: 50%;
                    margin-bottom: 2.4rem;
                }
                .round2 {
                    position: relative;
                    left: -0.4rem;
                }
                .liTitle {
                    font-weight: 600;
                    font-size: 2.2rem;
                    line-height: 2.7rem;
                    margin-bottom: 1.6rem;
                    letter-spacing: 0.08em;
                    color: #FFFFFF;
                }
                .liSubtitle {
                    font-weight: 300;
                    font-size: 1.6rem;
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
        }
    }
    .bridgeView {
        width:100vw;
        height: 50.6rem;
        background-image: url(${m2});
        background-size: 100% 100%;
        padding-top: 6.1rem;
        .title {
            >div {
                line-height: 4rem;
                font-weight: bold;
                font-size: 2.6rem;
                color: #FFFFFF;
            }
        }
        .subtitle {
            margin-bottom: 2.5rem;
            font-size: 1.6rem;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            opacity: 0.8;
            margin-left: 0.6rem;
        }
        .chainName {
            font-weight: 600;
            font-size: 1.4rem;
            line-height: 1.7rem;
            color: #FFFFFF;
        }
        .sendToView {
            .sendImg {
                display: inline-block;
                width: 4.4rem;
                height: 4.4rem;
            }
            .label {
                display: inline-block;
                width: 6rem;
                font-size: 2.2rem;
                letter-spacing: 0.08em;
                color: #FFFFFF;
                margin-right: 1.3rem;
            }
            .sendToArrowImg {
                width: 10rem;
                height: 5rem;
                margin: 0 1rem;
            }
            .toImg {
                display: inline-block;
                width: 4.4rem;
                height: 4.4rem;
            }
        }
    }
    .teleswap {
        width: 100vw;
        height: 40rem;
        background-image: url(${m3});
        background-size: 100% 100%;
        text-align: right;
        .title {
            font-weight: bold;
            font-size: 2.6rem;
            line-height: 3.9rem;
            color: #FFFFFF;
            margin-bottom: 2.5rem;
        }
        .title2 {
            font-size: 1.2rem;
            letter-spacing: 0.06em;
            color: #FFFFFF;
            opacity: 0.8;
        }
        .title3 {
            font-size: 1.2rem;
            letter-spacing: 0.06em;
            color: #FFFFFF;
            opacity: 0.8;
        }
    }
    .metaView {
        width: 100vw;
        height: 53rem;
        background-image: url(${m4});
        background-size: 100% 100%;
        .title {
            font-weight: bold;
            font-size: 2.6rem;
            line-height: 3.9rem;
            color: #FFFFFF;
            margin-bottom: 2rem;
        }
        .title2 {
            font-size: 1.4rem;
            letter-spacing: 0.06em;
            color: #FFFFFF;
            opacity: 0.8
        }
    }
    .roadmapView {
        text-align: center;
        background-image: url(${m5});
        background-size: 100% 100%;
        width: 100vw;
        height: 6rem;
        .roadmapTitle {
            font-weight: bold;
            font-size: 2.6rem;
            color: #FFFFFF;
        }
    }
    .roadmapLineView {
        width: 100vw;
        height: 70rem;
        .roadmapImg {
            display: inline-block;
            /* width: 12.7rem; */
            /* height: 65.5rem; */
        }
        .roadmapRound {
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            margin-right: 0.8rem;
            background: #9B9B9B;
        }
        .roadmapRoundNo {
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            margin-right: 0.8rem;
        }
        .rightRoadmap {
            display: inline-block;
            height: 70rem;
        }
        .roadItemCtt {
            .title {
                font-size: 1.6rem;
                color: #03C7AB;
                margin-bottom: 0.5rem;
                font-weight: bold;
            }
            .desc {
                color: rgba(255, 255, 255,0.7);
                font-size: 1.2rem;
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
        .roadItemCtt1 {
            margin-top: 8rem;
            position:relative;
            left: -4rem;
            margin-bottom: 3.8rem;
        }
        .roadItemCtt2 {
            position:relative;
            left: 1rem;
            margin-bottom: 3.3rem;
        }
        .roadItemCtt3 {
            position:relative;
            left: -1rem;
            margin-bottom: 1rem;
        }
        .roadItemCtt4 {
            position:relative;
            left: 1rem;
            margin-bottom: 3.8rem;
        }
        .roadItemCtt5 {
            position:relative;
            left: -3rem;
            margin-bottom: 3.8rem;
        }
    }
    .bottomView {
        width: 100vw;
        background-image: url(${m6});
        background-size: 100% 100%;
        color: #FFFFFF;
        margin-bottom: 2rem;
        display: inline-block;
        .centerViewMobile {
            height: 10rem;
            .text {
                opacity: 0.4;
                position: relative;
                bottom: -1rem;
                color: #FFFFFF;
            }
        }
        .contactItemMobile {
            display: inline-block;
            width: 4rem;
            height: 4rem;
            border: 1px solid #FFFFFF;
            border-radius: 50%;
            text-align: center;
            margin-right: 1rem;
        }
        .contactItemMobile svg {
            width: 2.1rem;
            height: 2.1rem;
            position: relative;
            top: 0.8rem;
            fill: white;
        }
        .contactItemMobile:hover {
            border: 1px solid #00C6A9;
            box-sizing: border-box;
            box-shadow: 0px 0px 6px 1px #00C6A9;
        }
        .contactItemMobile:hover svg {
            fill: #00C6A9;
        }
    }
`
