var createaccbtn = document.querySelector(".button2");
var mastermsg = document.querySelector(".button3");
const userId = document.querySelector('.input1').value;
const password = document.querySelector('.input2').value;
const loginbtn = document.querySelector('.button1')

function workingtest(){
    console.log(userId);
}
workingtest();

createaccbtn.addEventListener("click", function() {
    mastermsg.style.opacity = "1";
    setTimeout(function () {
        mastermsg.style.opacity = "0";
    }, 4000)
});


loginbtn.addEventListener('click', function () {
    const userId = document.querySelector('.input1 input').value;
    const password1 = document.querySelector('.input2 input').value;
    const password2 = document.querySelector('.input3 input').value;

    console.log(userId, password1, password2);

    if (userId === 'chetan' && password1 === '75' && password2 === '57') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid User ID or Password');
    }
    
});