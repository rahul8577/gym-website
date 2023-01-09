import { Link } from "react-router-dom"
import './notfound.css';

const NotFound = () => {
  return (
    <div className="container notfound__container">
      <h2>Page Not found</h2>
      <Link to='/' className="btn"> Go Back Home</Link>
    </div>
  )
}

export default NotFound