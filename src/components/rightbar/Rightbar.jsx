import "./right.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import Friends from "../UserFriends/Friends";

const Rightbar = () => {

  const HomeRightbar = () =>{
    return(
      <div>
        <div className="birthdayContainer">
            <img className="birthdayImg" src="/assets/gift.png" alt="" />
            <span className="birthdayText">
              <b>Salman</b> and <b>3 other friends</b> have birthday today
            </span>
          </div>
            <img className="rightbarAd" src="/assets/ad.png" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendsList">
              {Users.map(u=>(
                <Online key={u.id} user={u} />
              ))}
            </ul>
      </div>
    )
  }

  const ProfileRightbar = () => {
    return(
      <div>
          <h4 className="rightbarTitle">User Information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:</span>
              <span className="rightbarInfoValue">Kerala</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From:</span>
              <span className="rightbarInfoValue">Manjeri</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship:</span>
              <span className="rightbarInfoValue">Single</span>
            </div>
          </div>
          <h4 className="rightbarTitle">User Friends</h4>
          <div className="rightbarFollowings">
            {Users.map(u=>(
                <Friends key={u.id} user={u} />
              ))}
          </div>
      </div>
    )
  }

  return(
     <div className="rightbar">
        <div className="rightbarWrapper">
          <ProfileRightbar />
        </div>
      </div>
  )
};

export default Rightbar;
