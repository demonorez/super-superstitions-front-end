/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface Superstition {
  title: string;
  profile: { id: number };
  id: number;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

