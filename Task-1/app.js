import axios from "axios";
const user_url = "https://jsonplaceholder.typicode.com/users/";
const post_url = "https://jsonplaceholder.typicode.com/posts?userId="

const getUser = async (user_id) =>{
    const { data: user } = await axios(user_url + user_id);
    return user;
}
const getPost = async (user_id) => {
    const { data: post } = await axios(post_url + user_id);
    return post;
}

async function getData(user_id) {
    const user = await getUser(user_id);

    const post = await getPost(user_id);

    console.log( {user,  post} );
}

export default getData;