import { useState } from 'react'
import { ReactReader as Reader } from 'react-reader'
import pubPath from '../assets/alice.epub'
export default function ShowPub() {
  const [location, setLocation] = useState(5)
  return (
    <div className='h-screen w-full bg-sky-200'>
      <Reader
        url={pubPath}
        location={location}
        locationChanged={(epubcfi) => {
          setLocation(epubcfi)
          console.log(epubcfi)
        }}
      />
    </div>
  )
}
