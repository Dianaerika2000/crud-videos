import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Patito from '../../components/Patito/Patito';

/**
 * HomePage
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col my-3">
          <Button />
          <Patito />
        </div>
      </div>
    </div>
  );
}
