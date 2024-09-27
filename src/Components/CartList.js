import CartItem from './CartItem';
import Loading from './Loading';

const CartList = ({products, handleCounterIncrement, handleCounterDecrement}) => {
    const cartItems = products.map(product => {
        return (
            <CartItem
                key={product.id}
                product={product}
                handleCounterDecrement={handleCounterDecrement}
                handleCounterIncrement={handleCounterIncrement}
            />
        )
    });

    const isLoading = products.length === 0;

    return (
        <div className="container">
            {isLoading ? <Loading /> : cartItems}
        </div>
    )
}

export default CartList;