import "./friends.css";

const Friends = ({user}) =>{
    return(
        <div>
            <div className="rightbarFollowing">
              <img src={user.profilePicture} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">{user.username}</span>
            </div>
        </div>
    )
}

export default Friends;