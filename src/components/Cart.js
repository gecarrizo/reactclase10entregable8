import { useContext} from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
    const context = useContext(CartContext);

    return (
        <>
            <div className='divTitle'><h2>Carrito de compras</h2></div>
            <div className='divSubtitle'>
                {
                context.cartList.length > 0 ?
                    <button type="button" className="btn btn-primary btn-sm add" onClick={context.removeItems}>Remover todos los productos</button>
                    :<div></div>
                }
            </div>
            {
            context.cartList.length > 0 ?
            context.cartList.map(item =>
                <div className='cart-items'>
                    <div className='div-box'>
                        <img className='image-box' src={item.imgItem} alt={item.imgItem}/>
                    </div>
                    <div className='about'>
                        <h4>{item.nameItem}</h4>
                        <button type="button" className="btn btn-primary btn-sm add" onClick={() => context.removeItem(item.idItem)}>Remover producto</button>
                    </div>
                    <div className='count'>{item.countItem} unidades</div>
                    <div className='price'>${item.costItem} c/u</div>
                </div>
            )
            : <div className='divSubtitle'>Carrito Vacío</div>
            }
        </>
    );
}

export default Cart;