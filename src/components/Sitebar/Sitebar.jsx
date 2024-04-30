import React from 'react';
import "./css.css"

import logo from "../../assets/svg/logo.svg";
import elektir from "../../assets/svg/elektir.svg";
import maishiy from "../../assets/svg/maishiy.svg";
import kiyim from "../../assets/svg/kiyim.svg";
import acses from "../../assets/svg/acsesuar.svg";
import chiroy from "../../assets/svg/chiroy.svg";
import salomat from "../../assets/svg/salomat.svg";
import oyoqkiyim from "../../assets/svg/oyoqkiyim.svg";
import yosh from "../../assets/svg/yoshbola.svg";
import sport from "../../assets/svg/sport.svg";
import kitob from "../../assets/svg/kitob.svg";

export default function Sitebar() {
  const categories = [
    { name: "Elektronika", icon: elektir },
    { name: "Maishiy texnika", icon: maishiy }, // Bu o'zgartirishingiz kerak, to'g'ri ikonni tanlang
    { name: "Kiyim", icon: kiyim }, // Bu o'zgartirishingiz kerak, to'g'ri ikonni tanlang
    { name: "Aksesuarlar", icon: acses }, // Bu o'zgartirishingiz kerak, to'g'ri ikonni tanlang
    { name: "Chiroy", icon: chiroy }, // Bu o'zgartirishingiz kerak, to'g'ri ikonni tanlang
    { name: "Salomatlik", icon: salomat }, // Bu o'zgartirishingiz kerak, to'g'ri ikonni tanlang
    { name: "Oyoq kiyim", icon: oyoqkiyim}, // Bu o'zgartirishingiz kerak, to'g'ri ikonni tanlang
    { name: "Yosh bolalar ", icon:yosh }, // Bu o'zgartirishingiz kerak, to'g'ri ikonni tanlang
    { name: "Sport", icon: sport }, // Bu o'zgartirishingiz kerak, to'g'ri ikonni tanlang
    { name: "Kitoblar", icon: kitob } // Bu o'zgartirishingiz kerak, to'g'ri ikonni tanlang
  ];



  function  selectid(index){
    console.log(index);
  }
  return (
    <div className='sitebar'>
      <img src={logo} alt="" />
      <button>bosh menyu</button>
      {categories.map((category, index) => (
        <button key={index}  onClick={()=>selectid(category.name)}>
          <img src={category.icon} alt={category.name} />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}
