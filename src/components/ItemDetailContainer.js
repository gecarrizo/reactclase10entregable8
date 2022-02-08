import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { arrayProducts } from './Products';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);  
    const [isLoading, setLoading] = useState(false);
    const dataParam = useParams();

    console.log(isLoading);
    
    useEffect(() => {       
        let is_ok = true;

        let filtrarProducto = () => {
            let datoProducto = arrayProducts.filter(producto => producto.id===parseInt(dataParam.itemId))
            return datoProducto[0];
        }

        let consultarDatosProducto = (time, task) => {    
            return new Promise((resolve, reject) => {
                if (is_ok) {
                    setTimeout(() => {
                        setLoading(true);
                        resolve(task)
                    }, time);
                } else {
                    reject("Error")
                }
            });
        }

        consultarDatosProducto(2000, filtrarProducto())
            .then(respuesta => setProducto(respuesta))
            .catch(err => console.log(err))
    }, [producto]);  

    return (
        <>
            {
                isLoading ? 
                <ItemDetail producto={producto}/>
                : <img style={{width:"200px", height:"200px"}} src="../Loader.gif" alt="Wait"/>            
            }
        </>
    );
}

export default ItemDetailContainer;
