//types
import { Profile } from '../../types/models'

import { Link } from 'react-router-dom'

interface ProfileCardProps {
  profile: Profile
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const {profile} = props

  const profilePic = profile.photo

  return (
    <Link to={`/profiles/${profile.id}`}>
      <article>
        <img src={profilePic} alt={`${profile.name}'s avatar`} />
        <h1>{profile.name}</h1>
      </article>
    </Link>
  )
}

export default ProfileCard