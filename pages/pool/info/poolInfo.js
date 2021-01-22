import Link from 'next/link'
import Image from 'next/image'

export default function PoolInfo() {
  // fetch
  let icon = undefined, poolName = "BSC", minedToken = "hBSC", minedVol = 434342, lockupToken = "BSC", lockupVol = 234234
  let state = "gray"
  return (
    <div className="main">
      <div className="img">
        <img src="/color_symbol.png" width={30} height={30} />
      </div>
      <div className="poolName">
        {poolName}
      </div>
      <div className="mineInfo">
        <div>
          <div className="words">{minedToken} Mined</div>
          <div className="info">
            <div className="box">{minedVol} {minedToken}</div>
          </div>
        </div>
        <div>
          <div className="words">{lockupToken} Locked</div>
          <div className="info">
            <div className="box">{lockupVol} {lockupToken}</div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className={state} href="">Connect</button>
        <button className={state} href="">Mine</button>
        <button className={state} href="">{state ? "Stake" : "Approve"}</button>
      </div>

      <style jsx>{`
      .main {
        width: 15rem;
        height: 19rem;
        margin: 4rem 2rem 3rem 2rem;
        padding: 1rem 1rem;
        border-radius: 30px;
        background-color: #30465c;
      }
      .img {
        justify-content: center;
        align-items: center;
        display: flex;
      }
      .poolName {
        margin: 10px 0 0;
        padding: 0 0;
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
      .info {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .words {
        font-family: NotoSansCJKkr;
        font-size: 1rem;
        font-weight: 350;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
        margin: 0.5rem 0 0 0;
      }
      .box {
        width: 10rem;
        margin: 5px 10px;
        padding: 10px 10px;
        border-radius: 8px;
        background-color: #e6e6e6;
        text-align: center;
        color: #7f7f7f;
        justify-content: center;
        align-items: center;
      }
      .gray {
        width: 5rem;
        height: 2rem;
        margin: 1.5rem 0.25rem;
        border-radius: 8px;
        color: #ffffff;
        background-color: #7f7f7f;
        border: none;
      }
      .black {
        width: 5rem;
        height: 2rem;
        margin: 1.5rem 0.25rem;
        border-radius: 8px;
        color: #ffffff;
        background-color: #30465c;
        border: none;
      }
      .buttons {
        justify-content: center;
        align-items: center;
        display: flex;
      }
      button:focus { 
        outline: none; 
      }


    
      @media screen and (min-width: 1024px) {
            .main {
              width: 330px;
              height: 200px;
              margin: 6rem 2rem 3rem 2rem;
              padding: 1.5rem 1.5rem;
              border-radius: 30px;
              background-color: #30465c;
            }
            .img {
              justify-content: center;
              align-items: center;
              display: flex;
            }
            .poolName {
              margin: 10px 0 0;
              padding: 0 0;
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
            .mineInfo {
              justify-content: center;
              display: flex;
            }
            .words {
              font-family: NotoSansCJKkr;
              font-size: 18px;
              font-weight: 350;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              letter-spacing: normal;
              text-align: center;
              color: #ffffff;
            }
            .box {
              width: 120px;
              margin: 5px 10px;
              padding: 10px 10px;
              border-radius: 8px;
              background-color: #e6e6e6;
              text-align: center;
              color: #7f7f7f;
            }
            .gray {
              width: 90px;
              height: 40px;
              margin: 10px 15px;
              border-radius: 8px;
              color: #ffffff;
              background-color: #7f7f7f;
              border: none;
            }
            .black {
              width: 90px;
              height: 40px;
              margin: 10px 15px;
              border-radius: 8px;
              color: #ffffff;
              background-color: #30465c;
              border: none;
            }
            .buttons {
              justify-content: center;
              align-items: center;
              display: flex;
            }
            button:focus { 
              outline: none; 
            }
          }
            `}
      </style>
    </div>
  )
}