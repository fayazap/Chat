import "./post.css";
import {useState} from "react"; 
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

const Post = (props) => {

    const [like, setLike] = useState(props.post.like);
    const [isliked, setIsLiked] = useState(false);
    const likeHandler = () => {
        setLike(isliked ? like-1 : like+1);
        setIsLiked(!isliked);
    }

    return (
        <div className="post" key={props.key}>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter((u) => u.id === props.post?.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter((u) => u.id === props.post?.userId)[0].username}</span>
                        <span className="postDate">{props.post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{props.post?.desc}</span>
                    <img className="postImg" src={props.post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="/assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCount">{like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{props.post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;