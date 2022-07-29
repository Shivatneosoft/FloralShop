let fnameNode,ageNode,mobileNode,emailNode,buildNode,cityNode,areaNode,districtNode,pincodeNode,stateNode,flowerNode,quantityNode;
let errorNode1,errorNode2,errorNode3,errorNode4,errorNode5,errorNode6,errorNode7,errorNode8,errorNode9,errorNode10,errorNode11;

$(function () {
    fnameNode=$("#fname");
    ageNode=$("#age");
    mobileNode=$("#contact");
    emailNode=$("#mail");
    buildNode=$("#build");
    areaNode=$("#area");
    cityNode=$("#city");
    districtNode=$("#district");
    pincodeNode=$("#pincode");
    stateNode=$("#state :selected").text();
    flowerNode=$("#flower :selected").text();
    quantityNode=$("#quantity");
    errorNode1=$("#error1");
    errorNode2=$("#error2");
    errorNode3=$("#error3");
    errorNode4=$("#error4");
    errorNode5=$("#error5");
    errorNode6=$("#error6");
    errorNode7=$("#error7");
    errorNode8=$("#error8");
    errorNode9=$("#error9");
    errorNode10=$("#error10");
    errorNode11=$("#error11");
    errorNode12=$("#error12");

    let array=[errorNode1,errorNode2,errorNode3,errorNode4,errorNode5,errorNode6,errorNode7,errorNode8,errorNode9,errorNode10,errorNode11];
    for(let node of array){
        node.css({color:"red"});
    }

    fnameNode.blur(()=>validate1());
    ageNode.blur(()=>validate2());
    mobileNode.blur(()=>validate3());
    emailNode.blur(()=>validate4());
    buildNode.blur(()=>validate5());
    areaNode.blur(()=>validate6());
    cityNode.blur(()=>validate7());
    districtNode.blur(()=>validate8());
    pincodeNode.blur(()=>validate9());
    state.blur(()=>validate10());
    flower.blur(()=>validate11());
    quantityNode.blur(()=>validate12);
    $("#regForm").submit(()=>validateForm());
});

function validateForm(){
    let v1=validate1();
    let v2=validate2();
    let v3=validate3();
    let v4=validate4();
    let v5=validate5();
    let v6=validate6();
    let v7=validate7();
    let v8=validate8();
    let v9=validate9();
    let v10=validate10();
    let v11=validate11();
    let v12=validate12();
    return (v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8 && v9 && v10 && v11 && v12); 
}

