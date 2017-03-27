import React from 'react'

const VideoListItem = ({video}) =>
{
	return (
		<li className="list-group-item">
			<image src={video.snippet.thumbnails.default.url}></image>
			{video.snippet.title}
		</li>
	);
};

export default VideoListItem