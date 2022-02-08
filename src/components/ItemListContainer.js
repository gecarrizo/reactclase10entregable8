import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { arrayProducts } from './Products';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);  
    const dataParam = useParams();
    
    useEffect(() => {       
        let is_ok = true;
        
        let filtrarCategoria = () => {
            let categoriaProducto = arrayProducts.filter(producto => { if (dataParam.categoryId === undefined) return producto; return producto.category === parseInt(dataParam.categoryId) });
            return categoriaProducto;
        }
        
        let consultarDatosProductos = (time, task) => {    
            return new Promise((resolve, reject) => {
                if (is_ok) {
                    setTimeout(() => {
                        resolve(task)
                    }, time);
                } else {
                    reject("Error")
                }
            });
        }
    
        consultarDatosProductos(2000, filtrarCategoria () )
            .then(respuesta => setProductos(respuesta))
            .catch(err => console.log(err))
    }, [productos]);
    
    return(
        <>
        <div>
            <ItemList productos={productos}/> 
        </div>    
        </>
    )
}

export default ItemListContainer;