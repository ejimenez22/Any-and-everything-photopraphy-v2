import React from 'react'
import Nav from '../Nav'
import Carousel from 'better-react-carousel'

/* importing photos for carousel */
import img1 from '../../assets/images/Landscape/3.jpg'
import img2 from '../../assets/images/Racing/11.jpg'
import img3 from '../../assets/images/Racing/12.jpg'
import img4 from '../../assets/images/Racing/13.jpg'
import img5 from '../../assets/images/Landscape/4.jpg'
import img6 from '../../assets/images/Landscape/5.jpg'
import img7 from '../../assets/images/Racing/10.jpg'
import img8 from '../../assets/images/Softball/1.jpg'
import img9 from '../../assets/images/Softball/2.jpg'
import img10 from '../../assets/images/Racing/14.jpg'

function Home() {
    return (
        <>
        <Nav />
        <div>
            <h1>Any & Everything Photography</h1>
            <Carousel cols={3} rows={1} gap={3} loop>
                <Carousel.Item>
                    <img width="50%" src={img1} alt="flowers"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={img2} alt="car painting"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={img3} alt="car painting"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={img4} alt="car painting"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={img5} alt="city skyline"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={img6} alt="fireworks"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={img7} alt="cars"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={img8} alt="softball game"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={img9} alt="softball game"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={img10} alt="car"/>
                </Carousel.Item>

            </Carousel>
        </div>
        </>
    )
}

export default Home