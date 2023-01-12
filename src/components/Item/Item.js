import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Item( { id, nombre, color,img, precio} ) {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <article
            className="item col-7 col-sm-5 col-md-3"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true">
            <img src={process.env.PUBLIC_URL + img} alt={nombre}/>
            <div className="itemDetalles">
                <h3>{nombre}</h3>
                <p>{color}</p>
                <p>${precio} mxn</p>
                <Link to={`/item/${id}`} className="itemLink">Ver más</Link>
            </div>
            
        </article>    
    )
}

export default Item;