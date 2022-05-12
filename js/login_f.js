function log(){
    login =  document.getElementById("login").value;
    password = document.getElementById("password").value;
    data = 
        { "login":login, "password":password};
        console.log(data)
    fetch("http://127.0.0.1:5000/api/v1/user/login?method=cookie", 
        {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
                    },
        body:JSON.stringify(data)}).then(res=>{
            if(res.ok){
                return res.json()
            }else{
                alert("something is wrong")
            }
        }).then(jsonResponse=>{
            //token = localStorage.getItem('token');
            createCookie('token',jsonResponse,7);
            createCookie('login',login,7);
            location.replace("index.html")

            }
        ).catch((err) => {
            console.error(err)
            createCookie('token','0',7);
        }
        );
};
