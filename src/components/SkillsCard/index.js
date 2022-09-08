import './index.css'

const SkillsCard = props => {
  const {skillDetails} = props

  const {imageUrl, name} = skillDetails

  return (
    <li className="skill-item">
      <div className="skills-container">
        <img src={imageUrl} alt={name} className="skill-logo" />
        <p className="skill-name">{name}</p>
      </div>
    </li>
  )
}

export default SkillsCard
