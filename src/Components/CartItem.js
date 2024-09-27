
import PropTypes from 'prop-types';
import Counter from './Counter';

const CartItem = ({product, handleCounterIncrement, handleCounterDecrement}) => {
    return (
        <div className="row justify-content-center align-items-center mb-5 mt-5">
            <div className="col-2">
                <img
                    src={product.image}
                    className="img-thumbnail img-small"
                    alt={product.description}
                />
            </div>

            <div className="col-3">
                <h6>{product.title}</h6>
            </div>

            <div className="col-2">
                <p>${product.price}</p>
            </div>
            
            <div className="col-3">
                <Counter
                    qty={product.qty}
                    handleIncrement={handleCounterIncrement}
                    handleDecrement={handleCounterDecrement}
                    productid={product.id}
                />
            </div>

            <div className="col-2">
                <p>${product.qty * product.price}</p>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        qty: PropTypes.number.isRequired,
    }),
    handleCounterIncrement: PropTypes.func,
    handleCounterDecrement: PropTypes.func
}

export default CartItem;