import { useParams } from "react-router-dom";
import Countdown from "react-countdown";
import React, { useState } from "react";
import "./TodoInfo.css";

const idInfo = [
  {
    id: 1,
    price: 5000,
    quality: "high",
    difficultyLevel: "hard",
    timer: 3000,
    info: "it's worth a shot and you need to bash away. Someone will prime your development pump",
  },
  {
    id: 2,
    price: 3000,
    quality: "medium",
    difficultyLevel: "medium",
    timer: 5000,
    info: "it's worth a shot and you need to bash away. Someone will prime your development pump",
  },
  {
    id: 3,
    price: 10000,
    quality: "superior",
    difficultyLevel: "hard",
    timer: 10000,
    info: "it's worth a shot and you need to bash away. Someone will prime your development pump",
  },
];

function TodoInfo() {
  const [checked, setChecked] = useState(false);

  const { id } = useParams();
  const [v, setV] = useState("none");
  const [h, setH] = useState({});
  const [s, setS] = useState("none");
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed && v === "none") {
      setS("inline-block");
      return null;
    } else {
      return (
        <>
          <span style={{ display: "block" }}>
            {hours}:{minutes}:{seconds}
          </span>
          <button
            style={{ textAlign: "center" }}
            onClick={() => {
              setV("inline-block");
              setH({ hours: hours, minutes: minutes, seconds: seconds });
            }}
          >
            Finish
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
              <div className="time" style={{ display: s }}>
                Time is up
              </div>
              <div className="popUp" style={{ display: v }}>
                Finished:{`${h.hours}:${h.minutes}:${h.seconds}`}
              </div>
              <h2 style={{ textAlign: "center" }}>{singleInfo.info}</h2>

              <button onClick={() => setChecked(true)}>Start</button>
              {checked ? (
                <div>
                  <Countdown
                    date={Date.now() + singleInfo.timer}
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
