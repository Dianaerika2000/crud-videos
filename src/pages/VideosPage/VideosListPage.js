import { useEffect, useState } from 'react';
import { api } from '../../config/site.config';
import Card from '../../components/Card/Card';

export default function VideosListPage() {
  // states
  const [videos, setVideos] = useState([]);

  // init
  useEffect(() => {
    api
      .get('https://example-data.draftbit.com/videos?_limit=10')
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  // render
  return (
    <div className="container">
      <h2>Lista de videos</h2>
      <div className="row">
        {videos.map((video, index) => {
          return (
            <div className="col-4 my-3">
              <Card
                key={index}
                title={video.title}
                video={video.video}
                linkVisualizar={'/video/' + video.id}
                linkEdit={'/video/edit/' + video.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
