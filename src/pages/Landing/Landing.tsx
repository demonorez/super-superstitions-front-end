// stylesheets
import styles from './Landing.module.css'
import { Spotify } from 'react-spotify-embed';
// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <img className={styles.img} src='superstitions.png'></img>
      <h1>Welcome, {user ? user.name : 'friend'}, to the home of all that is spooky and unknown in this world. Nothing is as interesting to us as the unknown. That is why we spend so much time trying to find the answers that we seek. Why we travel to unknown lands, have launched ships into space, ventured to the deepest depths of the sea, climbed the highest mountains. This is why myths and legends have passed down for thousands of years, throughout all of human history. We gather stories of myths and legends, conspiracies that have been proven true, or those yet still flase, from the past and from the present, to let your curious mind wander. </h1>
      <Spotify className='song' wide link="https://open.spotify.com/track/1h2xVEoJORqrg71HocgqXd?si=adb4d64c042342dd" />
    </main>
  )
}

export default Landing
