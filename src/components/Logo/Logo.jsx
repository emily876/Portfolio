import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME}>
         <img style={{width:50}} src={process.env.PUBLIC_URL + '/icons/me.svg'}/>
         <img src={process.env.PUBLIC_URL + '/icons/react.svg'}/>
      </Link>
    </div>
  );
};

export default Logo;
