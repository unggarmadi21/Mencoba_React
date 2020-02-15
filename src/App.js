import React from "react";
import "./App.css";
import ReviewItems from "./Reviews";
import Navbar from "./Head";
import Footer from "./Foot";
import Jumbotron from "./Jumb";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Jumbotron />
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Centrifuge" category="Kemerdekaan" />
      <ReviewItems />
      <Footer />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="centrifuge.jpg" />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount == "yes") {
    return <p>Diskon 50% Off</p>;
  } else if (isDiscount == "coming") {
    return <p>Akan ada diskon ...</p>;
  } else {
    return <p>Belum ada diskon</p>;
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = [
    "Tidak rusak terkena air",
    "Battery tahan lama",
    "Colling lebih lama",
  ];
  const listBenefits = benefits.map((itemBenefit) => <li>{itemBenefit}</li>);
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 73.309.399</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="Info">
          One of the most recognizable shoes in the AJ collection, the Air
          Jordan 3 Retro features lightweight, visible cushioning just like the
          original from '88. Signature details and materials celebrate the
          game-changing icon.
        </p>
        <ul>{listBenefits}</ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">
          Add to Cart
        </a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli " + e);
}

export default App;
