import { ReactTyped } from 'react-typed';
import './index.css';

function NotFound(): JSX.Element {
  return (
    <div className="not-found-container">
      <ReactTyped strings={['404 - Page Not Found', 'Oops! It seems like you’ve lost your way.']} typeSpeed={50} backDelay={1000} loop={true} className="not-found-message" />
    </div>
  );
};

export default NotFound;
