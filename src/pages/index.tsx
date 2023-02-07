import { type NextPage } from "next";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-col">
        <header className="flex h-20 w-full flex-row items-center justify-around border-b-[1px] border-gray-300 bg-white">
          <div>
            <IoReorderThreeOutline className="text-2xl text-gray-600" />
          </div>
          <div className="text-xl font-thin">Blog App</div>
          <div className="flex items-center space-x-4">
            <div>
              <BsBell className="text-2xl text-gray-600" />
            </div>
            <div>
              <div className="h-5 w-5 rounded-full bg-gray-600" />
            </div>
            <div>
              <button className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2.5 transition hover:border-gray-900 hover:text-gray-900">
                <div>Write</div>
                <div>
                  <FiEdit />
                </div>
              </button>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-12"></div>
      </div>
    </>
  );
};

export default Home;
