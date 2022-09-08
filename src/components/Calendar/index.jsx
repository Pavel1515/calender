import { useState } from "react";
import moment from "moment/moment";
import icon from "../../assets/image/icon.png";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../redux/Slices/addPostSlices";
import { Link } from "react-router-dom";
import { setChangeKey } from "../../redux/Slices/changeSlices";
const Calendar = () => {
  // Проект сырой но я уверен етого должно хватить для того чтобы понять что я могу

  const { listMouth, listDay } = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const keyLocal = Object.keys(localStorage);
  const plusState = keyLocal.includes("plus")
    ? Number(localStorage.getItem("plus"))
    : 0;
  const minusState = keyLocal.includes("minus")
    ? Number(localStorage.getItem("minus"))
    : 0;

  const monthMState = keyLocal.includes("monthM")
    ? Number(localStorage.getItem("minus"))
    : moment().format("M") - 1;
  const yearState = keyLocal.includes("year")
    ? Number(localStorage.getItem("year"))
    : moment().format("y");

  const [plus, setPlus] = useState(plusState);
  const [minus, setMinus] = useState(minusState);
  const [monthM, setMothM] = useState(monthMState);
  const [year, setYear] = useState(yearState);
  const [isVisibal, setIsVisibal] = useState(false);
  const dayts = moment([`${year}`, `${monthM}`])
    .startOf("month")
    .startOf("week");
  const day = dayts.clone().add(plus, "month").subtract(minus, "month");
  const calendarList = [...Array(42)].map(() => day.add(1, "day").clone());
  dispatch(setDate(day.format("DD/MM/YYYY")));
  return (
    <>
      <div className="conatainer-header">
        <Link className="add-post" to="add">
          <span>+</span>
        </Link>

        <div>
          <button
            onClick={() => {
              setMinus(minus + 1);
              localStorage.setItem("minus", minus + 1);
            }}
          >
            {" <"}
          </button>
          <span>{calendarList[15].format("MMMM yyyy")}</span>
          <button
            onClick={() => {
              setPlus(plus + 1);
              localStorage.setItem("plus", plus + 1);
            }}
          >
            {">"}
          </button>
        </div>
        <div>
          <img
            src={icon}
            alt=""
            onClick={() => {
              setIsVisibal(!isVisibal);
            }}
          />
          {isVisibal && (
            <div>
              <div>
                <button
                  onClick={() => {
                    setYear(Number(year) - 1);
                    localStorage.setItem("year", Number(year) - 1);
                  }}
                >
                  {"<"}
                </button>
                <span>{year}</span>
                <button
                  onClick={() => {
                    setYear(Number(year) + 1);
                    localStorage.setItem("year", year + 1);
                  }}
                >
                  {">"}
                </button>
              </div>
              <div className="data-picer">
                {listMouth.map((el, index) => (
                  <p
                    className="data-picer-item"
                    key={el}
                    onClick={() => {
                      setMothM(index);

                      localStorage.setItem("monthM", index);
                    }}
                  >
                    {el}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="grid-wraper">
        {listDay.map((el) => (
          <div key={el} className="grid-item">
            {el}
          </div>
        ))}

        {calendarList.map((obj) => (
          <div key={obj} className="grid-item">
            <span>{obj.format("D")}</span>
            {keyLocal.map((dats, index) =>
              dats === obj.format("DD/MM/YYYY") ? (
                <Link
                  onClick={() => {
                    dispatch(
                      setChangeKey(
                        obj.subtract(0, "month").format("DD/MM/YYYY")
                      )
                    );
                  }}
                  to={"change"}
                  key={dats}
                >
                  {JSON.parse(localStorage.getItem(dats)).title}
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
