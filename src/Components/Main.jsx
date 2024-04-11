import Selector from "./Selector";
import { NavLink } from "react-router-dom";

import sectionData from "../data/sectionData";
import video from "../Assets/video/video.mp4";
import slideData from "../data/slideData";
import LeftArrow from "../Assets/Arrow/Vector-left.png";
import RightArrow from "../Assets/Arrow/Vector-right.png";
import blogsData from "../data/blogsData";
import bookingListData from "../data/bookingListData";
import { useReducer } from "react";
import style from "./Main.module.css";

const initialValue = { arrowCount: 0 };

const yourStartLocation = bookingListData.yourStartLocation.map((item) => item);
const tourOffer = bookingListData.tourOffer.map((item) => item);
const persons = bookingListData.persons.map((item) => item);

function reducer(state, action) {
  switch (action.type) {
    case "LeftArrowClick":
      return { ...state, arrowCount: state.arrowCount + 1 };
    case "RightArrowClick":
      return { ...state, arrowCount: state.arrowCount - 1 };
    default:
      throw new Error("unknown action");
  }
}

function Main() {
  const [{ arrowCount }, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <main className={style.main}>
        <div className={style.box}>
          <h2>Discover Our Services</h2>
          <p>
            ExploreEra provides a one-stop solution for individuals seeking
            well-planned journeys. These services include expert advice on
            destination selection, flight and accommodation bookings, and
            customized itineraries to individual preferences.
          </p>
        </div>
        <section className={style.section}>
          {sectionData.map((item, i) => (
            <div className={style.box} key={i}>
              <NavLink to="/BookFlight">
                <img src={item.image} alt="plane" />
                <h2>{item.title}</h2>
              </NavLink>
              <p>{item.text}</p>
            </div>
          ))}
        </section>

        <a href="/" className={style.section_link}>
          see all
        </a>
        <h1>Watch Our Memorable Trips</h1>
        <div className={style.video_box}>
          <video src={video} autoPlay loop muted className={style.video} />
        </div>
        <h1>Popular Tour Offers</h1>
        <div className={style.arrows}>
          <div onClick={() => dispatch({ type: "LeftArrowClick" })}>
            <img src={LeftArrow} alt="arrow" />
          </div>
          <div onClick={() => dispatch({ type: "RightArrowClick" })}>
            <img src={RightArrow} alt="arrow" />
          </div>
        </div>
        <div className={style.slider_box}>
          {slideData.map((item, i) => (
            <div
              className={style.slider}
              style={{
                transform: `translateX(${100 * arrowCount}%)`,
              }}
            >
              <div className={`${style.slide} ${style.slide_1}`}>
                <img src={item.img} alt="cities" />
                <h1>{item.city}</h1>
                <p>{`${item.peopleNum} adults ${item.days} days`}</p>
                <p>{item.price}$</p>
              </div>
            </div>
          ))}
        </div>
        <h1>Blogs</h1>
        <section className={style.blogs}>
          {blogsData.map((item, i) => (
            <div className={style.blog} key={i}>
              <img src={item.image} alt="blog" />
              <h2>{item.title}</h2>
            </div>
          ))}
        </section>
      </main>
      <div className={style.Select_list}>
        <h1>Ready To Book A Trip?</h1>
        <div className={style.lists_container}>
          <Selector dataList={yourStartLocation} />
          <Selector dataList={tourOffer} />
          <input type="date" placeholder="Choose trip date" />
          <Selector dataList={persons} />

          <button className="btn">Book Now</button>
        </div>
      </div>
    </>
  );
}

export default Main;
