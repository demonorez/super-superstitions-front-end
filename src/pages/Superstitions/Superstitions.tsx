import { Superstition } from "../../types/models";

interface SuperstitionProps {
  superstitions: Superstition[]
}

const Superstitions = (props: SuperstitionProps): JSX.Element => {

  const {superstitions} = props

  if(!superstitions.length) return <p>No Superstitions Exist</p>

  return (
    <>
    <main>
      {superstitions.map((superstition: Superstition) => 
        <p key={superstition.id}> {superstition.title}</p>
      )}
    </main>
    </>
  )
}

export default Superstitions