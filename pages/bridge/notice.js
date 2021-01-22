function Notice() {
  return (
    <div className="notice">
      <div className="warning">Transaction Free needed</div>
      <div className="contents">
        Every swap involves two transactions, one on the Huobi Chain, and the
        Other one on the Etherum Network.<br></br> HT and Ethereum, which are
        used for the network cost of Transaction Swapped via Bridge, may vary
        depending on the network situation.
      </div>
      <style jsx>
        {`
          div {
            margin: 20px 200px;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 18px;
            line-height: 25px;
          }

          .warning {
            color: red;
            font-size: 24px;
          }
        `}
      </style>
    </div>
  );
}

export default Notice;
