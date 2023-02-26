//types
import { Profile } from '../../types/models'

interface ProfileCardProps {
  profile: Profile
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const {profile} = props

  const profilePic = profile.photo

  return (
    <article>
      <img src={profilePic} alt={`${profile.name}'s avatar`} />
      <h1>{profile.name}</h1>
    </article>
  )
}

export default ProfileCard