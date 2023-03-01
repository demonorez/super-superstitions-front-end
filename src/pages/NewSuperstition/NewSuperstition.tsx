import { useState } from "react"

import styles from "./NewSuperstition.module.css"

interface NewSuperstitionProps {
  handleNewSuperstition: (superstition: SuperstitionFormData) => void
}

interface SuperstitionFormData {
  title: string;
  description: string;
  category: string;
}

const NewSuperstition: React.FC<NewSuperstitionProps> = (props) => {
  const [form, setForm] = useState<SuperstitionFormData>({
    title: '',
    description: '',
    category: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    props.handleNewSuperstition(form)
    setForm({
      title: '',
      description: '',
      category: ''
    })
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
      <label>Title: 
        <input 
          type="text"
          value={form.title}
          onChange={handleChange}
          name="title"
        />
      </label>
      </div>
      <div className={styles.inputContainer}>
      <label>Description: 
        <input 
          type="text"
          value={form.description}
          onChange={handleChange}
          name="description"
          />
      </label>
      </div>
      <div className={styles.inputContainer}>
      <label>Category: 
        <input
          type="text"
          value={form.category}
          onChange={handleChange}
          name="category"
          />
      </label>
      </div>
      <button type="submit">Create Superstition</button>
    </form>
  )
}

export default NewSuperstition