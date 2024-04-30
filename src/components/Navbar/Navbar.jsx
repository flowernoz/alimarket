import React from 'react'
import "./nav.css"
import katalog from "../../assets/svg/Katalog.svg"
import star from "../../assets/svg/star.svg"

export default function Navbar() {
    return (
        <nav>
            <button> <img src={katalog} alt="" /> Katalog</button>
            <button> <img src={star} alt="" />  </button>
            <div className="search">
                <input type="text" />
            </div>


      
        </nav>
    )
}
