/*class Users {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}*/

const usersList = [];

function addUser (username) {
    const userObject = { 
        username: username,
        password: "",
    };
    //Adds user object to userList with empty password
    usersList.push(userObject);
}

function setPassword (username1, password) {
    //locates object in userList
    const containsUser = usersList.find(user => user.username === username1);
    
    //sets new password if user is located
    if (containsUser) {
        containsUser.password = password;
    }
}

function getUser (username) {
    const containsUser = usersList.find(user => user.username === username);
    if(containsUser) {
        return containsUser;
    }
}





export default {addUser, setPassword, getUser, deleteUser, getAllUsers}