function user(email,password,first,last,age,address,phone,pay,color){
    this.email=email;
    this.password=password;
    this.first=first;
    this.last=last;
    this.age=age;
    this.address=address;
    this.phone=phone;
    this.pay=pay;
    this.color=color;
}
function clearInput(){
    $("input").val("");
    $("select").val("");
    $("#txtPassword").css("background-color","white");
}
function validation(user){
    let valid=true;

    if(user.email==""){
        valid=false;
        $("#txtEmail").addClass("alert-error");
    }
    if(user.password==""){
        valid=false;
        $("#txtPassword").addClass("alert-error");
    }
    if(user.first==""){
        valid=false;
        $("#txtFirst").addClass("alert-error");
    }
    if(user.last==""){
        valid=false;
        $("#txtLast").addClass("alert-error");
    }
    if(user.age==""){
        valid=false;
        $("#txtAge").addClass("alert-error");
    }
    if(user.address==""){
        valid=false;
        $("#txtAddress").addClass("alert-error");
    }
    if(user.phone==""){
        valid=false;
        $("#txtPhone").addClass("alert-error");
    }
    if(user.pay==null){
        valid=false;
        $("#txtPay").addClass("alert-error");
    }
    if(user.color=="#000000"){
        valid=false;
        $("#txtColor").addClass("alert-error");
    }

    return valid;
}

function validatePass(){
    let inputPass=$("#txtPassword");
    let password = inputPass.val();
    if(password.length<6){
        inputPass.css("background-color","red");
    }else{
        inputPass.css("background-color","green");
    }
}

function register(){
    let inputEmail=$("#txtEmail").val();
    let inputPass=$("#txtPassword").val();
    let inputFirst=$("#txtFirst").val();
    let inputLast=$("#txtLast").val();
    let inputAge=$("#txtAge").val();
    let inputAdd=$("#txtAddress").val();
    let inputPhone=$("#txtPhone").val();
    let inputPay=$("#txtPay").val();
    let inputColor=$("#txtColor").val();

    let newUser = new user(inputEmail,inputPass,inputFirst,inputLast,inputAge,inputAdd,inputPhone,inputPay,inputColor);

    if(validation(newUser)){
        saveUser(newUser);

    }

    clearInput();

}

function init(){
    $("#sub").click(register);
    $("#txtPassword").keyup(validatePass);
}
window.onload=init;