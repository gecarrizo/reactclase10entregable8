
const CartWidget = (props) =>
{
    return(
        <div className="float-end cart mt-2">
            <img className="img-fluid imgCart" src={props.imagen} alt="cart" />
            <span className="cart-quantity">{props.cantidad}</span>
        </div>
    )
}

export default CartWidget;