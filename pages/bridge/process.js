export default function Process() {
  let state1 = "process_box1";
  let state2 = "process_box2";
  return (
    <div className="process_container">
      <div className="process_boxes">
        <div className="process_line"></div>
        <div className={state2}>Approve</div>
        <div className={state1}>Swap</div>
        <div className={state1}>Connect</div>
        <div className={state1}>Send</div>
      </div>
      <style jsx>
        {`
        .process_boxes {
          display: flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
          margin-top: 1.5rem;
        }

        .process_line {
          position: absolute;
          width: 15rem;
          height: 3px;
          background-color: #e6e6e6;
        }
        .process_box1 {
          z-index: 100;
          width: 6.5rem;
          height: 1.5rem;
          margin: 1rem 0.5rem;
          padding: 0.5rem 0.5rem 0rem 0.5rem;
          border-radius: 8px;
          background-color: #e6e6e6;
          color: white;
          text-align: center;
          font-size: 0.8rem;
        }
        .process_box2 {
          z-index: 100;
          width: 6.5rem;
          height: 1.5rem;
          margin: 1rem 0.5rem;
          padding: 0.5rem 0.5rem 0rem 0.5rem;
          border-radius: 8px;
          background-color: #30465c;
          color: white;
          text-align: center;
          font-size: 0.8rem;
        }
        
        @media screen and (min-width: 1024px) {
          .process_boxes {
            display: flex;
            align-items: center;
            justify-content: center;
            vertical-align: middle;
          }

          .process_line {
            position: absolute;
            width: 400px;
            height: 3px;
            background-color: #e6e6e6;
          }
          .process_box1 {
            z-index: 100;
            width: 6.5rem;
            height: 2.5rem;
            margin: 3rem 1.5rem;
            padding: 1.5rem 0.5rem 0rem 0.5rem;
            border-radius: 8px;
            background-color: #e6e6e6;
            color: white;
            text-align: center;
          }
          .process_box2 {
            z-index: 100;
            width: 6.5rem;
            height: 2.5rem;
            margin: 3rem 1.5rem;
            padding: 1.5rem 0.5rem 0rem 0.5rem;
            border-radius: 8px;
            background-color: #30465c;
            color: white;
            text-align: center;
          }
        }
        `}
      </style>
    </div>
  );
}
