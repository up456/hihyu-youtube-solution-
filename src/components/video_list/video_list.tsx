import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = (props: any) => (
  <ul>
    {props.videos.map((video: any) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
