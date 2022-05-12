
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
