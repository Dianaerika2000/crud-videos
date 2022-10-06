import { Link } from 'react-router-dom';
export default function Card({ video, title, linkVisualizar, linkEdit }) {
  return (
    <div>
      <div className="card">
        <div className="ratio ratio-16x9 card-img-top">
          <iframe src={video} title="YouTube video" allowfullscreen></iframe>
        </div>
        <div className="card-body">
          <p className="card-text">{title}</p>
          <div className="row">
            <div className="col">
              <div className="btn-group" role="group">
                <Link to={linkVisualizar} className="btn btn-outline-primary">
                  Ver
                </Link>
                <Link to={linkEdit} className="btn btn-outline-primary">
                  Editar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
