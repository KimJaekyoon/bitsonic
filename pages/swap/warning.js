export default function Warning() {
    return (
        <div className="warning">
            <p className="red">Warning</p>
            <p>Swap can only be performed within huobi Echochain. <br></br>
                Therefore, you need to connect the wallet of the Huobi Echo chain.</p>

            <style jsx>{`
            .warning {
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