import * as tokenService from './tokenService'

import { Superstition } from '../types/models'

import { NewSuperstitionFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/superstitions`

async function fetchSuperstitions(): Promise<Superstition[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Superstition[]
  } catch (error) {
    throw error
  }
}

async function NewSuperstion(formData: NewSuperstitionFormData): Promise<Superstition> {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
    const superstition = await res.json()
    return superstition as Superstition
  } catch (error) {
    throw error
  }
}

export { fetchSuperstitions, NewSuperstion}