import LeftAside from "../LeftAside/LeftAside";
import RightAside from "../RightAside/RightAside";
import NewsBar from "../NewsBar/NewsBar";

const Home = () => {
  return (
    <div>
      <main className="grid grid-cols-[1fr_2fr_1fr] mx-20">
        {/* to fixed the left side className="sticky top-0 h-screen" */}
        <aside>
          <LeftAside />
        </aside>

        <aside>
          <NewsBar />
        </aside>

        <aside>
          {/* to fixed the right side className="sticky top-0 h-screen" */}
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default Home;
