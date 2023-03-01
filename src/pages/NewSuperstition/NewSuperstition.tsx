import { useState } from "react"

import styles from "./NewSuperstition.module.css"

interface NewSuperstitionProps {
  handleNewSuperstition: (superstition: SuperstitionFormData) => void
}

interface SuperstitionFormData {
  title: string;
  image: string;
  description: string;
  category: string;
}

const NewSuperstition: React.FC<NewSuperstitionProps> = (props) => {
  const [form, setForm] = useState<SuperstitionFormData>({
    title: '',
    image: '',
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
      image: '',
      description: '',
      category: ''
    })
  }

  return (
    <main className={styles.bodyImage}>
      <img src='favifaery.png' className={styles.image}/>
      <div>
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
          <label className={styles.label}>Image: </label>
          <input 
            className={styles.input}
            type="text"
            value={form.image}
            onChange={handleChange}
            name="image"
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
        <button type="submit" className={styles.button}>Create Superstition</button>
      </form>
      </div>
    </main>
  )
}

export default NewSuperstition