import AdvanceSearch from "./pages/AdvanceSearch";
import Breadcrumb from "./components/BreadCrumb";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/advanceSearch'
          element={
            <>
              <Breadcrumb /> <AdvanceSearch />
            </>
          }
        />
        <Route path='/explore' element={<Explore />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
