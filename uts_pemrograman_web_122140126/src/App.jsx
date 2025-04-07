import React from "react";
import { useState } from "react";
import "./index.css";
import homeImg from "./img/home.png";
import foodImg from "./img/food1.png";
import food2 from "./img/food2.png";
import food3 from "./img/food3.png";
import orderFood from "./img/orderfood.png";
import aboutImg from "./img/about.png";
import boxImg from "./img/box.png";
import shippingImg from "./img/shiping.png";
import deliverImg from "./img/deliver.png";
import {
  BsGithub,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsList,
} from "react-icons/bs";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <header>
        <a href="#" className="logo">
          Food king
        </a>
        <div
          className={`bx bx-menu ${menuOpen ? "open" : ""}`}
          id="menu-icon"
          onClick={toggleMenu}
        >
          <BsList />
        </div>
        <ul className={`navbar ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#" onClick={handleMenuClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleMenuClick}>
              About
            </a>
          </li>
          <li>
            <a href="#menu" onClick={handleMenuClick}>
              Menu
            </a>
          </li>
          <li>
            <a href="#order" onClick={handleMenuClick}>
              Order
            </a>
          </li>
          <li>
            <a href="#service" onClick={handleMenuClick}>
              Service
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenuClick}>
              Contact
            </a>
          </li>
        </ul>
      </header>

      <section className="home" id="home">
        <div className="home-text">
          <h1>Restaurant</h1>
          <h2>
            Makanan Untuk <br />
            Keberlangsungan bangsa kita
          </h2>
          <p>Makanan Yang Enak Bisa Membuat Hidup lebih Cerah</p>
          <a href="#" className="button">
            Learn More
          </a>
        </div>
        <div className="home-img">
          <img src={homeImg} alt="Home" />
        </div>
      </section>

      <section className="menu" id="menu">
        <div className="heading">
          <span>Food Menu</span>
          <h2>Makanan Berkualitas Harga Pas</h2>
        </div>
        <div className="menu-container">
          <div className="box">
            <div className="box-img">
              <img src={foodImg} alt="Chicken Burger" />
            </div>
            <h2>Chicken Burger</h2>
            <h3>Tasty Food</h3>
            <span>Rp. 20.000</span>
            <i className="bx bx-cart"></i>
          </div>

          <div className="box">
            <div className="box-img">
              <img src={food2} alt="Special Veg Burger" />
            </div>
            <h2>Special Veg Burger</h2>
            <h3>Tasty Food</h3>
            <span>Rp. 55.000</span>
            <i className="bx bx-cart"></i>
          </div>

          <div className="box">
            <div className="box-img">
              <img src={food3} alt="Chicken Fry Pack" />
            </div>
            <h2>Chicken Fry Pack</h2>
            <h3>Tasty Food</h3>
            <span>Rp. 120.000</span>
            <i className="bx bx-cart"></i>
          </div>
        </div>
      </section>

      <section className="order" id="order">
        <div className="order-text">
          <h2>Masih Idup Lu?</h2>
          <h1>Makannn!</h1>
          <p>Let start to order food now</p>
          <a href="#" className="button">
            Pesan DOnk
          </a>
        </div>
        <div className="order-img">
          <img src={orderFood} alt="Order Food" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src={aboutImg} alt="About" />
        </div>
        <div className="about-text">
          <span>About Us</span>
          <h2>
            Mari NGumpul <br />
            Mabar(MakanBareng)
          </h2>
          <p>
            Ini adalah website yang dibuat untuk memudahkan anda dalam memesan
            makanan. Kami menyediakan berbagai jenis makanan yang berkualitas
            dan harga yang terjangkau. Kami juga menyediakan layanan pengantaran
            makanan yang cepat dan aman.
          </p>
          <a href="#" className="button">
            About us
          </a>
        </div>
      </section>

      <section className="service" id="service">
        <div className="heading">
          <span>Services</span>
          <h2>Kami Jamin Makanan Asli AYAM</h2>
        </div>
        <div className="service-container">
          <div className="s-box">
            <img src={boxImg} alt="Order" />
            <h3>Order</h3>
            <p>Pesan makanan yang anda inginkan dengan mudah dan cepat.</p>
          </div>

          <div className="s-box">
            <img src={shippingImg} alt="Shipping" />
            <h3>Shipping</h3>
            <p>Makananmu sudah masuk pesanan. Pesanan akan dikirim segera</p>
          </div>

          <div className="s-box">
            <img src={deliverImg} alt="Delivered" />
            <h3>Delivered</h3>
            <p>Pesanan sampai di tempat anda dengan aman dan cepat.</p>
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <h2>
          Ayo Buat makanan berkualitas <br />
          Setiap Hari
        </h2>
        <a href="#" className="button">
          BJi
        </a>
      </section>

      <section id="contact">
        <div className="footer">
          <div className="main">
            <div className="col">
              <h4>Menu Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <a href="#order">Order</a>
                </li>
                <li>
                  <a href="#service">Service</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Food Delivery</a>
                </li>
                <li>
                  <a href="#">Quality Food</a>
                </li>
                <li>
                  <a href="#">Cart Service</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4>Information</h4>
              <ul>
                <li>
                  <a href="#about">About US</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4>Contact Us</h4>
              <div className="social-icons">
                <a href="https://www.facebook.com">
                  <BsFacebook />
                </a>
                <a href="https://www.twitter.com/">
                  <BsTwitter />
                </a>
                <a href="https://www.instagram.com/">
                  <BsInstagram />
                </a>
                <a href="https://www.youtube.com">
                  <BsYoutube />
                </a>
                <a href="https://www.github.com/">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
