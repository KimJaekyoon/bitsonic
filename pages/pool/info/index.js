import Head from 'next/head'
import PoolInfo from './poolInfo'
import Warning from '../warning'
import Nav from '../../nav'
import MobileNav from '../../mobileNav'

export default function Info() {
    return (
        <div className="main">
            <Head>
                <title>BITSONIC</title>
            </Head>
            <div className="Nav">
                <Nav></Nav>
            </div>
            <div className="MobileNav">
                <MobileNav></MobileNav>
            </div>
            <div className="poolInfo">
                <PoolInfo />
            </div>
            <Warning />

            <style jsx>{`
            .poolInfo {
                justify-content: center;
                align-items: center;
                display: flex;
            }
            .Nav {
                display: none;
              }

            @media screen and (min-width: 1024px) {
            .main {
                width: 1920px max;
                height: 1080px max;
                background-color: #ffffff;
            }
            .poolInfo {
                justify-content: center;
                align-items: center;
                display: flex;
            }
            .MobileNav {
                display: none;
              }
        }
            `}</style>
        </div>
    )
}