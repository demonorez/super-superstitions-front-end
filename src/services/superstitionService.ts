import * as tokenService from './tokenService'

import { Superstition } from '../types/models'

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

export { fetchSuperstitions, }