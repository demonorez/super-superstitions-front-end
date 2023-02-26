// types
import { Profile } from '../../types/models'

import ProfileCard from '../../components/ProfileCard/ProfileCard'

interface ProfileProps {
  profiles: Profile[]
}

const Profiles = (props: ProfileProps): JSX.Element => {
  
  const {profiles} = props

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    <main className='profileList'>
      {profiles.map((profile: Profile) =>
        <ProfileCard key={profile.id} profile={profile} />
      )}
    </main>
  )
}

export default Profiles
