function verify() {
    console.log("n")
    let n = parseInt (elementN.value);
    console.log(n)

if (n > 0) {
        result = "Положительное число"
        document.getElementById("result").innerText =  result;
    }
    else if (n < 0) {
       result = "Отрицательное число"
       document.getElementById("result").innerText =  result;
    }
    else {
       result = "Ноль"
       document.getElementById("result").innerText =  result;
    }
}

const elementN = document.getElementById ("n");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
