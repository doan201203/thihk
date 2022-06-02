let loginForm = document.querySelector('.login-form');
 
document.querySelector('.profile_user').onclick = () =>{
    loginForm.classList.toggle('active');
    ketQua.classList.remove('active');
}
 
let ketQua = document.querySelector('.result');
 
 document.querySelector('.info-hocphan').onclick = () =>{
    ketQua.classList.toggle('active');
    loginForm.classList.remove('active');
}

let btn = document.querySelector('.btn');
document.querySelector('.box').onclick = () =>{
    btn.classList.toggle('active');
}