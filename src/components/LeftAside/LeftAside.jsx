import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
      <div className="bg-base-100">
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
    </div>
  );
};

export default LeftAside;
