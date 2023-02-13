// create a constructor for the users
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
    inputEmail=$("#txtEmail").val("");
    inputPass=$("#txtPassword").val("");
    inputFirst=$("#txtFirst").val("");
    inputLast=$("#txtLast").val("");
    inputAge=$("#txtAge").val("");
    inputAdd=$("#txtAddress").val("");
    inputPhone=$("#txtPhone").val("");
    inputPay=$("#txtPay").val("--pay method--");
    inputColor=$("#txtColor").val("");


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

    console.log(newUser);
}

function init(){
    $("#invisable").click(register);
    $("#invisable").click(clearInput);
}
window.onload=init;