import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import "./App.css";

type User = {
  id: number;
  username: string;
};

type fibFunc = (n:number) => number

const fib: fibFunc = (n) =>{

    if(n < 2 ) return n
  return fib(n - 1) + fib(n-2)
}

const myNum = 32

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log('mounting')
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await res.json();

      setUsers(data);

      return data;
    };

    fetchUsers();
  }, []);

    const countFunction = useCallback((increase:number) => {
      setCount((prev) => prev + increase)
    }, [])

    const result = useMemo<number>( () => fib(myNum),[])

  return (
    <>
      <h1>Typescript + React Hooks</h1>
      <h3>{count}</h3>
      <button onClick={() => countFunction(2)}>Increase 2</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <ul>
        {users ? users.map((user) => <li key={user.id}>{user.username}</li>) : null}
      </ul>
      <h2>{result}</h2>
      <input type="text" name="userName" id="userName" ref={inputRef} />
      <p>{inputRef?.current?.value}</p>
      
    </>
  );
}

export default App;
