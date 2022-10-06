import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../config/site.config';

export default function VideoEditPage() {
  let navigate = useNavigate();
  // states
  const [video, setVideo] = useState({
    title: '',
    description: '',
    video: '',
    authorName: '',
  });
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

  // handle
  const handleClickSubmit = () => {
    api
      .put('https://example-data.draftbit.com/videos/' + videoId, video)
      .then((response) => {
        navigate('/video/' + response.data.id);
      })
      .catch((error) => console.log(error));
  };
  // render
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Editar Video</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
          }}>
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input
                type="text"
                className="form-control"
                value={video.title}
                onChange={(e) => {
                  setVideo({ ...video, title: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea
                className="form-control"
                value={video.description}
                onChange={(e) => {
                  setVideo({ ...video, description: e.target.value });
                }}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Autor</label>
              <input
                type="text"
                className="form-control"
                value={video.authorName}
                onChange={(e) => {
                  setVideo({ ...video, authorName: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Link del video</label>
              <textarea
                className="form-control"
                value={video.video}
                onChange={(e) => {
                  setVideo({ ...video, video: e.target.value });
                }}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleClickSubmit}>
              Editar video
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
