import { useParams } from "react-router-dom";
import Countdown from "react-countdown";
import React, { useState} from "react";

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
  const [checked, setChecked] = useState(false);

  const { id } = useParams();
  const [v, setV] = useState("none");
  const [h, setH] = useState({});
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div>dksjdkiasdknasndjsadbfjsdf</div>;
    } else {
      return (
        <>
          <span style={{ display: "block" }}>
            {hours}:{minutes}:{seconds}
          </span>
          <button
            onClick={() => {
              setV("inline-block");
              setH({ hours: hours, minutes: minutes, seconds: seconds });
            }}
          >
            finish
          </button>
        </>
      );
    }
  };

  return (
    <div>
      {idInfo.map((singleInfo) => {
        if (+id === singleInfo.id) {
          return (
            <div>
              <h1 style={{ color: "red", textAlign: "center" }}>
                {singleInfo.name}
              </h1>
              <div
                className="popUp"
                style={{ display: v }}
              >{`${h.hours}:${h.minutes}:${h.seconds}`}</div>
              <h2 style={{ textAlign: "center" }}>{singleInfo.info}</h2>

              <button onClick={() => setChecked(true)}>Start</button>
              {checked ? (
                <div>
                  <Countdown
                    date={Date.now() + singleInfo.Time}
                    renderer={renderer}
                  ></Countdown>
                </div>
              ) : null}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}


export default TodoInfo;
