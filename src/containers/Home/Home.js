import React from 'react';

import Product from '../../components/Product';
import './Home.css';
import bannerImg from '../../assets/banner.jpg';

const Home = () => {
  return (
    <div className="home">
        <div className="home__container">
            <img src={bannerImg} alt="bannerimage" className="home__image" />
            
            <div className="home__row">
                <Product id='1' title='' image='' price={1} rating={4}/>
                <Product id='2' title='' image='' price={2} rating={5} />
                <Product id='3' title='' image='' price={3} rating={3}/>
                <Product id='4' title='' image='' price={4} rating={4}/>
            </div>
            <div className="home__row">
                <Product id='5' title='' image='' price={5} rating={2}/>
                <Product id='6' title='' image='' price={6} rating={4}/>
                
            </div>
            <div className="home__row">
                <Product id='7' title='' image='' price={7} rating={5}/>
                <Product id='8' title='' image='' price={8} rating={1}/>
                <Product id='9' title='' image='' price={9} rating={3}/>
            </div>
            
        </div>
    </div>
  )
}

export default Home