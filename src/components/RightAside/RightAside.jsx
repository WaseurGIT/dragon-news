import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import insta from "../../assets/instagram.png";

import swimming from "../../assets/swimming.png";
import class_pic from "../../assets/class.png";
import play_ground from "../../assets/playground.png";
import bg from "../../assets/bg.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const RightAside = () => {
  const { googleSignInUser } = useContext(AuthContext);

  const handleGoogleLogin = async () => {
    await googleSignInUser().then(async (res) => {
      const user = res.user;
      console.log(user);
    });
  };

  return (
    <div className="">
      <h1 className="text-lg font-semibold flex justify-center mb-5">
        Login With
      </h1>
      {/* login types */}
      <div>
        <div
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 w-full py-2 border-2 border-blue-400 rounded-lg cursor-pointer"
        >
          <FcGoogle />
          <h1>Login With Google</h1>
        </div>
        <div className="flex items-center justify-center gap-2 w-full py-2 border-2 mt-2 rounded-lg cursor-pointer">
          <FaGithub />
          <h1>Login With Github</h1>
        </div>
      </div>

      {/* other social medias*/}
      <div>
        <h1 className="text-xl font-semibold my-4 ml-30">Find Us On</h1>
        <div className="*:border rounded *:border-gray-400">
          <div className="flex items-center px-5 center gap-2 w-full py-3 bg-base-300">
            <img src={fb} className="text-blue-500" />
            <h1 className="text-blue-500 font-semibold ml-2">Facebook</h1>
          </div>
          <div className="flex items-center px-5 gap-2 w-full py-3 bg-base-300">
            <img src={twitter} className="text-blue-500" />
            <h1 className="font-semibold">Twitter</h1>
          </div>
          <div className="flex items-center px-5 gap-2 w-full py-3 bg-base-300">
            <img src={insta} className="text-pink-500" />
            <h1 className="font-semibold">Instagram</h1>
          </div>
        </div>
      </div>

      {/* Q zone */}

      <div className="bg-base-300 mt-8">
        <h1 className="text-xl font-semibold px-32 py-3 ">Q-Zone</h1>
        <div className="px-12">
          <img src={swimming} alt="" className="w-70 h-70" />
          <img src={class_pic} alt="" className="w-70 h-70" />
          <img src={play_ground} alt="" className="w-70 h-70" />
        </div>
      </div>

      {/* bg */}
      <div>
        <img src={bg} alt="" className="w-full mt-5 h-[600px]" />
      </div>
    </div>
  );
};

export default RightAside;
