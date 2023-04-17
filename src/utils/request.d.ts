
export type TRequestType = 'get' | 'post'

/* interface User {
  id: number;
  age: number;
  name: string;
} */

// Partial<User> 相当于 { id?: number; age?: number; name?: string; }

// Pick<User, "id" | "age"> 相当于 { id: number; age: number; }
