import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/header/search_header';
import VideoList from './components/video_list/video_list';
import Youtube from './service/youtube';

function App({ youtube }: { youtube: Youtube }) {
  const [videos, setVideos] = useState<{}[]>([]);

  const handleOnSubmit = (query: string) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSubmit={handleOnSubmit} />
      <VideoList videos={videos} />;
    </div>
  );
}
export default App;
