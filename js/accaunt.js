
function out(){
    eraseCookie('token')
    eraseCookie('login')

    location.replace("index.html")
}
window.onload = function(){
    if (readCookie('token') === null || readCookie('token') === 'undefined'|| readCookie('token') === '0'){
        document.querySelector("#menu_log").innerHTML = "Log in";
        document.querySelector("#menu_log").href = "login.html";
        document.querySelector("#menu_reg_ac").innerHTML = "Register";
        document.querySelector("#menu_reg_ac").href = "register.html";
    }else{
        document.querySelector("#menu_log").innerHTML = "Log out";
        document.querySelector("#menu_log").href = "index.html";
        document.querySelector("#menu_reg_ac").innerHTML = "Account";
        document.querySelector("#menu_reg_ac").href = "account.html";
    }
    authToken = readCookie('token') 
    url ="http://127.0.0.1:5000/api/v1/user/" +  readCookie('login') 
    fetch(url, 
    {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + authToken
      }}
      ).then(res=>{
        if(res.ok){
            return res.json()
        }else{
            alert("something is wrong")
        }
    }).then(data =>{
        //token = localStorage.getItem('token');
        console.log(data)
        document.querySelector("#Username").placeholder = data["login"];
        document.querySelector("#firstName").placeholder = data["firstName"];
        document.querySelector("#lastName").placeholder = data["lastName"];
        document.querySelector("#phone").placeholder = data["phone"];
        document.querySelector("#email").placeholder = data["email"];
        //document.querySelector("#firstName").placeholder = data["firstName"];
        }
    ).catch((err) => {
        console.error(err)
    }
    );
}

function del(){
    authToken = readCookie('token') 
    url ="http://127.0.0.1:5000/api/v1/user/" +  readCookie('login') 
    fetch(url, 
    {
    method: 'DELETE',
    headers: {
        'Authorization': 'Bearer ' + authToken
      }}
      ).then(res=>{
        if(res.ok){
            alert("delete successful")
            eraseCookie('token')
            eraseCookie('login')
            location.replace("index.html")
            return res.json()
        }else{
            alert("something is wrong")
        }
    }).catch((err) => {
        console.error(err)

    }
    );
}
