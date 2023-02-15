//То что является промежуточным звеном между хранилищем и бизнес-логикой
class Controller {
    constructor(users, posts) {
        this.users = users;
        this.posts = posts;
    }
    // Только контроллер имеет право обращатся к методам хранилища
    // Для полноценной работы нужно сделать проверку является ли user объектом класса users
    createUser = (user) =>{
        return this.users.add(user)
    }
    removeUser = (id) =>{
        return this.users.remove(id);
    }
    getUserById = (id) =>{
        return this.users.get(id);
    }

    processUsers(userProcessor){
        this.users.getAll().forEach(userProcessor);
    }

    createPost = (post) =>{
        return this.posts.add(post)
    }

    processPosts(postProcessor){
        this.posts.getAll().forEach(postProcessor);
    }

}