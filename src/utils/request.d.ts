

export type TQueryType = {
  // token?: string
  [prop: string]: TAny
}

export type TRequestType = 'get' | 'post'

export type TParams = TDict<TAny> | undefined | null

/* interface User {
  id: number;
  age: number;
  name: string;
} */

// Partial<User> 相当于 { id?: number; age?: number; name?: string; }

// Pick<User, "id" | "age"> 相当于 { id: number; age: number; }
