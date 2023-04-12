import './style.css'

export function Header() {
  return (
    <div className="fund">
      <div className="headerContainer">
        <div className="mainMenu">
          <div className="menu">
            <a href="">
              <span>Portifolio</span>
            </a>

            <a href="">
              <span>Stories</span>
            </a>
          </div>
          <div className="logo">
            <img src="https://static.wixstatic.com/media/17a3e4_e4a8906c791a412e8e2f9c22e7bb4988~mv2.png/v1/fill/w_77,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/17a3e4_e4a8906c791a412e8e2f9c22e7bb4988~mv2.png" alt="logo" />
          </div>
          <div className="menu">
            <a href="">
              <span>Shop</span>
            </a>

            <a href="">
              <span>About</span>
            </a>

            <a href="">
              <span>kontakt</span>
            </a>
          </div>
        </div>
        <div className="downMenu">
            <div className="midiaSocial">
              <a href="">
                <img src="https://img.icons8.com/3d-fluency/256/instagram-new.png" alt="" />
                </a>
              <a href="">
                <img src="https://img.icons8.com/fluency/256/facebook.png" alt="" />
              </a>
              <a href="">
                <img src="https://img.icons8.com/color/256/whatsapp.png" alt="" />
              </a>
            </div>

            <div className="arrowDown">
              <img src="https://img.icons8.com/office/256/down.png" alt="" />
            </div>

            <div className="textDown">
              <p>
                Emotional<br></br>
                Authentisch<br></br>
                Ungestellt
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}