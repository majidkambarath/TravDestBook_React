import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Chat() {
  return (
    <>
    <NavLink to={'/chat'}>

    <div>
   <img className='float-right w-[70px] h-[70px] cursor-pointer ' src={require('../../../Assets/bot.png')} alt="" />
    </div>
    </NavLink>
    </>
  )
}
