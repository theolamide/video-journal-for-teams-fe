import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "antd/dist/antd.css";
import { humanDate } from "../utils/HumanDate";
// thumbnail
import VideoThumbnail from "react-video-thumbnail";
import Thumbnail from "./ThumbNail";
const { Meta } = Card;

const UserVideosCard = (props) => {
	const data = props.data;
	console.log(data);
	return (
		<Link to={`/videos/${data.id}`}>
			<Card
				className="video-card"
				cover={
					<Thumbnail thumbnail={data.thumbnail} />
					// code if duration is infinity
					// <VideoThumbnail
					// 	videoUrl={data.thumbnail}
					// 	cors={true}
					// 	snapshotAtTime={2}
					// 	style={{ display: !data.thumbnail ? "none" : "block" }}
					// />
				}>
				<Meta
					style={{ textAlign: "left" }}
					title={data.title}
					description={
						data.description && (
							<>
								<p className="tiny">{humanDate(data.created_at)}</p>
								<p className="small">{data.description}</p>
							</>
						)
					}
				/>
			</Card>
		</Link>
	);
};

export default UserVideosCard;
