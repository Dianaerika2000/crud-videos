import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
          <p>
            <Link to={'/video/edit/' + videoId} className="btn btn-outline-primary">
              <i class="bi bi-pencil-square"></i>Editar
            </Link>
          </p>
          <p>
            <Link to="/videos" className="btn btn-outline-primary">
              <i class="bi bi-list-columns-reverse"></i> Listado de Video
            </Link>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
    </div>
  );
}
