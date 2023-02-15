class Users {
    constructor() {
        this.users = {};
    }

    add = (user) => {
        if(this.users[user.id])
            console.log(user.id)
        else{
            this.users[user.id] = user;
            return true;
        }
    }

    remove = (id) => {
        if(this.users[id]){
            delete this.users[id];
        }
        else throw new Error('There is not such user')
    }

    removeAll = () => {
        this.users.clear();
    }

    get = (id) => {
        if(this.users[id]) {
            return this.users[id];
        }
        else throw new Error('User not found!');
    }

    getAll = () => {
        return Object.values(this.users);
    }

    set = (user) => {
        if(!this.users[user.id])
            throw new Error ('User not found!');
        else{this.users[user.id] = user;
            return true;
        }

    }
}