import React from 'react'
import Cards from './Cards/Cards'
import Category from './Category/Category'
import Chat from './Chat/Chat'
import Contents from './Contents/Contents'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Cards/>
      <Chat/>
      <Contents/>
      <Category/>
      <Footer/>
    </div>
  )
}
