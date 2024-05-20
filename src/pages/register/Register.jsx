import "./register.css"

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lucybook</h3>
          <span className="loginDesc">
          Lucybook ile arkadaşlarınızla ve etrafınızdaki dünyayla bağlantı kurun.
          </span>
        </div>
        <div className="loginRight">
           <div className="loginBox">
            <input placeholder="İsim" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Şifre" className="loginInput" />
            <input placeholder="Şifreyi tekrar giriniz" className="loginInput" />
            <button className="loginButton">Kayıt ol</button>
       
            <button className="loginRegisterButton">Hesaba Giriş Yapın</button>
           </div>
        </div>
      </div>
    </div>
  )
}


