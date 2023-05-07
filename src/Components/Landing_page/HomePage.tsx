import React from 'react'
// import Cards from './Cards/Cards'
import Category from './Category/Category'

import Contents from './Contents/Contents'
import Footer from './Footer/Footer'
import Header from './Header/Header'
 import PackageCards from './PackageCard/Package'
import Package from './Cards/package'
export default function HomePage() {
  
  return (
    <div>
      <Header/>
      <Package/>
      <PackageCards/> 
      <Contents/>
      <Category/>
      <Footer/>
    </div>
  )
}
