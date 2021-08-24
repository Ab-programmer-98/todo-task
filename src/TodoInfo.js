import { useParams } from "react-router-dom";
import Countdown from "react-countdown";
import React, { useState, useRef } from "react";

const idInfo = [
  {
    id: 1,
    price: 5000,
    quality: "high",
    difficultyLevel: "hard",
    timer: 3000,
  },
  {
    id: 2,
    price: 3000,
    quality: "medium",
    difficultyLevel: "medium",
    timer: 5000,
  },
  {
    id: 3,
    price: 10000,
    quality: "superior",
    difficultyLevel: "hard",
    timer: 10000,
  },
];

function TodoInfo() {
  const [isActive, setIsActive] = useState(false);
  const clockRef = useRef();

  function start() {
    setIsActive(!isActive);
    clockRef.current.start();
  }

  const handlePause = () => clockRef.current.pause();

  const { id } = useParams();

  return (
    <div>
      {idInfo.map((singleInfo) => {
        if (+id === singleInfo.id) {
          return (
            <div
              style={{
                height: "310px",
                width: "300px",
                backgroundColor: "red",
                textAlign: "center",
                margin: "auto",
                border: "5px solid black",
              }}
            >
              <h1>Finished</h1>

              <div>
                <h1>{singleInfo.price}</h1>
                <h1>{singleInfo.quality}</h1>
                <h1>{singleInfo.difficultyLevel}</h1>
                <button onClick={start}>Start</button>
                <button onClick={handlePause}>Finish</button>
                <Countdown
                  date={Date.now() + singleInfo.timer}
                  intervalDelay={3}
                  zeroPadTime={2}
                  autoStart={false}
                  ref={clockRef}
                />
                ,
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default TodoInfo;
