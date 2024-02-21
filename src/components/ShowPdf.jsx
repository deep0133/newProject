import { zoomPlugin } from '@react-pdf-viewer/zoom'
import { ProgressBar, Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import PropTypes from 'prop-types'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import '@react-pdf-viewer/open/lib/styles/index.css'
import '@react-pdf-viewer/full-screen/lib/styles/index.css'

const path = 'https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'

const ShowPdf = ({ pdfUrl = `/src/assets/sample-pdf.pdf` }) => {
  const zoomPluginInstance = zoomPlugin()

  const renderToolbar = (Toolbar) => (
    <Toolbar>
      {(slots) => {
        const {
          // CurrentPageInput,
          // Download,
          // GoToNextPage,
          // GoToPreviousPage,
          // NumberOfPages,
          // Print,
          ShowSearchPopover,
          EnterFullScreen,
          Zoom,
          ZoomIn,
          ZoomOut,
        } = slots
        return (
          <div className='flex w-full justify-between pr-6'>
            <ShowSearchPopover />
            <div className='flex gap-3'></div>
            <div className='flex gap-3 text-black'>
              <ZoomOut />
              <Zoom />
              <ZoomIn />
              <EnterFullScreen />
            </div>
          </div>
        )
      }}
    </Toolbar>
  )

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
  })

  return (
    <div className='w-full'>
      <div className='overflow-hidden p-5'>
        <Worker workerUrl={path}>
          <div
            style={{
              overflow: 'auto',
              height: '90vh',
            }}
          >
            <Viewer
              fileUrl={pdfUrl}
              plugins={[zoomPluginInstance, defaultLayoutPluginInstance]}
              numPages={1}
              // onDocumentLoad={handleDocumentLoad}
              renderLoader={(percentages) => (
                <div>
                  <ProgressBar progress={Math.round(percentages)} />
                </div>
              )}
            />
          </div>
        </Worker>
      </div>
    </div>
  )
}

ShowPdf.propTypes = {
  pdfUrl: PropTypes.string,
}

export default ShowPdf
