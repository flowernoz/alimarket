import "./style.css";
import img from "../../assets/empty.png";

export default function EmptyCart() {
  return (
    <div className="empty_cart">
      <img src={img} alt="" />
      <p>Savatda hozircha mahsulot yoʻq</p>
      <span>
        Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv
        orqali toping
      </span>
    </div>
  );
}
