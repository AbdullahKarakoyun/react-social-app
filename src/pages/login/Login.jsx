import "./login.css"

export default function Login() {
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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Şifre" className="loginInput" />
            <button className="loginButton">Giriş Yap</button>
            <span className="loginForgot">Şifremi unuttum?</span>
            <button className="loginRegisterButton">Yeni bir hesap oluştur.</button>
           </div>
        </div>
      </div>
    </div>
  )
}


