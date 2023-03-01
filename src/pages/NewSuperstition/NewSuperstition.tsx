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
    <main className={styles.bodyImage}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
        <label className={styles.label}>Title: </label>
          <input 
            className={styles.input}
            type="text"
            value={form.title}
            onChange={handleChange}
            name="title"
          />
        </div>
        <div className={styles.inputContainer}>
        <label>Description: </label>
          <input 
            className={styles.input}
            type="text"
            value={form.description}
            onChange={handleChange}
            name="description"
            />
        </div>
        <div className={styles.inputContainer}>
        <label>Category: </label>
          <input
            className={styles.input}
            type="text"
            value={form.category}
            onChange={handleChange}
            name="category"
            />
        </div>
        <button type="submit">Create Superstition</button>
      </form>
    </main>
  )
}

export default NewSuperstition