function validate1(){
    let fname=fnameNode.val();
    let regex=new RegExp("^[A-Za-z/ /g]*$");
    errorNode1.html("");
    if(fname===''){
        errorNode1.html("<small>First name is required</small>");
        fnameNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(fname)==false){
        errorNode1.html("<small>First name must have only letters</small>");
        fnameNode.css({border:"2px solid red"});
        return false;
    }
    else{
        fnameNode.css({border:"2px solid green"});
        return true;
    }
}
function validate2(){
    let age=ageNode.val();
    errorNode2.html("");
    if(age===''){
        errorNode2.html("<small>Age is required</small>");
        ageNode.css({border:"2px solid red"});
        return false;
    }
    else if(age<20 || age>60){
        errorNode2.html("<small>Age must be between 20 to 60</small>");
        ageNode.css({border:"2px solid red"});
        return false;
    }
    else{
        ageNode.css({border:"2px solid green"});
        return true;
    }
}
function validate3(){
    let mobile=mobileNode.val();
    errorNode3.html("");
    let regex=new RegExp("^[0-9]{10}$");
    if(mobile===''){
        errorNode3.html("<small>Mobile number is required</small>");
        mobileNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(mobile)===false){
        errorNode3.html("<small>Mobile number must be 10 digits number</small>");
        mobileNode.css({border:"2px solid red"});
        return false;
    }
    else{
        mobileNode.css({border:"2px solid green"});
        return  true;
    }

}
function validate4(){
    let email=emailNode.val();
    errorNode4.html("");
    if(email===''){
        errorNode4.html("<small>Email is required</small>");
        emailNode.css({border:"2px solid red"});
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode4.html("<small>Please enter valid email</small>");
        emailNode.css({border:"2px solid red"});
        return false;
    }
    else{
        emailNode.css({border:"2px solid grren"});
        return true;
    }
}
function validate5() {
    let build=buildNode.val();
    let regex=new RegExp("^[A-Za-z0-9/ /g]*$");
    errorNode5.html("");
    if (build==='') {
        errorNode5.html("<small>Address is required</small>");
        buildNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(build)==false){
        errorNode5.html("<small>This input should only contain letters and Number</small>");
        buildNode.css({border:"2px solid red"});
        return false;
    }
    else{
        buildNode.css({border:"2px solid green"});
        return true;
    }    
}
function validate6() {
    let area=areaNode.val();
    let regex=new RegExp("^[A-Za-z0-9/ /g]*$");
    errorNode6.html("");
    if (area==='') {
        errorNode6.html("<small>Area Name is required</small>");
        areaNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(area)==false){
        errorNode6.html("<small>Area Name should only contain letters and Number</small>");
        areaNode.css({border:"2px solid red"});
        return false;
    }
    else{
        areaNode.css({border:"2px solid green"});
        return true;
    }    
}
function validate7() {
    let city=cityNode.val();
    let regex=new RegExp("^[A-Za-z/ /g]*$");
    errorNode7.html("");
    if (city==='') {
        errorNode7.html("<small>City Name is required</small>");
        cityNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(city)==false){
        errorNode7.html("<small>City Name should only contain letters</small>");
        cityNode.css({border:"2px solid red"});
        return false;
    }
    else{
        cityNode.css({border:"2px solid green"});
        return true;
    }    
}
function validate8() {
    let district=districtNode.val();
    let regex=new RegExp("^[A-Za-z]*$");
    errorNode8.html("");
    if (district==='') {
        errorNode8.html("<small>District Name is required</small>");
        districtNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(district)==false){
        errorNode8.html("<small>District Name should only contain letters</small>");
        districtNode.css({border:"2px solid red"});
        return false;
    }
    else{
        districtNode.css({border:"2px solid green"});
        return true;
    }    
}
function validate9(){
    let pincode=pincodeNode.val();
    errorNode9.html("");
    let regex=new RegExp("^[0-9]{6}$");
    if(pincode===''){
        errorNode9.html("<small>Pincode is required</small>");
        pincodeNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(pincode)===false){
        errorNode9.html("<small>Pincode must be 6 digits number</small>");
        pincodeNode.css({border:"2px solid red"});
        return false;
    }
    else{
        pincodeNode.css({border:"2px solid green"});
        return  true;
    }
}
function validate10() {
    let state = $("#state :selected").text();
    errorNode10.html("")
    if (state==="Select State") {
        // console.log(stateNode);
        errorNode10.html("<small>State is required</small>")
        return false;
    }
    else{
        return true;
    }
}
function validate11(){
    let flower=$("#flower :selected").text();
    errorNode11.html("")
    if (flower==="Select Flower") {
        errorNode11.html("<small>Flower selection is necessary</small>");
        return false;
    }
    else{
        return true;
    }
}
function validate12(){
    let quantity=quantityNode.val();
    errorNode12.html("");
    if(quantity===''){
        errorNode12.html("<small>Flower quantity is required</small>").css({color:'red'});
        quantityNode.css({border:"2px solid red"});
        return false;
    }
    else if(quantity<20 || quantity>100){
        errorNode12.html("<small>Age must be between 20 to 100</small>").css({color:'red'});
        quantityNode.css({border:"2px solid red"});
        return false;
    }
    else{
        ageNode.css({border:"2px solid green"});
        return true;
    }
}

function total() {
    let quantity = $("#quantity")
    let FC=document.getElementById("FC");
    let TC=document.getElementById("TC");
    let res=parseInt(quantity.val())*20;
    let result="Your Flower Cost is "+res;
    FC.textContent=result;
    res = parseInt(res)+200
    result="Your Total Cost is "+res;
    TC.textContent=result
}