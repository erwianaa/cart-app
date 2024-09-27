import PropTypes from 'prop-types';

const Navbar = ({ totalQty = 0, totalPrice = 0, onCartClear }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <div className="navbar-brand" href="#">
                   EA - Store
                </div>
                <span>
                    Total Item(s) :
                    <span className="text-primary fw-bolder">{totalQty}</span>
                </span>
                <span>
                    Total Price:  
                    <span className="text-success fw-bolder"> ${totalPrice}</span>
                </span>

                 <button className="btn btn-danger" onClick={onCartClear}>Clear Cart</button>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    totalQty: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    onCartClear: PropTypes.func.isRequired,
}

export default Navbar;