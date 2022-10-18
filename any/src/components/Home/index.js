import React from 'react'
import Nav from '../Nav'
import Carousel from 'better-react-carousel'
import { TypeAnimation } from 'react-type-animation';

/* importing photos for carousel */
import img1 from '../../assets/images/Landscape/3.jpg'
import img2 from '../../assets/images/Racing/11.jpg'
import img3 from '../../assets/images/Landscape/1.jpg'
import img4 from '../../assets/images/Racing/12.jpg'
import img5 from '../../assets/images/Concert/0.jpg'
import img6 from '../../assets/images/Landscape/0.jpg'
import img7 from '../../assets/images/Portraits/17.jpg'
import img8 from '../../assets/images/Softball/1.jpg'
import img9 from '../../assets/images/Softball/2.jpg'

function Home() {
    return (
        <>
        <Nav />
        <div className="home-back">
            <Carousel cols={3} rows={1} gap={3} loop>
                <Carousel.Item>
                    <img width="70%" className="purple-img" src={img1} alt="flowers"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="70%" className="green-img" src={img2} alt="car painting"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="70%" className="purple-img" src={img3} alt="car painting"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="70%" className="green-img" src={img4} alt="landscape"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="70%" className="purple-img" src={img5} alt="concert"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="70%" className="green-img" src={img6} alt="landscape"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="70%" className="purple-img" src={img7} alt="portrait"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="70%" className="green-img" src={img8} alt="softball game"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="70%" className="purple-img" src={img9} alt="softball game"/>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className="text-animation">
            <TypeAnimation
            sequence={[
                'Bringing you photos of Airshows...',
                1000,
                'Bringing you photos of Landscapes...',
                1000,
                'Bringing you photos of Concerts...', 
                1000,
                'Bringing you photos of Portraits...',
                1000,
                'Bringing you photos of Racing...',
                1000,
                'Bringing you photos of... well anything!', 
                1000,
                () => {
                 console.log('Done typing!');
                }
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1.5em' }}
            />
        </div>
        </>
    )
}

export default Home