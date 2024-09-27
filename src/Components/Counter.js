
import PropTypes from 'prop-types';

const Counter = (props) => {
    const handleIncrement = (event) => {
        return props.handleIncrement(props.productid, event)
    }

    const handleDecrement = (event) => {
        return props.handleDecrement(props.productid, event)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-secondary" onClick={handleDecrement}> - </button>
                </div>

                <div className="col-6">
                    <input
                        type="text"
                        defaultValue="0"
                        value={props.qty}
                        onChange={() => {}}
                        className="form-control"
                    />
                </div>

                <div className="col-3">
                    <button className="btn btn-primary" onClick={handleIncrement}> + </button>
                </div>
            </div>
        </div>
    )
}

Counter.propTypes = {
    qty: PropTypes.number.isRequired,
    productid: PropTypes.number.isRequired,
};


export default Counter;