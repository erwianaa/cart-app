import { useState, useEffect, useMemo } from "react";
import Navbar from './../Components/Navbar.js'
import CartList from './../Components/CartList.js'
import API from './../Api/api.js'

function Cart() {
    const [ products, setProducts ] = useState([]);
    
    useEffect(() => {
        API.getProducts(5)
            .then(productData => {
                setProducts(productData.map(product => ({...product, qty: 0})));
            });
      }, []);


    const calculateProductTotalPrice = () => {
        return products.reduce((acc, curr) => {
            return acc + (curr.price * curr.qty)
        }, 0);
    }

    const calculateProductTotalQty = () => {
        return products.reduce((acc, curr) => {
            return acc + curr.qty;
        }, 0);
    }

    const incrementProductQtyByProductId = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
              return {...product, qty: product.qty + 1};
            }
            return product;
          });
          setProducts(updatedProducts);
    }

    const decrementProductQtyByProductId = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId && product.qty !== 0) {
              return {...product, qty: product.qty - 1};
            }

            return product;
          });
          setProducts(updatedProducts);
    }
    
    const handleCounterIncrement = (productId, event) => {
        return incrementProductQtyByProductId(productId);
    }

    const handleCounterDecrement = (productId, event) => {
        return decrementProductQtyByProductId(productId);
    }

    const clearCartItems = () => {
        const updatedProducts = products.map((product) => {
            return {...product, qty: 0};
        });
        setProducts(updatedProducts);
    }

    const totalQty = useMemo(() => calculateProductTotalQty(), [products]);
    const totalPrice = useMemo(() => calculateProductTotalPrice(), [products]);

    return (
        <>
            <Navbar
                totalQty={totalQty}
                totalPrice={totalPrice}
                onCartClear={clearCartItems}
            />
            
            <CartList
                products={products}
                handleCounterIncrement={handleCounterIncrement}
                handleCounterDecrement={handleCounterDecrement}
            />
        </>
    )
}

export default Cart;