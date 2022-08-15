import React from 'react'
import Card from '../cards/Card'
import './shop.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

import FOOD1 from '../../assets/food1.png';
import FOOD2 from '../../assets/food2.png';
import FOOD3 from '../../assets/food3.png';
import FOOD4 from '../../assets/food4.png';


const Shop = () => {
  return (
    <div className='container shop-container'>
      <div className="left-icon circle"> <AiOutlineArrowLeft/> </div>
        <div className="foods">
          FOODS
        </div>

        <Card img={FOOD1} name={"Poppardelle"} desc={"With Vegetable"} price={35}/>
        <Card img={FOOD2} name={"Ravioli Stuffed"} desc={"With Pesto Souce"} price={35}/>
        <Card img={FOOD3} name={"Poppardelle"} desc={"With Vegetable"} price={35}/>
        <Card img={FOOD4} name={"Ravioli Stuffed"} desc={"With Vegetable"} price={35}/>



        <div className="right-icon circle"> <AiOutlineArrowRight /> </div>
    </div>
  )
}

export default Shop