import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestAllProducts } from "../../helpers/requestData";
import Spinner from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList";
import NoProducts from "../NoProducts/NoProducts";

function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { itemName, colorId } = useParams();

    useEffect( () => {
        setProducts([]);
        setLoading(true);
        requestAllProducts()
            .then( (res) => {
                if (itemName) {
                    let nombre = itemName.toLowerCase();
                    setProducts(res.filter( product => product.nombre.toLowerCase().includes(nombre)));
                    setLoading(false);
                } else if (colorId) {
                    setProducts(res.filter( product => product.color === colorId ));
                    setLoading(false);
                } else {
                    setProducts(res);
                    setLoading(false);
                }
            })
            .catch( (err) => {
                console.log(err);
            });
    }, [ itemName, colorId]);

    return (
        <div>
            {
                loading
                    ? <Spinner />
                    : products.length === 0
                        ? <NoProducts />
                        : <ItemList products={products} />
            }
        </div>
    );
}

export default ItemListContainer;