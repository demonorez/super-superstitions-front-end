// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// stylesheets

// types
import { AuthFormProps } from '../../types/props'
import { ChangePasswordFormData } from '../../types/forms'
import { handleErrMsg } from '../../types/validators'

const ChangePasswordForm = (props: AuthFormProps): JSX.Element => {
  const {updateMessage, handleAuthEvt} = props
  const navigate = useNavigate()

  const [formData, setFormData] = useState<ChangePasswordFormData>({
    oldPassword: '',
    newPassword: '',
    newPasswordConf: '',
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    updateMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    try {
      await authService.changePassword(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      handleErrMsg(err, updateMessage)
    }
  }

  const { oldPassword, newPassword, newPasswordConf } = formData

  const isFormInvalid = (): boolean => {
    return !(oldPassword && newPassword && newPassword === newPasswordConf)
  }

  return (
    <main className='changePassword'>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className='container'
      >
        <div className='inputContainer'>
          <label htmlFor="password" className='label'>
            Current Password
          </label>
          <input
            className="input"
            type="password"
            id="oldPassword"
            value={oldPassword}
            name="oldPassword"
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor="newPassword" className='label'>
            New Password
          </label>
          <input
            className="input"
            type="password"
            id="newPassword"
            value={newPassword}
            name="newPassword"
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor="newPasswordConf" className='label'>
            Confirm New Password
          </label>
          <input
            className="input"
            type="password"
            id="newPasswordConf"
            value={newPasswordConf}
            name="newPasswordConf"
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <button disabled={isFormInvalid()} className='button'>
            Change Password
          </button>
          <Link to="/">
            <button className='button'>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  )
}

export default ChangePasswordForm
