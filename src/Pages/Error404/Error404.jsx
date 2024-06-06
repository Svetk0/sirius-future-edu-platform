import { Link } from "react-router-dom";
import styles from './Error404.module.scss';

const Error404 = () => { 
  console.log('-------  error page -------');
  return (
    <>Error404
     <div className="text">
      <h2>404</h2>
      <p>Страница не найдена :( </p>
      <Link to="/login" className="link">Вернуться на главную</Link>
    </div>
    </>
    
  )
}


export default Error404;