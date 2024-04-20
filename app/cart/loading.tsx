import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './loading.scss';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
  return (
    <section className="loading">
      <FontAwesomeIcon icon={faSpinner} className='icon' />
    </section>
  );
}

export default Loading;