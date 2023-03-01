import { useState } from "react"
import { useLocation } from "react-router"
//types
import { Superstition } from "../../types/models"
import { NewSuperstitionFormData } from "../../types/forms"
import styles from "./UpdateSuperstition.module.css"

interface UpdateSuperstitionProps {
  handleUpdateSuperstition: (superstitionData: Superstition) => Promise<void>
}

const UpdateSuperstition = (props: UpdateSuperstitionProps): JSX.Element => {
  const location = useLocation()
  const {superstition} = location.state
  const {handleUpdateSuperstition} = props

  const [formData, setFormData] = useState<NewSuperstitionFormData>({
    title: superstition.title,
    image: superstition.image,
    description: superstition.description,
    category: superstition.category
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    const updatedSuperstition = { ...superstition, ...formData }
    await handleUpdateSuperstition(updatedSuperstition)
  }

  return (
    <main className={styles.body}>
    <form onSubmit={handleSubmit}>
    <div className={styles.inputContainer}>
      <label>Title: </label>
        <input 
          className={styles.input}
          type="text"
          value={formData.title}
          onChange={handleChange}
          name="title"
        />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Image: </label>
          <input 
            className={styles.input}
            type="text"
            value={formData.image}
            onChange={handleChange}
            name="image"
          />
        </div>
      <div className={styles.inputContainer}>
      <label>Description: </label>
        <input 
          className={styles.input}
          type="text"
          value={formData.description}
          onChange={handleChange}
          name="description"
          />
          </div>
      <div className={styles.inputContainer}>
      <label>Category: </label>
        <input
          className={styles.input}
          type="text"
          value={formData.category}
          onChange={handleChange}
          name="category"
          />
          </div>
      <button type="submit" className={styles.updateButton}>Update the Legend</button>
    </form>
    </main>
  )
}

export default UpdateSuperstition