//types
import { Superstition } from "../../types/models"

interface SuperstitionProps{
  superstition: Superstition
}

const SuperstitionCard = (props: SuperstitionProps): JSX.Element => {
  const {superstition} = props

  return (
    <article>
      <h1>{superstition.title}</h1>
    </article>
  )
}

export default SuperstitionCard