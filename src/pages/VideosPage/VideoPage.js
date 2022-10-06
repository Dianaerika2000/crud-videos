import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../config/site.config';

export default function VideoPage() {
  // states
  const [video, setVideo] = useState({});
  // init
  const { videoId } = useParams();
  useEffect(() => {
    api
      .get('https://example-data.draftbit.com/videos/' + videoId)
      .then((response) => {
        setVideo(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // render
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="ratio ratio-16x9 card-img-top">
            <iframe src={video.video} title={video.title} allowfullscreen></iframe>
          </div>
        </div>
        <div className="col">
          <h2>{video.title}</h2>
          <p>Autor: {video.authorName}</p>
          <p>{video.description}</p>
        </div>
      </div>
    </div>
  );
}
