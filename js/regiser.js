function register(){
    login1 =  document.getElementById("login1").value;
    firstName = document.getElementById("firstName").value;
    lastName =  document.getElementById("lastName").value;
    phone = document.getElementById("phone").value;
    email =  document.getElementById("email").value;
    password = document.getElementById("password1").value;
    user_status = 'User'
    
    data = 
        {  "firstName":firstName, "lastName":lastName,"login":login1, "email":email, "phone":phone, "password":password, "user_status":user_status};

    fetch("http://127.0.0.1:5000/api/v1/user", 
    {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
                },
    body:JSON.stringify(data)}).then(res=>{
        if(res.ok){
            alert("registration successful")
            return res.json()
        }else{
            alert("something is wrong")
        }
    }).catch((err) => {
        console.error(err)
    }
    );
}