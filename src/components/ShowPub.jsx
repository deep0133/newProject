import { useState } from 'react'
import { ReactReader as Reader } from 'react-reader'
export default function ShowPub() {
  const [location, setLocation] = useState(5)
  return (
    <div className='h-screen w-full bg-sky-200'>
      <Reader
        url='/src/assets/alice.epub'
        location={location}
        locationChanged={(epubcfi) => {
          setLocation(epubcfi)
          console.log(epubcfi)
        }}
      />
    </div>
  )
}
