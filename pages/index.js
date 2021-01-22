import Head from "next/head";
import Nav from "./nav";
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
      <Nav></Nav>
      <Bridge></Bridge>
      <Notice></Notice>
      <Process></Process>
    </div>
  );
}