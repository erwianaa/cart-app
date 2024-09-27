function getProducts(limit = 5) {
    return fetch(`https://fakestoreapi.com/products?limit=${limit}`)
        .then(r => r.json());
}

export default {
    getProducts: getProducts
};