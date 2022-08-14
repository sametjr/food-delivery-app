import React from 'react'
import './hero.css'
import PP1 from '../../assets/pp1.jpg'
import PP2 from '../../assets/pp2.jpg'
import PP3 from '../../assets/pp3.jpeg'
import {AiFillStar} from 'react-icons/ai'
import {DiBower} from 'react-icons/di'
import {AiOutlineShopping} from 'react-icons/ai'
import DISH from '../../assets/dish.png'

const Hero = () => {
  return (
    <div className="container hero-container">


        <div className="left-hero">


            <div className="header">
                <div className="logo">
                    <p>
                        F<span>oo</span>dy
                    </p>
                </div>
                <ul className='menu'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

            </div>
            {/* END OF HEADER */}

            <div className="context">
                <div className="text">
                    <p>it's not just</p>
                    <p>F<span>oo</span>d, it's an</p>
                    <p>experience</p>
                </div>
                <div className="buttons">
                    <button className='btn'>View Menu</button>
                    <button className='btn btn-primary'>Book A Table</button>
                </div>
                <div className="reviews">
                    <p>Reviews</p>
                    <div className="images">
                        <img src={PP1} alt="" />
                        <img src={PP2} alt="" />
                        <img src={PP3} alt="" />
                        <div className="last-img">
                            +52
                        </div>
                    </div>
                    <div className="stars">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                </div>
            </div>

            {/* END OF CONTEXT */}

        </div>
        {/* END OF RIGHT HERO */}


        <div className="right-hero">
            <div className="upper">
                <div className="right-buttons">
                    <AiOutlineShopping />
                    <button className="btn">
                        Sign Up
                    </button>
                </div>
            </div>

            <div className="dish-image">
                <img src={DISH} alt="" />
                <div className="discount">
                    <DiBower className='icon'/>
                    <p>5%</p>
                    <p><span>Discount</span> for 2 orders</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero