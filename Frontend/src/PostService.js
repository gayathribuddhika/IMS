import axios from 'axios';

const url = 'http://localhost:8085/routes/contact';

class PostService {
    //get posts
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post
                        
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

    
}
export default PostService;