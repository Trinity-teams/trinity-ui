import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import components
import SideBar from "./components/SideBar";
import Details from "./pages/Details";

// import pages
import SubRuta from "./pages/SubRuta";
import WhitePage from "./pages/WhitePage";

function App() {
  return (
    <div>
      <div className="w-full h-screen hidden md:flex justify-between bg-black ">
        <div className=" border-r-2 w-[200px]  bg-gray-800 border-none overflow-hidden ">
          <SideBar />
        </div>
        <div className="flex-1 border-r-2 rounded-l-3xl bg-gray-900" >
          <Routes>
            <Route path="/" element={<WhitePage />} />
            <Route path="/subruta" element={<SubRuta />}>
              <Route path="/subruta/details" element={<Details />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
