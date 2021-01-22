import Head from 'next/head'
import PoolList from './poolList'
import Warning from './warning'
import Nav from '../nav'
import MobileNav from '../mobileNav'

export default function Pool() {
    const poolList = [
        { icon: "1", poolName: "BSC", lockupAssets: "234,234 USD", APY: "000%", info: { minedToken: "hBSC", minedVol: 434342, lockupToken: "BSC", lockupVol: 234234 } },
        { icon: "2", poolName: "hBSC", lockupAssets: "234,234 USD", APY: "000%", info: { minedToken: "", minedVol: "", lockupToken: "", lockupVol: "" } },
        { icon: "3", poolName: "BSC/ETH", lockupAssets: "234,234 USD", APY: "000%", info: { minedToken: "", minedVol: "", lockupToken: "", lockupVol: "" } }
    ]
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
            <div className="poolList">
                <div>
                    {poolList ? (poolList.map((data, i) => <PoolList key={i} {...data} />)) : (<p>there is no any pool list.</p>)}
                </div>
            </div>
            <Warning />

            <style jsx>{`
            .main {
                width: 1920px max;
                height: 1080px max;
                background-color: #ffffff;
            }
            .poolList {
                display: flex;
                justify-content: center;
                align-items: center;
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
                .poolList {
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