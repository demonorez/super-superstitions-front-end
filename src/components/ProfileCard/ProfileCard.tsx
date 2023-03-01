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
        <h1>{profile.name}</h1>
        <img src={profilePic} alt={`${profile.name}'s avatar`} />
      </article>
  )
}

export default ProfileCard