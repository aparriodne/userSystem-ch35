function saveUser(user){
    let oldUsers = readUsers();
    oldUsers.push(user);
    let val = JSON.stringify(oldUsers);
    console.log(val);//string
    localStorage.setItem("users",val);//sending to localstorage
}

function readUsers(){
    let users = localStorage.getItem("users");//get from localstorage
    console.log(users);// string
    if(!users){// not user

        return[];//create array
    }else{//contains user
        let listUsers = JSON.parse(users)//parse into array
        console.log(listUsers);//array
        return listUsers;
    }
}