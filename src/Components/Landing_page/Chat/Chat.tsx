import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Chat() {
  return (
    <>
    <NavLink to={'/chat'}>

<div  className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
    <img className="object-cover object-center w-full h-full rounded-full" src={require('../../../Assets/bot.png')} alt='chat
    -img'/>
  </div>
    </NavLink>

    </>
  )
}

