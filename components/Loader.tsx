import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='loader'>
        <Image alt='loader' src="/assets/icons/loader.svg" className='animate-spin' width={32} height={32}/>
        <p>Loading....</p>
    </div>
  )
}

export default Loader