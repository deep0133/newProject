import { Suspense, lazy } from 'react'

// import AdvanceSearch from './pages/AdvanceSearch'
import Breadcrumb from './components/BreadCrumb'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Publication from './pages/Publication'
import Linking from './pages/Linking'
import BookChapters from './pages/BookChapters'
import PDFViewer from './pages/PDFViewer'
import ShowPdf from './components/ShowPdf'
import ShowPub from './components/ShowPub'

const Home = lazy(() => import('./pages/Home'))
const AdvanceSearch = lazy(() => import('./pages/AdvanceSearch'))

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<>Loading...</>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/advanceSearch'
          element={
            <>
              <Suspense fallback={<>Loading...</>}>
                <Breadcrumb title='Advanced Search' des={'Basic Search'} />{' '}
                <AdvanceSearch />
              </Suspense>
            </>
          }
        />
        <Route path='/explore' element={<Explore />} />
        <Route
          path='/explore/:name'
          element={
            <>
              <Breadcrumb title='Go Back' des={''} /> <BookChapters />
            </>
          }
        />
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
          path='/pdf-viewer'
          element={
            <>
              <Breadcrumb title='Go Back to Journal' des={''} />{' '}
              <PDFViewer>
                {' '}
                <ShowPdf />{' '}
              </PDFViewer>
            </>
          }
        />
        <Route
          path='/pub-viewer'
          element={
            <>
              <Breadcrumb title='Go Back to Journal' des={''} />{' '}
              <PDFViewer>
                {' '}
                <ShowPub />{' '}
              </PDFViewer>
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App
