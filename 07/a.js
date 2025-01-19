// 7a.
// Implement a basic user authentication system using Map. Each user has a unique username (as key) and a 
// password (as value). Write functions to:
// 1. Register a new user.
// 2. Delete a user.
// 3. Update a user's password.
// 4. Authenticate a user by checking if a username-password combination exists.
// 5. List all registered usernames using an iterator

class UserAuth{
    constructor(){
        this.users = new Map();
    }

    register(username,password){
        if(this.users.has(username)){
            console.log("User already exists");
            return false;
        }
        this.users.set(username,password);
        console.log(`User ${username} registered successfully`);
        return true;
    }

    deleteUser(username){
        if(!this.users.has(username)){
            console.log("User does not exist");
            return false;
        }
        this.users.delete(username);
        console.log(`User ${username} deleted successfully`);
        return true;
    }

    updatePassword(username,newPassword){
        if(!this.users.has(username)){
            console.log("User does not exist");
            return false;
        }
        this.users.set(username,newPassword);
        console.log(`Password for ${username} updated successfully`);
        return true;
    }

    authenticate(username,password){
        if(this.users.get(username) === password){
            console.log("Authentication successfully");
            return true;
        }
        else{
            console.log("Authentication failed");
            return false;
        }
    }

    listUsers(){
        console.log("List of registered users");
        for(let username of this.users.keys()){
            console.log(username);
        }
    }
}

const auth = new UserAuth();

auth.register("user1", "password1");
auth.register("user2", "password2");

auth.deleteUser("user1");

auth.updatePassword("user2", "newPassword2");

auth.authenticate("user2", "newPassword2");

auth.listUsers();