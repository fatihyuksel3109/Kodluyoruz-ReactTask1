import axios from "axios";

 async function getData(userId) {
    const {data: user1} =await axios("https://jsonplaceholder.typicode.com/users/"+ userId);

    const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts?id="+ userId);

    console.log(user1,post1);

    
};


export default getData;