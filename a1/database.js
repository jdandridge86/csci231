import DatabaseError from './DatabaseError.js'

const usersList = [];

function addUser (user) {
    const containsUser = usersList.some(user1 => user1.username === user.username);

    if (typeof(user) === "object" && user !== null && user !== undefined && containsUser === false) {
        const userObject = { 
            username: user.username,
            password: user.password,
        };
        
        usersList.push(userObject);
    } else {
        throw new DatabaseError(
            "addUser",
            "Invalid user object or user already exists", 
            "404"
        )
    }
}

function setPassword (username1, password) {
    //locates object in userList
    const containsUser = usersList.find(user => user.username === username1);
        
    //sets new password if user is located
    if (containsUser && username1 && password) {
        containsUser.password = password;
    }else {
        throw new DatabaseError(
            "setPassword",
            "Invalid password", 
            "404"
        )
    }
}

function getUser (username) {
    //finds user object
    const containsUser = usersList.find(user => user.username === username);
    //returns object if it's true
    if(containsUser) {
        return containsUser;
    }else {
        throw new DatabaseError(
            "getUser",
            "User does not exist", 
            "404"
        )
    }
}

function deleteUser(username) {
    //finds index of object with username provided
    const containsUserIndex = usersList.findIndex(user => user.username === username);
    //removes one element from usersList starting at found object index
    console.log(containsUserIndex)
    if(containsUserIndex != -1) {
        usersList.splice(containsUserIndex, 1);
    }else {
        throw new DatabaseError(
            "deleteUser",
            "User does not exist", 
            "404"
        )
    }
}

function getAllUsers() {
    return usersList;
}


export {addUser, setPassword, getUser, deleteUser, getAllUsers}