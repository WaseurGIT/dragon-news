import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import left_image_1 from "../../assets/left_image_1.png";
import left_image_2 from "../../assets/left_image_2.png";
import left_image_3 from "../../assets/left_image_3.png";

const LeftAside = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h1 className="text-lg font-semibold ml-5">All Category</h1>
      <div className="bg-base-100 mt-5">
        {categories.map((category) => (
          <div key={category.id}>
            <NavLink
              className={
                "btn bg-base-200 w-full mt-2 border-0 active:bg-base-300"
              }
            >
              {category.name}
            </NavLink>
          </div>
        ))}
      </div>
      {/*  */}
      <div className="w-fit mx-auto my-10">
        <img src={left_image_1} alt="" />
        <img src={left_image_2} alt="" className="w-full my-3" />
        <img src={left_image_3} alt="" />
      </div>
    </div>
  );
};

export default LeftAside;
