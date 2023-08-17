import React, { useState } from 'react'
import './Store.scss'
import { Fade } from 'react-awesome-reveal';
const Store = () => {
    const products = [
        { product: 'SWEATSHIRT', image: '/loja/moleton.webp ' },
        { product: 'SHIRT', image: '/loja/camisa.webp ' },
        { product: 'CAP', image: '/loja/bone.webp ' },
        { product: 'SWEATSHIRT', image: '/loja/moleton.webp ' },
        { product: 'SHIRT', image: '/loja/camisa.webp ' },
        { product: 'CAP', image: '/loja/bone.webp ' },
    ]

    const [searchTerm, setSearchTerm] = useState('')

    const filteredProducts = products.filter((product) => {
        return product.product.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
        <>
            <div className="background-text-store">
              
            </div>
            <div id='store'>
                <div className="grid-layout">
                    <div className="store-content">
                        <Fade className='animation' cascade direction='down' duration={800} triggerOnce>
                            <h1>MERCH</h1>
                            <input type="text" placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        </Fade>
                    </div>
                    <div className="pxulin-music-2">
                        <div className="store-cards">
                            {filteredProducts.length == 0 ?
                                <div className="no-results">

                                    <p>
                                        No result in your search
                                    </p>
                                </div> :

                                filteredProducts.map((item, index) => (
                                    <Fade className='animation' cascade direction='down' duration={400} delay={index * 300} triggerOnce>
                                        <div key={item.product} className="card" >
                                            <img src={item.image} alt="" />
                                            <p>{item.product}</p>
                                        </div>
                                    </Fade>
                                ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Store