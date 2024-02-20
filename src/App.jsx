import AdvanceSearch from './pages/AdvanceSearch'
import Breadcrumb from './components/BreadCrumb'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Publication from './pages/Publication'
import Linking from './pages/Linking'
import PDFViewer from './pages/PDFViewer'
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
              <Breadcrumb title='Advanced Search' des={'Basic Search'} />{' '}
              <AdvanceSearch />
            </>
          }
        />
        <Route path='/explore' element={<Explore />} />
        <Route
          path='/publications'
          element={
            <>
              <Breadcrumb title='Browse Publications' des={'Basic Search'} />{' '}
              <Publication />
            </>
          }
        />
        <Route
          path='/linking'
          element={
            <>
              <Breadcrumb title='Go Back to Publications' des={''} />{' '}
              <Linking />
            </>
          }
        />
        <Route
          path='/pdfs'
          element={
            <>
              <Breadcrumb title='Go Back to Publications' des={''} />{' '}
              <PDFViewer />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App
