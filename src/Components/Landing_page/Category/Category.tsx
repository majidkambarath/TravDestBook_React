import React from 'react'
import './cate.css'
export default function Category () {
  return (
    <div className='categoryContainer bg-zinc-100  w-full md:h-[450px]'>
        <div className="Mainheading pt-10 ml-3 md:ml-9  ">
          <h1 className='Cate font-serif text-4xl '>Categories</h1>
          <h2 className='head-cate text-sm font-serif '>Holidaymakers. These people will travel to a holiday destination for a typical resort holiday</h2>
        </div>
       <div className="categoryMain mt-5 flex flex-col gap-1 justify-evenly  md:flex-row overflow-x-scroll overflow-y-hidden ">
        <div className="first_cate">
            <img className='h-[250px] w-[350px] ml-6  rounded-md transition ease-in-out delay-100 hover:-translate-p-1 hover:scale-110' src={require('../../../Assets/cate1.jpg')} alt="" />
            <div className='mt-4 flex justify-center'>
            <span className="text-2xl font-bold "> City Base </span>
            </div>
        </div>
        <div className="first_cate">
            <img className='h-[250px] w-[350px] ml-6 rounded-md transition ease-in-out delay-100 hover:-translate-p-1 hover:scale-110' src={require('../../../Assets/cate4.jpg')} alt="" />
            <div className='mt-4 flex justify-center'>
            <span className="text-2xl font-bold "> Mountains </span>
            </div>
        </div>
        <div className="first_cate">
            <img className='h-[250px] w-[350px] ml-6 rounded-md transition ease-in-out delay-100 hover:-translate-p-1 hover:scale-110 ' src={require('../../../Assets/cate5.jpg')} alt="" />
            <div className='mt-4 flex justify-center'>
            <span className="text-2xl font-bold "> Historical place </span>
            </div>
        </div>
        <div className="first_cate">
            <img className='h-[250px] w-[350px] ml-6  rounded-md transition ease-in-out delay-100 hover:-translate-p-1 hover:scale-110' src={require('../../../Assets/cate6.jpg')} alt="" />
            <div className='mt-4 flex justify-center'>
            <span className="text-2xl font-bold "> Palace </span>
            </div>
        </div>
      
        
       </div>
    </div>
  )
}
