var listEl = [];
listEl["name"] = false;
listEl["surname"] = false;
listEl["login"] = false;
listEl["birthday"] = false;
listEl["email"] = false;
listEl["password"] = false;
listEl["passwordRepeat"] = false;

function loginPressed() {
    var login = document.forms["registration"].elements["login"].value;
    if (/^[A-z]\w{3}\w*$/.test(login)) {
        document.getElementById("loginHelper").style.height = "0%";
        document.getElementById("loginHelper").style.fontSize = "0px";
        document.getElementById("login").style.background = "url('yes.png') round";
    } else {
        document.getElementById("login").style.background = "url('no.png') round";
        document.getElementById("loginHelper").style.height = "40px";
        document.getElementById("loginHelper").style.fontSize = "12px";
    }
}

function loginUnfocused() {
    document.getElementById("loginHelper").style.height = "0%";
    document.getElementById("loginHelper").style.fontSize = "0px";
    var login = document.forms["registration"].elements["login"].value;
    if (/^[A-z]\w{3}\w*$/.test(login)) {
        listEl["login"] = true;
        document.getElementById("login").style.background = "url('yes.png') round";
    } else {
        listEl["login"] = false;
        document.getElementById("login").style.background = "url('no.png') round";
    }
}

function loginFocus() {
    if(!listEl["login"]) {
        document.getElementById("loginHelper").style.height = "40px";
        document.getElementById("loginHelper").style.fontSize = "12px";
    }
}

function surnamePressed() {
    var surname = document.forms["registration"].elements["surname"].value;
    if (/^[A-z]+$|^[А-я]+$/.test(surname)) {
        listEl["surname"] = true;
        document.getElementById("surnameHelper").style.height = "0%";
        document.getElementById("surnameHelper").style.fontSize = "0px";
        document.getElementById("surname").style.background = "url('yes.png') round";
    } else {
        document.getElementById("surname").style.background = "url('no.png') round";
        document.getElementById("surnameHelper").style.height = "20px";
        document.getElementById("surnameHelper").style.fontSize = "12px";
    }
}

function surnameBlur() {
    document.getElementById("surnameHelper").style.height = "0%";
    document.getElementById("surnameHelper").style.fontSize = "0px";
}

function surnameFocus() {
    if(!listEl["surname"]) {
        document.getElementById("surnameHelper").style.height = "20px";
        document.getElementById("surnameHelper").style.fontSize = "12px";
    }
}

function namePressed() {
    var name = document.forms["registration"].elements["name"].value;
    if (/^[A-z]+$|^[А-я]+$/.test(name)) {
        listEl["name"] = true;
        document.getElementById("nameHelper").style.height = "0%";
        document.getElementById("nameHelper").style.fontSize = "0px";
        document.getElementById("name").style.background = "url('yes.png') round";
    } else {
        document.getElementById("name").style.background = "url('no.png') round";
        document.getElementById("nameHelper").style.height = "20px";
        document.getElementById("nameHelper").style.fontSize = "12px";
    }
}


function nameBlur() {
    document.getElementById("nameHelper").style.height = "0%";
    document.getElementById("nameHelper").style.fontSize = "0px";
}

function nameFocus() {
    if(!listEl["name"]) {
        document.getElementById("nameHelper").style.height = "20px";
        document.getElementById("nameHelper").style.fontSize = "12px";
    }
}


function dateChanged() {
    var Birthday = document.forms["registration"].elements["Birthday"].value;
    if (/^\d{4}-\d{2}-\d{2}$/.test(Birthday)) {

        document.getElementById("dt").style.color = "black";
        document.getElementById("Birthday").style.background = "url('yes.png') round";
    } else {
        document.getElementById("Birthday").style.background = "url('no.png') round";
    }
}



function emailPressed() {
    var email = document.forms["registration"].elements["email"].value;
    if (/^.+@.+\..+$/.test(email)) {
        listEl["email"] = true;
        document.getElementById("emailHelper").style.height = "0%";
        document.getElementById("emailHelper").style.fontSize = "0px";
        document.getElementById("email").style.background = "url('yes.png') round";
    } else {
        document.getElementById("email").style.background = "url('no.png') round";
        document.getElementById("emailHelper").style.height = "20px";
        document.getElementById("emailHelper").style.fontSize = "12px";
    }
}

function emailBlur() {
    document.getElementById("emailHelper").style.height = "0%";
    document.getElementById("emailHelper").style.fontSize = "0px";
}

function emailFocus() {
    if(!listEl["email"]) {
        document.getElementById("emailHelper").style.height = "20px";
        document.getElementById("emailHelper").style.fontSize = "12px";
    }
}

function passwordPressed() {
    var password = document.forms["registration"].elements["password"].value;
    if (/(?=^.{8,}$)((?=.*\d)|(?=.*[A-zА-я0-9_]+))(?![.\n])(?=.*[A-ZА-Я])(?=.*[a-zа-я]).*$/.test(password)) {
        listEl["password"] = true;
        document.getElementById("password").style.background = "url('yes.png') round";
        document.getElementById("passwordHelper").style.height = "0%";
        document.getElementById("passwordHelper").style.fontSize = "0px";
    } else {
        document.getElementById("password").style.background = "url('no.png') round";
        document.getElementById("passwordHelper").style.height = "40px";
        document.getElementById("passwordHelper").style.fontSize = "12px";
    }
}

function passwordBlur() {
    document.getElementById("passwordHelper").style.height = "0%";
    document.getElementById("passwordHelper").style.fontSize = "0px";
}

function passwordFocus() {
    if(!listEl["password"]) {
        document.getElementById("passwordHelper").style.height = "40px";
        document.getElementById("passwordHelper").style.fontSize = "12px";
    }
}

function passwordRepeatPressed() {
    var passwordRepeat = document.forms["registration"].elements["passwordRepeat"].value;
    var password = document.forms["registration"].elements["password"].value;
    if (passwordRepeat == password) {
        document.getElementById("passwordRepeat").style.background = "url('yes.png') round";
    } else {
        if(password.indexOf(passwordRepeat) == 0) {
            document.getElementById("passwordRepeat").style.background = "none";
        } else {
            document.getElementById("passwordRepeat").style.background = "url('no.png') round";
        }

    }
}