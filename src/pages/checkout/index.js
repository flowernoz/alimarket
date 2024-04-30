import "./index.css";
import mastercard from "../../assets/mastercard.png";
import humo from "../../assets/humo.png";
import visa from "../../assets/visa.png";
import uzcard from "../../assets/uzcard.png";
export default function Checkout() {
  const cities = [
    "Toshkent",
    "Namangan",
    "Andijon",
    "Farg'ona",
    "Toshkent",
    "Namangan",
    "Andijon",
    "Farg'ona",
    "Toshkent",
    "Namangan",
    "Andijon",
    "Farg'ona",
  ];
  return (
    <div className="checkout">
      <h1 className="title">Qabul qilish usuli va yetkazib berish manzili:</h1>
      <div className="checkout_left">
        <p>Yetkazib berish shahri</p>
        <select className="cities">
          {cities.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        <p>Olish usuli</p>
        <div className="chance">
          <label>
            <input type="radio" />
            <div className="radio_text">
              <span>UZMARKET topshirish punkti</span>
              <small>
                Mustaqil 2-mart (Erta) <i>bepul</i>
              </small>
            </div>
          </label>

          <ul>
            <li>Buyurtmani saqlash muddati – 5 kun</li>
            <li>Mahsulotni tekshirish va kiyib koʻrish mumkin</li>
            <li>Mahsulotlarning tez va muammosiz qaytarib olinishi</li>
          </ul>
        </div>
        <div className="door">
          <label>
            <input type="radio" />
            <span>Kuryer orqali eshikkacha</span>
          </label>
          <ul>
            <li>Yetkazib beramiz erta,30 000 so'm</li>
          </ul>
        </div>
        <p>Topshirish punkti</p>
        <small>Xaritada yetkazib berish manzilini ko’rsating</small>
        <button>Tanlash</button>
        <p>Buyurtma qabul qiluvchi:</p>
        <label className="surname">
          Familya<mark>*</mark>
        </label>
        <input type="text" placeholder="Familyangizni kriting" />
        <label>
          Ism<mark>*</mark>
        </label>
        <input type="text" placeholder="Ismingizni kriting" />
        <label>
          Telefon raqami<mark>*</mark>
        </label>
        <input type="text" placeholder="+998__ ___-__-__" />
        <p>To'lov turi</p>
        <div className="payment">
          <label>
            <input type="radio" />
            <span>Karta orqali onlayn</span>
          </label>
          <ul>
            <li>UZCARD, HUMO, Visa, MasterCard</li>
          </ul>
          <div className="payCarts">
            <button><img src={mastercard} alt="" /></button>
            <button><img src={humo} alt="" /></button>
            <button><img src={uzcard} alt="" /></button>
            <button><img src={visa} alt="" /></button>
          </div>
        </div>
        <div className="cash">
          <label>
            <input type="radio" />
            <span>Naqd pul yoki karta orqali qabul qilganda</span>
          </label>
          <ul>
            <li>
              Buyurtmani qabul qilish ofisida yoki kuryerdan olganda to'lash
            </li>
          </ul>
        </div>
        <select>
          <option>Buyurtmadagi mahsulotlar</option>
        </select>
        <div className="booking">
          <p>Buyurtmangiz</p>
          <span className="product_data">
            Mahsulotlar (1):
            <small>15.000.000 So’m</small>
          </span>
          <span className="delivering_day">
            Yetkazib berishning eng yaqin sanasi: <b>29-fevral</b>
          </span>
          <span className="product_data">
            Jami:
            <small>15.000.000 So’m</small>
          </span>
          <input type="text" placeholder="Promokod Bormi?" />
          <button>Karta bilan to'lash</button>
        </div>
      </div>

      {/* <div className="checkout_right">
        <div className="booking">
          <p>Buyurtmangiz</p>
          <span>
            Mahsulotlar (1):
            <small>15.000.000 So’m</small>
          </span>
          <span className="delivering_day">
            Yetkazib berishning eng yaqin sanasi: <b>29-fevral</b>
          </span>
          <span>
            Jami:
            <small>15.000.000 So’m</small>
          </span>
          <input type="text" placeholder="Promokod Bormi?" />
          <button>Karta bilan to'lash</button>
        </div>
      </div> */}
    </div>
  );
}
