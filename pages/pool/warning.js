export default function Warning() {
    return (
        <div className="warning">
            <p className="red">Mining reward chain Noticement</p>
            <p>guide All mining rewards are paid to hBSC issued by Huobi Eco Chain <br></br>
                hBSC requires a wallet from Huobi Chain</p>

            <style jsx>{`
            .warning {
                transform: translateY(50%);
                text-align: center;
            }
            .red {
                font-weight: bold;  
                color: #ff4f4e;
            }
            `}</style>
        </div>
    )
}