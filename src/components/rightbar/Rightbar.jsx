import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
  <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className=" birthdayText">
            <b>Ali Kurt</b> ve <b> 3 diğer arkaşının</b> bugün doğum günü!
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Arkadaşlar</h4>
        <ul className="rightbarFriendList">
         {Users.map((u)=>(
          <Online key={u.id} user={u}/>
         ))}
        </ul>
      </>
    )
  };

  const ProfileRightbar = () =>{
    return (
      <>
       <h4 className="rightbarTitle">Kullanıcı bilgisi</h4>
       <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Şehir:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Ülke:</span>
          <span className="rightbarInfoValue">U.S.A</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">İlişki durumu:</span>
          <span className="rightbarInfoValue">Bekar</span>
        </div>
       </div>
       <h4 className="rightbarTitle">Kullanıcı arkadaşları</h4>
       <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ali Kurt</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Mehmet Yaş</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ayşe Kas</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Gözde Sert</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Kubilay Doğan</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/7.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Hande Arca</span>
        </div>
       </div>

      </>
    )
  }
  return (

    <div className="rightbar">
      <div className="rightbarWrapper">
       {profile ? <ProfileRightbar/> : <HomeRightbar/>}
       {/* <HomeRightbar/> */}
      </div>
    </div>
  )
}


