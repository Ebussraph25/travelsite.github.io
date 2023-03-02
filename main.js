const toggleIcon = document.querySelector('.toggle-icon');
const loginBtn= document.querySelector('login-btn');
const signupBtn= document.querySelector('.signup-btn');

toggleIcon.addEventListener('click',() => {
    loginBtn,signupBtn.classList.toggle('show');
})