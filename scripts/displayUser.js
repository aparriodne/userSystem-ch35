function display(userArray){
    const TABLE=$("#users");
    let tr = "";
    for(let i=0;i<userArray.length;i++){
        let use = userArray[i];
        tr=`
        <tr>
            <td>${use.email}</td>
            <td>${use.password}</td>
            <td>${use.first}</td>
            <td>${use.last}</td>
            <td>${use.age}</td>
            <td>${use.address}</td>
            <td>${use.phone}</td>
            <td>${use.pay}</td>
            <td style="background-color:${use.color}"></td>
        </tr>`;
        TABLE.append(tr);
    }
}

function init(){
    console.log("Listing of Users...")
    let users = readUsers();
    display(users);
}
window.onload=init;