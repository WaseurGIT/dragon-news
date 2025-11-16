
import LeftAside from "../LeftAside/LeftAside";
import RightAside from "../RightAside/RightAside";
import NewsBar from "../NewsBar/NewsBar";

const Home = () => {
  return (
    <div>
      <main className="grid grid-cols-[1fr_2fr_1fr] mx-20">
        <aside>
          <LeftAside></LeftAside>
        </aside>
        <aside>
          <NewsBar></NewsBar>
        </aside>
        <aside>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Home;
