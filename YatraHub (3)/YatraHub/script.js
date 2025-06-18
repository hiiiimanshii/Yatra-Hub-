

const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn === 'true') {
            document.getElementById('login-icon').style.display = 'none';
        }

