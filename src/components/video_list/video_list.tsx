import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = (props: { videos: any }) => (
  <ul className={styles.videos}>
    {props.videos.map(
      (video: {
        id: string;
        snippet: {
          thumbnails: {
            medium: {
              url: string;
            };
          };
          title: string;
          channelTitle: string;
        };
      }) => (
        <VideoItem key={video.id} video={video} />
      )
    )}
  </ul>
);

export default VideoList;
