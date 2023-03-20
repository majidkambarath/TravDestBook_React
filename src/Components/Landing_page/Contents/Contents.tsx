import React from 'react'
import './Content.css'
export default function Contents() {
  return (
    <div className='ContentContainer w-full   '>
        <div className="contentDiv md:flex ">
        <div className="content-text md:pt-[190px] md:ml-[100px] pt-[80px] ml-6 ">
         <h1 className='spanText md:text-4xl text-2xl  font-serif font-bold'>Discover Our</h1>
         <h1 className='spanText md:text-4xl text-2xl font-serif font-bold'>Travel Guideline</h1>
         <h5 className='textDiv text-lg font-sans '>The world is a book and those who do not travel read only one page</h5>
        </div>
        <div className="content-img md:flex md:mt-[100px] mt-3 ">
          <div className="firstImg ">
           <img className="md:h-[370px] md:w-[370px] md:-mt-8 md:ml-[100px] rounded-lg h-[240px] ml-4 " src={require('../../../Assets/bg.jpg')} alt="" />
          </div>
          <div className="secondImg mt-4 md:block hidden">
           <img className="md:h-[370px] md:w-[600px] md:mt-8 md:-ml-[160px] rounded-lg drop-shadow-lg  " src={require('../../../Assets/city.jpg')} alt="" />
          </div>
        </div>
        </div>
    </div>

  )
}
