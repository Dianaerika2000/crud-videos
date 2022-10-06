import { useEffect, useState } from 'react';
import { api } from '../../config/site.config';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';

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
      <div className="row align-items-center justify-content-between my-3">
        <div className="col">
          <h2>Lista de videos</h2>
        </div>
        <div className="col text-end">
          <Link to={'/video/create/'} className="btn btn-outline-primary">Nuevo video <i class="bi bi-plus-square-fill"/></Link>
        </div>
      </div>
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
