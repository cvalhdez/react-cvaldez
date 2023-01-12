import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import ItemCount from "./ItemCount";

function ItemDetail( { nombre, color, envase, presentacion, precio, stock, img, desc } ) {
    
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <article
            className="itemDetalles"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true">
            <img src={process.env.PUBLIC_URL + img} alt={nombre}/>
            <div className="descContainer">
                <div className="itemTitulo">
                    <h3>{nombre}</h3>
                    <p>{color}</p>
                </div>
                <div>
                    <p>{desc}</p>
                    <p>Presentacion en {envase}</p>
                    <p>Cantidad: {presentacion} cervezas</p>
                    <p>Stock disponible: {stock} cervezas</p>
                    <p className="descContainerPrecio">Precio ${precio} MXN</p>
                    <ItemCount stock={stock}/>
                    <button className="descContainer-back" onClick={handleBack}><FontAwesomeIcon icon = { faCircleArrowLeft } />Volver</button>
                </div>
            </div>
        </article>    
    )
}

export default ItemDetail;