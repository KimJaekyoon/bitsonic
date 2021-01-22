import Link from 'next/link'
import Image from 'next/image'
import PoolInfo from './info/poolInfo'

const PoolList = ({ icon, poolName, lockupAssets, APY, info }) => {
  return (
    <div className="main">
      <div className="img">
        <Image src="/color_symbol.png" width={25} height={25} />
      </div>
      <div className="poolName">
        {poolName}
      </div>
      <div className="lockup">
        {lockupAssets} Locked
      </div>
      <div className="apy">
        <p>{`APY : ${APY}`}</p>
      </div>
      <div className="mine">
        <Link href="/pool/info">
          <p>Mine</p>
        </Link>
      </div>

      <style jsx>{`
            .main {
              width: 200px;
              height: 190px;
              margin: 6rem 3rem;
              padding: 1rem 0.5rem;
              border-radius: 30px;
              background-color: #30465c;
              align-items: center;
            }
            .img {
              justify-content: center;
              align-items: center;
              display: flex;
            }
            .poolName {
              padding: 10px 5px 0;
              font-family: NotoSansCJKkr;
              font-size: 25px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              letter-spacing: normal;
              text-align: center;
              color: #ffffff;
              }
            .lockup {
              margin: 0.5rem 1.5rem 0;
              font-family: NotoSansCJKkr;
              font-size: 13px;
              font-weight: 350;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              letter-spacing: -0.03em;
              text-align: center;
              color: #ffffff;
            }
            .apy {
              height: 35px;
              margin: 0 2rem 0.5rem;
              border-radius: 8px;
              background-color: #e6e6e6;
            }
            .apy p {
              margin: 0 1rem 1rem;
              padding: 7px 0;
              font-family: NotoSansCJKkr;
              font-size: 14px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              letter-spacing: -0.05em;
              text-align: center;
              color: #7f7f7f;
            }
            .mine {
              height: 20px;
              margin: 1rem 4rem;
              padding: 8px 0px;
              border-radius: 8px;
              background-color: #000000;
              justify-content: center;
              align-items: center;
              display: flex;
            }
            .mine p {
              margin: 0 0;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              font-weight: 350;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              letter-spacing: normal;
              text-align: center;
              color: #ffffff;
            }
            `}
      </style>
    </div>
  )
}

export default PoolList;