import {BsBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './index.css'

const JobCard = props => {
  const {jobDetails} = props

  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    id,
  } = jobDetails

  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="job-card-item">
        <div className="Logo-and-title-container">
          <img src={companyLogoUrl} alt={title} className="company-logo" />
          <div className="title-and-rating-container">
            <h1 className="company-title">{title}</h1>
            <div className="rating-and-star-container">
              <AiFillStar className="star" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="location-job-type-and-salary-container">
          <div className="location-and-job-type-container">
            <div className="location-container">
              <MdLocationOn className="location-icon" />
              <p className="location">{location}</p>
            </div>
            <div className="location-container">
              <BsBriefcaseFill className="location-icon" />
              <p className="location">{employmentType}</p>
            </div>
          </div>
          <p className="salary-package">{packagePerAnnum}</p>
        </div>
        <hr className="line" />
        <h1 className="job-description-heading">Description</h1>
        <p className="job-description">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCard
