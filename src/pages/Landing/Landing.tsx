// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <img src='superstitions.png'></img>
      <h1>hello, {user ? user.name : 'friend'}, to the home of all that is spooky and unknown in this world. Be it fact or fiction, we hold these stories with some semblance of truth at all times. </h1>
    </main>
  )
}

export default Landing
