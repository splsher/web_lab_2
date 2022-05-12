
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
//createCookie('token','czsxcz',7);
//eraseCookie('token')
//console.log(readCookie('token'))

window.onload = function(){
     
    if (readCookie('token') === null || readCookie('token') === 'undefined'|| readCookie('token') === '0'){
        document.querySelector("#menu_log").innerHTML = "Log in";
        document.querySelector("#menu_log").href = "login.html";
        document.querySelector("#menu_reg_ac").innerHTML = "Register";
        document.querySelector("#menu_reg_ac").href = "register.html";
        console.log(readCookie('token'))
    }else{
        document.querySelector("#menu_log").innerHTML = "Log out";
        document.querySelector("#menu_log").href = "index.html";
        document.querySelector("#menu_reg_ac").innerHTML = "Account";
        document.querySelector("#menu_reg_ac").href = "account.html";
        console.log(readCookie('token'))
    }
}

const logo = document.getElementById('menu_log')

logo.addEventListener("click", () =>{
    if (document.querySelector("#menu_log").innerHTML === "Log out"){
        eraseCookie('token')
        eraseCookie('login')
        location.replace("index.html")
    }
});

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
