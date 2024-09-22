import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    
    <div className="flex flex-col justify-center bg-stone-700 w-auto h-auto p-9 m-40">
  <p className="text-white font-bold">Contact us <br />You can contact us at social media or on our wbsite</p>
  
  <a
        href="https://www.mantech.pk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline ml-4 justify-center"
      >
        Visit Our Website
      </a>

</div>

  )
}

export default page
