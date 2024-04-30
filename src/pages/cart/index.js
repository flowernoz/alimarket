import "./index.css";
import deleteIcon from "../../assets/svg/delete.svg";

export default function Cart() {
  let data = [
    {
      title: "IPHONE 15 PRO MAX",
      price: 20000000,
      img: "",
      brand: "Apple",
      color: "Qora",
      character: "8/256gb",
    },
    {
      title: "IPHONE 15 PRO MAX",
      price: 20000000,
      img: "",
      brand: "Apple",
      color: "Qora",
      character: "8/256gb",
    },
  ];
  return (
    <>
      <h1 className="title"> Savatingiz</h1>
      <div className="cart">
        {data.map((i, inx) => (
          <div key={inx} className="cart_item">
            <div
              style={
                !inx === 0
                  ? { justifyContent: "end" }
                  : { justifyContent: "space-between" }
              }
              className="cart_header"
            >
              {inx === 0 && (
                <div className="cart_chexbox">
                  <input type="checkbox" />
                  <label>Hammasini yechish/tanlash</label>
                </div>
              )}
              <span className="delivering_day">
                Yetkazib berishning eng yaqin sanasi: <b>29-fevral</b>
              </span>
            </div>
            <div className="cart_body">
              <div className="cart_left">
                <input type="checkbox" />
                <img src={i.img}  alt='product'/>
                <div className="cart_info">
                  <p className="item_title">{i.title}</p>
                  <div className="item_detail">
                    <span>
                      <small>Sotuvchi: </small>
                      {i.brand}
                    </span>
                    <span>
                      <small>Rangi: </small>
                      {i.color}
                    </span>
                    <span>
                      <small>Xarakteristika: </small>
                      {i.character}
                    </span>
                  </div>
                </div>
              </div>
              <div className="cart_right">
                <button className="delete_cart">
                  <img src={deleteIcon} alt="" />
                  O’chirish
                </button>
                <div className="item_price">
                  <b>{i.price} So'm</b>
                  <s>{i.price} So'm</s>
                  <div className="quantity">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
