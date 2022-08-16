import React from 'react'
import Nav from '../Nav'
import Carousel from 'better-react-carousel'
/* importing photos for carousel */
import img1 from '../../assets/images/DSC_0590.jpg'
import img2 from '../../assets/images/DSC_1535.jpg'
import img3 from '../../assets/images/DSC_1547.jpg'
import img4 from '../../assets/images/DSC_1549.jpg'
import img5 from '../../assets/images/DSC_1809.jpg'
import img6 from '../../assets/images/DSC_1884.jpg'
import img7 from '../../assets/images/DSC_2085.jpg'
import img8 from '../../assets/images/DSC_2249.jpg'
import img9 from '../../assets/images/DSC_2316.jpg'
import img10 from '../../assets/images/DSC_2406.jpg'

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
                    <img width="50%" src={img5} alt="car painting"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={img6} alt="car painting"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={img7} alt="car painting"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={img8} alt="car painting"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={img9} alt="car painting"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={img10} alt="car painting"/>
                </Carousel.Item>

            </Carousel>
        </div>
        </>
    )
}

export default Home