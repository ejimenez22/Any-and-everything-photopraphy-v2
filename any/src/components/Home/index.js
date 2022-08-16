import React from 'react'
import Nav from '../Nav'
import Carousel from 'better-react-carousel'

function Home() {
    return (
        <>
        <Nav />
        <div>
            <h1>Any & Everything Photography</h1>
            <Carousel cols={2} rows={1} gap={10} loop>
                <Carousel.Item>
                    <img width="100%" src="../" alt="flowers"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="any/src/assets/images/DSC_1535.jpg" alt="car painting"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="any/src/assets/images/DSC_1547.jpg" alt="car painting"/>
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    )
}

export default Home