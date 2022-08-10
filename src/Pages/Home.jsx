import React from 'react'
import Hero from '../Components/Herosection/Hero'
import Features from '../Components/Features/Features'
import Content from '../Components/Content/Content'
import {ContentOne, ContentThree, ContentTwo} from '../Data/ContentData'
import Pricing from '../Components/Pricing/Pricing'
import Contact from '../Components/Contact/Contact'
import Corousel from '../Components/corousel/Corousel'
const Home = () => {
  return (
    <>
      <Hero/>
      <Corousel/>
      <Content {...ContentOne}/>
      <Content {...ContentTwo}/>
      <Content {...ContentThree}/>
    </>
  )
}
 
export default Home