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



const logo = document.getElementById('menu_log')

logo.addEventListener("click", () =>{
    if (document.querySelector("#menu_log").innerHTML === "Log out"){
        eraseCookie('token')
        eraseCookie('username')
        location.replace("index.html")
    }
});

