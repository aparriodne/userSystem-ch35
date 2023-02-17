function login(){
    let pass = $("#txtPassword").val();
    let userName = $("#txtUserName").val();
    let flag = true;
    let users = readUsers();

    for(i=0;i<users.length;i++){
        let user = users[i];
        if(pass==user.password && userName==user.email){
            window.location="user.html";
        }else{
            flag=false;
        }
    }
    if(!flag){

        $("#alert-error").removeClass("hide");
        setTimeout(function(){
            $("#alert-error"),addClass("hide");
        },3000);
    }
}