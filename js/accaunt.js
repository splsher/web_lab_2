function out(){
    eraseCookie('token')
    eraseCookie('login')

    location.replace("index.html")
}
window.onload = function(){

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
            debugger
            return res.json()
        }else{
            debugger
            alert("something is wrong")
        }
    }).then(data =>{
        //token = localStorage.getItem('token');
        console.log(data)
        document.querySelector("#username").placeholder = data["login"];
        document.querySelector("#email").placeholder = data["email"];
        document.querySelector("#password").placeholder = data["password"];
        document.querySelector("#city").placeholder = data["city"];
        document.querySelector("#photo").placeholder = data["photo"];
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
