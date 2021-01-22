import Image from 'next/image'

export default function Bridge() {
  return (
    <div className="bridge_container">
      <div className="bridge_box">
        <div className="bridge_from">
          <div className="bridge_from_info1">
            <p>From</p>
            <select className="tokenList">
              <option value="#">BSC</option>
            </select>
          </div>
          <div className="bridge_from_info2">
            <p>Balance: 233</p>
            <input
              type="text"
              className="input"
              value="Enter the amount to swap"
            ></input>
          </div>
        </div>
        <div className="bridge_arrow">
          <Image src="/bridge_arrow.jpg" width={50} height={50} className="img_arrow" />
        </div>
        <div className="bridge_to">
          <div className="bridge_to_info1">
            <p>To</p>
            <select className="tokenList">
              <option value="#">hBSC</option>
            </select>
          </div>
          <div className="bridge_to_info2">
            <p>Balance: 233</p>
            <input type="text" className="input"></input>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .bridge_container {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bridge_box {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 2rem;
            list-style-type: none;
            font-family: NotoSansCJKkr;
            font-size: 25px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
          }
          select {
            width: 150px;
            height: 30px;
            margin: 0 0 0 10px;
            padding: 6px 20px 8px;
            border-radius: 8px;
            background-color: #30465c;
            color: white;
          }

          .bridge_from {
            padding: 30px;
            width: 300px;
          }

          .bridge_from_info1 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .bridge_from_info2 p {
            font-size: 10px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            margin: 0;
            text-align: right;
          }

          .bridge_arrow {
            height: 50px;
          }

          .bridge_to {
            padding: 30px;
            width: 300px;
          }

          .bridge_to_info1 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .bridge_to_info2 p {
            font-size: 10px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            margin: 0;
            text-align: right;
          }

          .input {
            width: 100%;
            padding: 12px 15px;
            margin: 8px 0;
            border-radius: 8px;
            border: none;
            background-color: #e6e6e6;
            font-family: NotoSansCJKkr;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            text-align: left;
            color: #7f7f7f;
          }

          * {
            box-sizing: border-box;
          }
         
        `}
      </style>
    </div>
  );
}
