import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


const Post = ({imgName, username, timestamp, message }) => {
	return (
		<div className="post">
			<div className="post__top">
				<Avatar className="post__avatar" />
				<div className="post__topInfo">
					<h3>{username}</h3>
					<p>{new Date(parseInt(timestamp)).toUTCString()}</p>
				</div>
			</div>
			<div className="post__bottom">
				<p>{message}</p>
				{/*image is coming later*/}
			</div>
			<div className="post__options">
				<div className="post__option">
					<ThumbUpIcon />
					<p>Like</p>
				</div>
				<div className="post__option">
					<ChatBubbleOutlineIcon />
					<p>Comment</p>
				</div>
			</div>
		</div>
	);
};

export default Post;
