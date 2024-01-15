import AdvanceSearch from "./pages/AdvanceSearch";
import Breadcrumb from "./components/BreadCrumb";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path='/'
          element={
            <>
              <Breadcrumb /> <AdvanceSearch />
            </>
          }
        />
        <Route path='/explore' element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
