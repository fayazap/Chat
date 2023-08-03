import "./online.css";

const Online = ({user}) => {
    return(
        <div>
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightBarUsername">{user.username}</span>
            </li>
        </div>
    )
}

export default Online;