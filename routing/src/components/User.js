import { useParams, Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
 
function User() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState({})

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUser(res.data))
            .catch((e) => console.log(e))
            .finally(()=> setLoading(false))
    },[id])

    return (
        <div>
            <h1>User Detail</h1>
         {loading && <div>Loading...</div>}
         {!loading && <code>{JSON.stringify(user)}</code>}

            <br/>
            <br/>
           <Link to={`/users/${parseInt(id)+1}`}>Next User {parseInt(id)+1}</Link>

           <Outlet />
        </div>
    )
}

export default User