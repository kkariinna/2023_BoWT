function verify() {
    console.log("n")
    let n = parseInt (elementN.value);
    console.log(n)

if (n > 0) {
        result = "n является положительным числом"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
check = true;
    }
    else if (n < 0) {
       result = "n является отрицательным числом"
       document.getElementById("result").innerText = messageText + result;
       document.getElementsByName('result')[0].value = result;
check = true;
    }
    else {
       result = "n является нулём"
       document.getElementById("result").innerText = messageText + result;
       document.getElementsByName('result')[0].value = result;
 check = true;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
      } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementN = document.getElementById ("n");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
