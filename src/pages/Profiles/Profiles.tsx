// types
import { Profile } from '../../types/models'

interface ProfileProps {
  profiles: Profile[]
}

const Profiles = (props: ProfileProps): JSX.Element => {
  
  const {profiles} = props

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map((profile: Profile) =>
        <p key={profile.id}>{profile.name}</p>
      )}
    </>
  )
}

export default Profiles
