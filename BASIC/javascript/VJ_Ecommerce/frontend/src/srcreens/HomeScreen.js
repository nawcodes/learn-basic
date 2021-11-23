import data from '../data.js'; 
const homeScreen = {
    render: () => {
        const {products} = data;
        return `
        <ul class="products"> 
            ${products.map( product => `
                <li>
                     <div class="product">
                            <a href="/#/product/${product._id}">
                                <img src="${product.image}" alt="" alt="product 1">
                            </a>
                            <div class="product-name">
                                <a href="/#/product/${product._id}">
                                    ${product.name}
                                </a>
                            </div>
                            <div class="product-brand">
                                ${product.brand}
                            </div>
                            <div class="product-price">
                                $${product.price}
                            </div>
                        </div>
                </li>
            `).join('\n')}
        </ul>`
    }
}


export default homeScreen;