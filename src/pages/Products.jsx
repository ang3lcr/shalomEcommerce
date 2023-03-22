import React, { useState } from 'react'
import '../styles/products.css'



const Produts = () => {

    

   
    
    const products = [
        {
            id: 1, 
            price: 250,
            name: "Collar Perlas Negras",
            description: "Hermoso Collar de perlas negras",
            type: "Collar",
            imageUrl:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41lsrfOZB8L._AC_UY1000_.jpg"
        },
        {
            id: 2, 
            price: 400,
            name: "Anillo de oro",
            description: "Elegante anillo de oro de 24 kilates",
            type: "Anillo",
            imageUrl:"https://m.media-amazon.com/images/I/61bK+Nf-SQL._AC_SL1177_.jpg"
        },
        {
            id: 3, 
            price: 550,
            name: "Esclava de plata",
            description: "Esclava hecha 100% de plata pura",
            type: "Esclava",
            imageUrl:"https://m.media-amazon.com/images/I/51+e7cFEd3L._AC_SX569_.jpg"
        },
        {
            id: 4, 
            price: 250,
            name: "Collar de diamantes azules",
            description: "Lujoso collar de diamantes azules 100% naturales de origen africano",
            type: "Collar",
            imageUrl:"https://i.etsystatic.com/10039907/r/il/002f16/2713808181/il_570xN.2713808181_44a8.jpg"
        },
        {
            id: 5, 
            price: 300,
            name: "Anillo de zafiro",
            description: "Anillo elegante con un zafiro incrustado de alto lujo.",
            type: "Anillo",
            imageUrl: "https://www.costco.com.mx/medias/sys_master/products/h04/h5f/97243609202718.jpg"
        },
        {
            id: 6, 
            price: 450,
            name: "Pulsera de cuarzo azul",
            description: "Pulsera hecha con restos de cuarzo azul",
            type: "Collar",
            imageUrl: "https://i.etsystatic.com/14127172/r/il/2493de/3492471182/il_570xN.3492471182_leur.jpg"
        },
        {
            id: 7, 
            price: 200,
            name: "Collar de plata",
            description: "Collar con aleasion de plata",
            type: "Collar",
            imageUrl: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-1837makers-collar-con-cadena-en-plata-fina-y-oro-de-18k-61-cm-63448834_1014817_ED.jpg"
        },
        {
            id: 8, 
            price: 7000,
            name: "Anillo de diamante",
            description: "Anillo con diamante incrustado ideal para anillo de compromiso",
            type: "Anillo",
            imageUrl: "https://www.costco.com.mx/medias/sys_master/products/h5f/h69/69846908993566.jpg"
        },
        {
            id: 9, 
            price: 350,
            name: "Esclava de bronce",
            description: "Esclava de bronce 100% puro",
            type: "Esclava",
            imageUrl: "https://cristaljoyas.com/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/z/i/zizes3009-3t2.jpg"
        },
        {
            id: 10, 
            price: 590,
            name: "Anillo de oro blanco y diamante",
            description: "Anillo con aleacion de oro blanco 100% puro",
            type: "Anillo",
            imageUrl: "https://www.costco.com.mx/medias/sys_master/products/hd0/h25/11030098706462.jpg"
        }
    ]

    
    const categories = [
        {
            id: 1,
            category: "Anillo"
        },
        {
            id: 2,
            category: "Collar"
        },
        {
            id: 3,
            category: "Esclava"
        },
    ]

    const cart = []

    const [filteredProducts, setfilteredProducts] = useState(products);

    const filterCategory = (categoryId) => {
        const filtered = products.filter(product => product.type == categoryId);
        setfilteredProducts(filtered)
    }


    const showAll = () => {
        setfilteredProducts(products)
    }








    const addToCart = (productId) => {
        const productFound = products.find(product => product.id === productId);
        cart.push(productFound)
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    const currentCart = JSON.parse(localStorage.getItem("cart"))

    const deleteCart = () => {
        
    }

    
    
    

  



    return (
    <div className='products' id='products'>
              <ul className='product-menu'>
            {categories.map(category => (
                <li className='category-element' onClick={() => filterCategory(category.category)} id={category.id}>
                    {category.category}
                </li>
            ))}
            <li className='category-element' onClick={() => showAll()}>
                Mostrar todo
            </li>
          </ul>
        <div className="card-container">
            {filteredProducts.map(product => (
                <div className="product-card" id={product.id}>
                    <div className='product-image-container'>
                        <img src={product.imageUrl} alt="" />
                    </div>
                    <h2 className='product-title'>
                        {product.name}
                    </h2>
                    <p className='price'>
                        ${product.price}
                    </p>   
                    <button className="addToCartButton" onClick={() => addToCart(product.id)}>Agregar</button>             
                </div>
            ))}                                                                                                          
        </div>
        {<ul className='products-cart'>
            <p className='cart-title'>Cart</p>
                {currentCart.map(product => (
                    <li>
                        <p className='product-title inCart'>{product.name}</p>
                        <p className='product-price inCart'>{product.price}</p>
                    </li>
                    

                ))}
                </ul>}
      </div>
  )
}
      
            
    

export default Produts