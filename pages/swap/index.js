import Head from 'next/head'
import Warning from './warning'
import Nav from '../nav'
import MobileNav from '../mobileNav'

export default function Swap() {
  // fetch
  let myToken = ["hBSC", "BSC", "BTC", "ETH"], minedVol = 434342, swapToken = ["hBSC", "BSC", "BTC", "ETH"], lockupVol = 234234
  let state = "gray"
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

      <div className="container">
        <div className="swap">
          <div className="swapInfo">
            <div className="words">From</div>
            <div className="box">
              <input></input>|
              <select className="tokenList">
                {myToken.map((token, i) => <option key={i} value="#">{token}</option>)}
              </select>
            </div>
            <div className="words">To</div>
            <div className="box">
              <input></input>|
              <select className="tokenList">
                {myToken.map((token, i) => <option key={i} value="#">{token}</option>)}
              </select>
            </div>
          </div>
          <div className="buttons">
            <button className={state} href="">Connect</button>
            <button className={state} href="">Approve</button>
            <button className={state} href="">Swap</button>
          </div>
        </div>
      </div>

      <Warning />

      <style jsx>{`
      .container {
        justify-content: center;
        align-items: center;
        display: flex;
      }
      .swap{
        width: 15rem;
        height: 16rem;
        margin: 4rem 2rem 3rem 2rem;
        padding: 1rem 1rem;
        border-radius: 30px;
        background-color: #30465c;
      }
      .words {
        margin: 0.5rem 0.5rem;
        font-family: NotoSansCJKkr;
        font-size: 1rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
      }
      .box {
        justify-content: center;
        align-items: center;
        display: flex;
        margin: 0 0 1.5rem 0;
        padding: 0.25rem 0px;
        border-radius: 8px;
        background-color: #013073;
        color: white;
        font-size: 1.5rem
      }
      input {
        background-color: rgba( 255, 255, 255, 0 );
        border: none;
        color: #ffffff;
        width: 120px;
        height: 25px;
        margin: 0px 10px;
        font-size: 20px;
      }
      input:focus { 
        outline: none; 
      }
      select {
        border: none;
        background-color: rgba( 255, 255, 255, 0 );
        color: #ffffff;
        margin: 0px 10px;
        font-size: 1rem;
      }
      select:focus { 
        outline: none; 
      }
      .gray {
        width: 5rem;
        height: 2rem;
        margin: 1rem 0.25rem;
        border-radius: 8px;
        color: #ffffff;
        background-color: #7f7f7f;
        border: none;
      }
      .black {
        width: 5rem;
        height: 2rem;
        margin: 1rem 0.25rem;
        border-radius: 8px;
        color: #ffffff;
        background-color: #30465c;
        border: none;
      }
      .buttons {
        justify-content: center;
        align-items: center;
        display: flex;
        margin: 1rem 0;
      }
      button:focus { 
        outline: none; 
      }
      .Nav {
        display: none;
      }


      @media screen and (min-width: 1024px) {
            .MobileNav {
              display: none;
            }
            .main {
              width: 1920px max;
              height: 1080px max;
              background-color: #ffffff;
            }
            .container {
              justify-content: center;
              align-items: center;
              display: flex;
            }
            .swap{
              width: 330px;
              height: 220px;
              margin: 6rem 2rem 3rem 2rem;
              padding: 1.5rem 1.5rem;
              border-radius: 30px;
              background-color: #30465c;
            }
            .swapInfo {
              padding: 0 0;
            }
            .words {
              margin: 5px 25px;
              font-family: NotoSansCJKkr;
              font-size: 16px;
              font-weight: 350;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              letter-spacing: normal;
              text-align: left;
              color: #ffffff;
            }
            .box {
              justify-content: center;
              align-items: center;
              display: flex;
              margin: 0px 25px;
              padding: 10px 0px;
              border-radius: 8px;
              background-color: #013073;
              color: white;
              font-size: 20px
            }
            input {
              background-color: rgba( 255, 255, 255, 0 );
              border: none;
              color: #ffffff;
              width: 120px;
              height: 25px;
              margin: 0px 10px;
              font-size: 20px;
            }
            input:focus { 
              outline: none; 
            }
            select {
              border: none;
              background-color: rgba( 255, 255, 255, 0 );
              color: #ffffff;
              margin: 0px 10px;
              font-size: 20px;
            }
            select:focus { 
              outline: none; 
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
              margin: 1rem 0;
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