import React from 'react'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/components/Map'),{
  ssr: false
})


export default function Page() {
  return (
    <div>
      <Map position={[13.9642507,100.5866942]}/>
    </div>
  )
}
