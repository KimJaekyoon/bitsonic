export default function Warning() {
    return (
        <div className="warning">
            <p className="red">Mining reward chain Noticement</p>
            <p>guide All mining rewards are paid to hBSC issued by Huobi Eco Chain <br></br>
                hBSC requires a wallet from Huobi Chain</p>

            <style jsx>
                {`
          .warning {
            text-align: center;
            font-size: 1rem;
            line-height: 25px;
          }

          br {
              display: none;
          }

          .red {
            color: red;
            font-size: 1.25rem;
            margin: 1rem 0;
          }        

        @media screen and (min-width: 1024px) {
          .warning {
            margin: 20px 200px;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 18px;
            line-height: 25px;
          }
          .red {
            color: red;
            font-size: 24px;
          }
        }
        `}
            </style>
        </div>
    )
}