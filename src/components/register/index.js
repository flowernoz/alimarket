import "./index.css";
import tg from "../../assets/svg/tg.svg";
import fb from "../../assets/svg/facebook.svg";
import google from "../../assets/svg/google.svg";
function Register() {
  return (
    <div className="Register">
      <h1>Ro’yxatdan o’tish</h1>
      <form>
        <label>Ism</label>
        <input type="text" />
        <label>Familya</label>
        <input type="text" />
        <label>Telefon raqam yoki e-mail</label>
        <input type="text" />
        <button>Tasdiqlash kodini yuborish</button>
      </form>
      <span>Yoki ijtimoiy tarmoqlar orqali</span>
      <div className="social_nets">
        <button>
          <img src={tg} alt="" />
        </button>
        <button>
          <img src={fb} alt="" />
        </button>
        <button>
          <img src={google} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Register;
