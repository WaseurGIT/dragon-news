import React from "react";

const LatestNews = () => {
  return (
    <div className="mt-7">
      <div className="w-[1200px] flex items-center justify-center mx-auto">
        <h1 className="text-white bg-red-600 px-3 py-2 font-semibold mr-2">
          Latest
        </h1>
        <div className="bg-base-200 py-2 w-full">
          <marquee behavior="" direction="">
            Match Highlights - Germany vs Argentina (4-0) | "I have no income I
            want to die"- says a failure young boy | New iPhone 17 has released
            in 2025 | We don't talk anymore - Chirlee Puth | Ok Bye. |
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
