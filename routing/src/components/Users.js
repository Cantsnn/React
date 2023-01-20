import { useEffect,useState } from 'react'
import {Link, Routes, useRoute, Outlet} from 'react-router-dom'
import axios  from "axios"
function Users() {
    const [loading, setLoading] = useState(true);
        const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res)=> setUsers(res.data))
            .catch( (e) => console.log(e))
            .finally(()=> setLoading(false))
            
    },[])
  return (
    <div>
        <h1>Users</h1>
        {loading && <div>loading...</div>}
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>

        <Outlet />
    </div>
  )
}

export default Users