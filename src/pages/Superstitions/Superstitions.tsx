import { Superstition } from "../../types/models";

interface SuperstitionProps {
  superstitions: Superstition[]
}

const Superstitions = (props: SuperstitionProps): JSX.Element => {

  const {superstitions} = props

  if(!superstitions.length) return <p>No Superstitions Exist</p>

  return (
    <>
      <h1>Superstitions</h1>
      {superstitions.map((superstition: Superstition) => 
        <p key={superstition.id}> {superstition.title}</p>
      )}
    </>
  )
}

export default Superstitions