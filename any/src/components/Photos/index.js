import React, { useState } from "react";

const Photolist = ({category}) => {
    const [photos] = useState([
        {
            name:'airshow1',
            category:'Airshow'
        },
        {
            name: 'airshow2',
            category: 'Airshow'
        },
        {
            name: 'airshow3',
            category: 'Airshow'
        },
        {
            name: 'christmas0',
            category: 'Christmas'
        },
        {
            name: 'christmas1',
            category: 'Christmas'
        },
        {
            name: 'concert0',
            category: 'Concert'
        },
        {
            name: 'landscape0',
            category: 'Landscape'
        },
        {
            name: 'landscape1',
            category: 'Landscape'
        },
        {
            name: 'landscape2',
            category: 'Landscape'
        },
        {
            name: 'landscape3',
            category: 'Landscape'
        },
        {
            name: 'landscape4',
            category: 'Landscape'
        },
        {
            name: 'landscape5',
            category: 'Landscape'
        },
        {
            name: 'people0',
            category: 'Portraits'
        },
        {
            name: 'people1',
            category: 'Portraits'
        },
        {
            name: 'people2',
            category: 'Portraits'
        },
        {
            name: 'people3',
            category: 'Portraits'
        },
        {
            name: 'people4',
            category: 'Portraits'
        },
        {
            name: 'people5',
            category: 'Portraits'
        },
        {
            name: 'people6',
            category: 'Portraits'
        },
        {
            name: 'people7',
            category: 'Portraits'
        },
        {
            name: 'people8',
            category: 'Portraits'
        },
        {
            name: 'people9',
            category: 'Portraits'
        },
        {
            name: 'people10',
            category: 'Portraits'
        },
        {
            name: 'people11',
            category: 'Portraits'
        },
        {
            name: 'people12',
            category: 'Portraits'
        },
        {
            name: 'people13',
            category: 'Portraits'
        },
        {
            name: 'people14',
            category: 'Portraits'
        },
        {
            name: 'people15',
            category: 'Portraits'
        },
        {
            name: 'people16',
            category: 'Portraits'
        },
        {
            name: 'people17',
            category: 'Portraits'
        },
        {
            name: 'people18',
            category: 'Portraits'
        },
        {
            name: 'people19',
            category: 'Portraits'
        },
        {
            name: 'people20',
            category: 'Portraits'
        },
        {
            name: 'people21',
            category: 'Portraits'
        },
        {
            name: 'people22',
            category: 'Portraits'
        },
        {
            name: 'people23',
            category: 'Portraits'
        },
        {
            name: 'people24',
            category: 'Portraits'
        },
        {
            name: 'people25',
            category: 'Portraits'
        },
        {
            name: 'people26',
            category: 'Portraits'
        },
        {
            name: 'racing0',
            category: 'Racing'
        },
        {
            name: 'racing01',
            category: 'Racing'
        },
        {
            name: 'racing2',
            category: 'Racing'
        },
        {
            name: 'racing3',
            category: 'Racing'
        },
        {
            name: 'racing4',
            category: 'Racing'
        },
        {
            name: 'racing5',
            category: 'Racing'
        },
        {
            name: 'racing6',
            category: 'Racing'
        },
        {
            name: 'racing7',
            category: 'Racing'
        },
        {
            name: 'racing8',
            category: 'Racing'
        },
        {
            name: 'racing9',
            category: 'Racing'
        },
        {
            name: 'racing10',
            category: 'Racing'
        },
        {
            name: 'racing11',
            category: 'Racing'
        },
        {
            name: 'racing12',
            category: 'Racing'
        },
        {
            name: 'racing13',
            category: 'Racing'
        },
        {
            name: 'racing14',
            category: 'Racing'
        },
        {
            name: 'pewpew0',
            category: 'Recreation'
        },
        {
            name: 'softball0',
            category: 'Softball'
        },
        {
            name: 'softball1',
            category: 'Softball'
        },
        {
            name: 'softball2',
            category: 'Softball'
        }
    ])

    const currentPhotos = photos.filter(photo => photo.category === category)

    return (
        <div>
            <div>
                {currentPhotos.map((image, i) => (
                    <>
                    <img
                    src={require(`../../assets/images/${category}/${i}.jpg`)}
                    alt={image.name}
                    className= 'portfolio-img'
                    key={image.name}
                     />
                     </>
                ))}
            </div>
        </div>
    )
}

export default Photolist;