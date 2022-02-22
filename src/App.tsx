import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState<{}[]>([]);

  var requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
  };

  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDdJR5tKHkV9ZVMjKtqWHMlkHLqHkJH9S0',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div className={styles.bodyContainer}>
      <VideoList videos={videos} />;
    </div>
  );
}
export default App;
