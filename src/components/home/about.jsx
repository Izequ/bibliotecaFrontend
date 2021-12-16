import React from "react";
import reactDom from "react-dom";
import { useLinkClickHandler } from "react-router-dom";
import '../../assets/css/about.css';


const About = () => {
  return (
    <div className="biblioteca-home">
      <section class="photo" id="inicio">
        <div class="photo-text">
          <h4 data-ix="skype">Biblioteca</h4>
          <p data-ix="subtitle-hero-up">Eduardo Cote Lamus</p>
        </div>
        <div class="overlay"></div>
      </section>

      <section class="content">
        <div class="grand-title" id="servicio">
          <h4 data-ix="slowfade-scroll-bigs">ACERCA DE NOSOTROS</h4>
        </div>
        <div class="text">
          <div class="inner-text">
            <h3 data-ix="slowfade-scroll-bigs">Historia</h3>
            <i class="ic ion-fork"></i>
            <div class="text-box">
              <p data-ix="slowfade-scroll-bigs">La Universidad Francisco de Paula Santander nace como fundación de 
              carácter privado el 5 de julio de 1962, con la Escuela de Economía. Ese mismo año el 19 de septiembre, 
              el gobierno departamental le otorga la personería jurídica y se incorpora a la universidad las escuelas 
              de Topografía y Dibujo.</p>
            </div>
          </div>
          <div class="inner-text">
            <h3 data-ix="slowfade-scroll-bigs">Misión</h3>
            <i class="ic ion-fork"></i>
            <div class="text-box">
              <p data-ix="slowfade-scroll-bigs">La biblioteca de la Universidad Francisco de Paula Santander 
              tiene como misión recopilar, clasificar, preservar y poner a disposición de la comunidad 
              universitaria y regional toda la Información posible de las diferentes áreas del conocimiento en 
              diversos formatos, para el mejoramiento de la formación profesional de los estudiantes y su 
              comunidad académica.</p>
            </div>
          </div>
          <div class="inner-text">
            <h3 data-ix="slowfade-scroll-bigs">Visión</h3>
            <i class="ic ion-knife"></i>
            <div class="text-box">
              <p data-ix="slowfade-scroll-bigs">Ser líderes en el uso de las nuevas tecnologías de la información 
              para conectarnos con el mundo científico y cultural; poniendo al alcance de la comunidad universitaria 
              todo el conocimiento de punta en las distintas áreas del saber.</p>
            </div>
          </div>
        </div>
       
        <section class="portafolio" id="trabajo">
          <h4 data-ix="slowfade-scroll-bigs">SERVICIOS OFRECIDOS</h4>
          <div class="portafolio-container">
            <section class="portafolio-item">
              <img src="https://www.bancomail.com/images/png/various/bm-signin.png" alt="" class="portafolio-img" />
              <section class="portafolio-text">
                <h5>Ingresar & Registrarse</h5>
                <p>Se permite a cualquier interesado registrarse e ingresar a la página para que pueda realizar el proceso de préstamo de libros correspondiente.</p>
              </section>
            </section>
            <section class="portafolio-item">
              <img src="https://shrisoftware.co.in/wp-content/uploads/2020/11/library.png" alt="" class="portafolio-img" />
              <section class="portafolio-text">
                <h5>Catálogo de Libros</h5>
                <p>Los usuarios pueden visualizar los libros que actualmente están disponibles en la biblioteca.</p>
              </section>
            </section>
            <section class="portafolio-item">
              <img src="https://www.sigmasoftwares.org/img/ffr.png" alt="" class="portafolio-img" />
              <section class="portafolio-text">
                <h5>Préstamo de Libros</h5>
                <p>Los usuarios ya previamente registrados podrán acceder al préstamo de libros que se encuentren en la biblioteca y su posterior proceso de devolución.</p>
              </section>
            </section>
          </div>
        </section>
      </section>
      <div class="contact" id="contacto">
        <h4 data-ix="slowfade-scroll-bigs">CONTÁCTANOS</h4>
        <div class="container">
          <form action="enviar.php" method="post">
            <ul class="flex-outer">
              <li>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" placeholder="Ingrese el Nombre" class="rect" required/>
              </li>
              <li>
                <label for="correo">Correo</label>
                <input type="email" name="correo" placeholder="Ingresa el Correo" class="rect" required/>
              </li>
              <li>
                <label for="fono">Teléfono</label>
                <input type="text" name="telefono" placeholder="Ingresa el Teléfono" class="rect" required/>
              </li>
              <li>
                <label for="mensaje">Mensaje</label>
                <textarea rows="6" name="mensaje"placeholder="Ingresa el Mensaje"  class="rect" required></textarea>
              </li>
              <li class="center">
                <button type="submit">Enviar</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;