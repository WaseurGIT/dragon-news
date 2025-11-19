import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import LatestNews from "../LatestNews/LatestNews";

const Header = () => {
  const [today, setToDay] = useState("");

  useEffect(() => {
    const date = new Date();

    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    setToDay(date.toLocaleDateString("en-US", options));
  }, []);

  return (
    <div className="fixed top-0  w-full  z-50 bg-white">
      <img src={logo} className="w-[500px] h-10 mx-auto mt-5" alt="" />
      <h1 className="flex items-center justify-center">
        Journalism Without Fear or Favour
      </h1>
      <h1 className="flex items-center justify-center">{today}</h1>

      <LatestNews></LatestNews>
    </div>
  );
};

export default Header;
