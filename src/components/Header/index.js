import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="nav-bar-container">
      <div className="navbar-content">
        <div className="nav-bar-larger-devices-container">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="app-logo"
            />
          </Link>
          <ul className="home-and-jobs-options-container">
            <li className="list-item">
              <Link to="/" className="link-item">
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link to="/jobs" className="link-item">
                Jobs
              </Link>
            </li>
          </ul>
          <button className="logout-btn" type="button" onClick={onClickLogout}>
            Logout
          </button>
        </div>
        <div className="navbar-header-small-devices-container">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="small-app-logo"
            />
          </Link>
          <ul className="options-icons-container">
            <li className="option-item">
              <Link to="/">
                <AiFillHome className="option-image" />
              </Link>
              <Link to="/jobs">
                <BsBriefcaseFill className="option-image" />
              </Link>
            </li>
            <button
              type="button"
              className="small-devices-logout-btn"
              onClick={onClickLogout}
            >
              <FiLogOut className="option-image" />
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)
