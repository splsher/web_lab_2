function register(){
    username =  document.getElementById("username").value;
    email = document.getElementById("email").value;
    password =  document.getElementById("password").value;
    city = document.getElementById("city").value;
    photo =  document.getElementById("photo").value;
    user_status = 'User'
    
    data = 
        {  "username":username, "email":email,"password":password, "city":city, "photo":photo, "user_status":user_status};

    fetch("http://127.0.0.1:5000/signup",
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