const formContainer=document.getElementById("formContainer")
const loginForm=document.getElementById("loginForm")
const emailId=document.getElementById("email")
const passwordId=document.getElementById("password")
const userData=document.getElementById("userData")
const userMail=document.getElementById("userMail")
const userName=document.getElementById("userName")
const userAge=document.getElementById("userAge")
const userGender=document.getElementById("userGender")
const userBirth=document.getElementById("userBirth")

const signupForm=document.getElementById("signupForm")
const signemail=document.getElementById("signemail")
const sigPassword=document.getElementById("sigPassword")
const signCheckpsd=document.getElementById("signCheckpsd")

const DataEntry=document.getElementById("DataEntry")

const enterName=document.getElementById("enterName")
const enterAge=document.getElementById("enterAge")
const enterGender=document.getElementById("enterGender")
const enterBirth=document.getElementById("enterBirth")



var sneml;
var snpsd;

let user=[
    {
        email:"charantcharant252@gmail.com",
        password:"1001",
        name:"Charan",
        age:20,
        gender:"Male",
        birthDate:"08/03/2004"
    },
    {
        email:"Abhishek@gmail.com",
        password:"1002",
        name:"Abhishek",
        age:21,
        gender:"Male",
        birthDate:"04/05/2003"  
    }
];

function login(){
    formContainer.style.display="none";
    loginForm.style.display="block";
}

function userDetail(){
    var eml = emailId.value;
    var psd= passwordId.value;
    if(eml!='' && psd!=''){
        let m=0;
        let k=0;
      for(let i=0;i<user.length;i++){
        if(eml==user[i].email){
            m=0;
            k=i;
            break;
    }
    else{
        //User NOT exist
        m=1;
        
    }
}
    userDetailValid(m,k,psd);
    }
else{
    window.alert("Enter both value");
}
    
}

function userDetailValid(m,i,psd){
    if(m==0){
        if(psd==user[i].password){
                loginForm.style.display="none";
                userData.style.display="block";
                userMail.innerText=user[i].email;
                userName.innerText=user[i].name;
                userAge.innerText=user[i].age;
                userGender.innerText=user[i].gender;
                userBirth.innerText=user[i].birthDate;
        }
        else{
            window.alert("Incorrect Password!")
        }
    }
    else
    {
        window.alert("User not exist!")
    }


}

function signUp(){
    formContainer.style.display="none";
    signupForm.style.display="block";

}

function signUpDetail(){
    sneml=signemail.value;
    signemail.value='';
    snpsd=sigPassword.value;
    sigPassword.value='';
    var snchkpsd=signCheckpsd.value;
    signCheckpsd.value='';
    if(sneml!='' && snpsd!='' &&snchkpsd!='')
    {
        let n=0;
        for (let i=0;i<user.length;i++)
        {
            if(sneml==user[i].email)
            {
                 n=0;
                 break;
                
            }
            else
            {
                n=1;
                
            }
        }
        Validate(n,snpsd,snchkpsd);
    }
    else{
        window.alert("Please enter all vlues");
    }

    

}

function Validate(val,snpsd,snchkpsd){

    if(val==0){
        window.alert("User already exist");
    }
    else
    {
        if(snpsd==snchkpsd)
        {
           
            signupForm.style.display="none";
            DataEntry.style.display="block";
            
            
        }
        else
        {
            window.alert("Passwords are not mathching");
        }
    }
}

function DataEntryButton(){
    
    var name=enterName.value;
    var age=enterAge.value;
    var gender=enterGender.value;
    var birth=enterBirth.value;
    if(name!=''&&age!=''&&gender!=''&&birth!=''){
    var newObj={
        email:sneml,
        password:snpsd,
        name:name,
        age:age,
        gender:gender,
        birthDate:birth
    }

    user.push(newObj)

    window.alert("Data saved successfully!");
    DataEntry.style.display="none";
    formContainer.style.display="block";
}
else{
    window.alert("Enter all the field!")
}
    
}

function homes(){
    userData.style.display="none";
    formContainer.style.display="block";
}

window.addEventListener('beforeunload', function (event) {
    event.preventDefault(); 
  });