import React from 'react'
import Cards from './Cards/Cards'
import Category from './Category/Category'
import Chat from './Chat/Chat'
import Contents from './Contents/Contents'
import Footer from './Footer/Footer'
import Header from './Header/Header'
 import PackageCards from './PackageCard/Package'

export default function HomePage() {
  
  return (
    <div>
      <Header/>
      <PackageCards/> 
      <Cards/>
      <Chat/>
      <Contents/>
      <Category/>
      <Footer/>
    </div>
  )
}
