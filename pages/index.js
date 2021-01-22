import Head from "next/head";
import Nav from "./nav";
import MobileNav from './mobileNav'
import Bridge from "./bridge/bridge";
import Notice from "./bridge/notice";
import Process from "./bridge/process";


export default function Home() {
  return (
    <div>
      <Head>
        <title>BITSONIC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Nav">
        <Nav></Nav>
      </div>
      <div className="MobileNav">
        <MobileNav></MobileNav>
      </div>
      <Bridge></Bridge>
      <Notice></Notice>
      <Process></Process>

      <style jsx>{`
      @media screen and (max-width: 1024px) {
        .Nav {
          display: none;
        }
      }

      @media screen and (min-width: 1024px) {
        .MobileNav {
          display: none;
        }
      }
      `}</style>
    </div>
  );
}