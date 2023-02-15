class Posts {
    constructor() {
        this.posts = {};
    }

    add = (post) => {
        if(this.posts[post.id]){
             throw new Error('Post with this ID already exists')
        }
        else{
            this.posts[post.id] = post;
            return true;
        }
    }

    getAll = () => {
        return Object.values(this.posts);
    }
}