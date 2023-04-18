import Image from 'next/image'
import React from 'react'


export default function Photo(url:string) {
  return (
    <Image 
        alt='Portrait of the Thinker'
        src={url}
        width={40}
        height={100}
         />
  )
}
