import Head from 'next/head'
import PoolInfo from './poolInfo'
import Warning from '../warning'
import Nav from '../../nav'

export default function Info() {
    return (
        <div className="main">
            <Head>
                <title>BITSONIC</title>
            </Head>
            <Nav></Nav>
            <div className="poolInfo">
                <PoolInfo />
            </div>
            <Warning />

            <style jsx>{`
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
            `}</style>
        </div>
    )
}