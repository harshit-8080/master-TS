interface IPost {
    title: string;
    id: number;
    description: string;
}

interface IUser {
    id: number;
    name: string;
    age: number;
}

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// };

// const fetchUsersData = async (path: string): Promise<IUser[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// };

const fetchData = async <Results>(path:string):Promise<Results> => {

    const response = await fetch(`http://example.com${path}`);
    return response.json();
}

(async () => {
    // const posts = await fetchPostData('/posts');
    // posts[0].id

    // const users = await fetchUsersData("/users");
    // users[0].id

    // const users = await fetchData<IUser[]>("/users");
    // users[0].

    // const posts = await fetchData<IPost[]>("/posts");
    // posts[0].
})();