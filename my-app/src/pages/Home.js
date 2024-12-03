import "./../styles/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <div className="slick-prev"><i className="fas fa-chevron-left"></i></div>,
    nextArrow: <div className="slick-next"><i className="fas fa-chevron-right"></i></div>,
  };
  
  return (
    <div className="carousel-container">
    <Slider {...settings}>
      <div className="slide">
        <img
          src="https://e7.pngegg.com/pngimages/873/1015/png-clipart-adidas-logo-adidas-originals-t-shirt-adidas-icon-ink-white-thumbnail.png"
          alt="Slide 1"
          className="slide-image"
        />
      </div>
      <div className="slide">
        <img
          src="https://w7.pngwing.com/pngs/224/696/png-transparent-nike-logo-movement-brands-black-thumbnail.png"
          alt="Slide 2"
          className="slide-image"
        />
      </div>
      <div className="slide">
        <img
          src="https://w7.pngwing.com/pngs/670/927/png-transparent-puma-logo-puma-logo-adidas-swoosh-brand-adidas-text-carnivoran-sneakers-thumbnail.png"
          alt="Slide 3"
          className="slide-image"
        />
      </div>
    </Slider>
    <div className="container">
      <div className="item">
        <div className="text-container">
          <h4 className="texto">Titulo</h4>
          <p>Pagina Creada con React</p>
          <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfh5PnX_DJ4xqyIyRGh-5RVIs0LJgbwWb2bg&s"
          alt="Descripción de la imagen"
          className="Imagen"
        />
        </div>
      </div>
      <div className="item">
        <div className="text-container">
          <h4 className="texto">Titulo</h4>
          <p>Mi Primer pagina con React</p>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpa202Lgfw4RXaP0H7MJa7XhzkTjS51Q9Mg&s"
          alt="Descripción de la imagen"
          className="Imagen"
        />
      </div>
    </div>
    </div>
  );
}
