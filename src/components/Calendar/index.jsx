import { useState } from "react";
import moment from "moment/moment";
import icon from "../../assets/image/icon.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Calendar = () => {
  const { listMouth, listDay } = useSelector((state) => state.lists);
  const keyLocal = Object.keys(localStorage);
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(0);
  const [monthM, setMothM] = useState(moment().format("M") - 1);
  const [year, setYear] = useState(moment().format("y"));
  const [isVisibal, setIsVisibal] = useState(false);
  const dayts = moment([`${year}`, `${monthM}`])
    .startOf("month")
    .startOf("week");
  const day = dayts.clone().add(plus, "month").subtract(minus, "month");
  const calendarList = [...Array(42)].map(() => day.add(1, "day").clone());
  localStorage.setItem("addDay", moment().format("DD/MM/YYYY"));
  return (
    <>
      <div className="flex items-center  justify-around mb-10 mt-10">
        <Link
          className="cursor-pointer border border-black w-10 h-10 flex justify-center items-center bg-indigo-800 text-white rounded"
          to="add"
        >
          <span>+</span>
        </Link>

        <div className="flex">
          <button
            className="h-10 w-10 border border-black rounded mr-1"
            onClick={() => {
              setMinus(minus + 1);
            }}
          >
            {" <"}
          </button>
          <div className="w-32 pt-2 text-center">
            {calendarList[15].format("MMMM yyyy")}
          </div>
          <button
            className="h-10 w-10 border border-black rounded ml-1"
            onClick={() => {
              setPlus(plus + 1);
            }}
          >
            {">"}
          </button>
        </div>
        <div className="relative">
          <img
            src={icon}
            alt=""
            onClick={() => {
              setIsVisibal(!isVisibal);
            }}
          />
          {isVisibal && (
            <div className="data_piker">
              <div className="flex justify-center items-center ">
                <button
                  className="mr-2 border border-black h-5 rounded flex justify-center items-center"
                  onClick={() => {
                    setYear(Number(year) - 1);
                  }}
                >
                  <span>{"<"}</span>
                </button>
                <span>{year}</span>
                <button
                  className="ml-2 border border-black h-5 rounded flex justify-center items-center"
                  onClick={() => {
                    setYear(Number(year) + 1);
                  }}
                >
                  <span>{">"}</span>
                </button>
              </div>
              <div className="piker">
                {listMouth.map((el, index) => (
                  <div
                    className="piker-item"
                    key={el}
                    onClick={() => {
                      setMothM(index);
                    }}
                  >
                    {el}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {listDay.map((el) => (
          <div
            key={el}
            className="border border-black w-24 bg-white h-8 text-center"
          >
            {el}
          </div>
        ))}
      </div>
      <div className="container-flex">
        {calendarList.map((obj) => (
          <div
            key={obj}
            className="border border-black w-24 bg-white h-12 text-center"
          >
            <span>{obj.format("D")}</span>
            {keyLocal.map((dats, index) =>
              dats === obj.format("DD/MM/YYYY") ? (
                <Link
                  onClick={() => {
                    localStorage.setItem(
                      "changeKey",
                      obj.subtract(0, "month").format("DD/MM/YYYY")
                    );
                  }}
                  to={"change"}
                  key={dats}
                >
                  <span className="text-blue-800">
                    {JSON.parse(localStorage.getItem(dats)).title}
                  </span>
                </Link>
              ) : (
                <p key={index}></p>
              )
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Calendar;
