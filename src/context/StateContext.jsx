import { useState } from 'react'
import myContext from './context'
import PropTypes from 'prop-types'
export default function StateContext({ children }) {
  const [epubOpened, setEpubOpened] = useState(false)
  const [pdfOpened, setPdfOpened] = useState(false)

  return (
    <myContext.Provider
      value={{
        pdfOpened,
        setPdfOpened,
        epubOpened,
        setEpubOpened,
      }}
    >
      {children}
    </myContext.Provider>
  )
}

StateContext.propTypes = {
  children: PropTypes.node,
}
