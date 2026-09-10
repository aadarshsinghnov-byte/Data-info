// --- CONFIGURE YOUR CREDENTIALS HERE ---
const VALID_USER = "admin";
const VALID_PASS = "lock1234";
// ---------------------------------------

const loginSection = document.getElementById('loginSection');
const dashboardSection = document.getElementById('dashboardSection');
const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

// Check if user was already logged in during this session
window.onload = function() {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        showDashboard();
    }
};

function handleLogin(event) {
    event.preventDefault();
    
    const userInput = document.getElementById('username').value;
    const passInput = document.getElementById('password').value;

    if (userInput === VALID_USER && passInput === VALID_PASS) {
        sessionStorage.setItem('isLoggedIn', 'true');
        errorMsg.textContent = '';
        showDashboard();
    } else {
        errorMsg.textContent = 'Invalid username or password.';
    }
}

function showDashboard() {
    loginSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
}

function handleLogout() {
    sessionStorage.removeItem('isLoggedIn');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    dashboardSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
}