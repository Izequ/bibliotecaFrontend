import React from "react";
import { useLinkClickHandler } from "react-router-dom";
import '../../assets/css/footer.css';

const Footer = () => {
    return (
        <div className="biblioteca-footer">
            <footer class="footer">
                <div class="l-footer">
                    <h1>
                        <img src="https://ww2.ufps.edu.co/public/archivos/elementos_corporativos/logoufps.png" alt="" className="footer-img"/></h1>
                    <p>
                        La biblioteca Eduardo Cote Lamus hace parte de una institución de Educación Superior sujeta a inspección y vigilancia por el M. E. N.</p>
                </div>
                <ul class="r-footer">
                    <li>
                        <h2>
                            Social</h2>
                        <ul class="box">
                            <li><a href="https://www.facebook.com/ecoteufps">Facebook</a></li>
                            <li><a href="https://twitter.com/bibliotecaUFPS">Twitter</a></li>
                            <li><a href="https://www.youtube.com/user/beclufps">Youtube</a></li>
                        </ul>
                    </li>
                    <li class="features">
                        <h2>
                            Información</h2>
                        <ul class="box h-box">
                            <li><a>Avenida Gran Colombia No. 12E-96 Barrio Colsag, San José de Cúcuta - Colombia.</a></li>
                            <li><a>Teléfono (057)(7) 5776655 ext. 133-136-252-295</a></li>
                            <li><a>biblioteca@ufps.edu.co</a></li>
                        </ul>
                    </li>
                    <li>
                        <h2>
                            Legal</h2>
                        <ul class="box">
                            <li><a>Política de Privacidad</a></li>
                            <li><a>Términos de Uso</a></li>
                            <li><a>Contratos</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="b-footer">
                    <p>
                    Copyright © Todos los derechos reservados Términos del Servicio UFPS </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
