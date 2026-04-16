const textSwitcherBtn = document.getElementById('text-switcher-btn')
const heading = document.querySelector('h2')
const loginBtn = document.getElementById('loginBtn')
const usernameInput = document.getElementById('username')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')

const usernameLabel = document.getElementById('usernameLabel')

textSwitcherBtn.addEventListener('click', function () {
	if (heading.textContent === 'Login') {
		switcher('Sign up', 'Already have an account? Login', true)
	} else {
		switcher('Login', "Don't have an account? Sign up", false)
	}
})

function switcher(a, b, c) {
	loginBtn.value = a
	heading.textContent = a
	textSwitcherBtn.value = b
	if (c) {
		usernameInput.classList.remove('hidden')
		usernameLabel.classList.remove('hidden')
	} else {
		usernameInput.classList.add('hidden')
		usernameLabel.classList.add('hidden')
	}
}

loginBtn.addEventListener('click', function () {
	if (loginBtn.value === 'Sign up') {
		register()
	} else {
		login()
	}
})

async function register() {
	if (!usernameInput.value || !emailInput.value || !passwordInput.value) {
		alert('All input fields are required')
		return
	} else {
		const user = {
			username: usernameInput.value,
			email: emailInput.value,
			password: passwordInput.value,
		}

		// HTTP request

		try {
			const response = await fetch('http://localhost:3002/api/auth/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(user),
			})

			if (response.ok) {
				const data = await response.json()
				alert(data.message)
			}
		} catch (err) {
			alert(err.message)
		}

		usernameInput.value = ''
		emailInput.value = ''
		passwordInput.value = ''
		switcher('Login', "Don't have an account? Sign up", false)
	}
}

async function login() {
	if (!emailInput.value || !passwordInput.value) {
		alert('All input fields are required')
		return
	}

	const user = {
		email: emailInput.value,
		password: passwordInput.value,
	}

	try {
		const response = await fetch('http://localhost:3002/api/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user),
		})

		const data = await response.json()

		if (response.ok) {
			// Store token and user data
			localStorage.setItem('token', data.token)
			localStorage.setItem('user', JSON.stringify(data.user))

			alert(data.message)

			// Clear input fields
			usernameInput.value = ''
			emailInput.value = ''
			passwordInput.value = ''

			// Optional: redirect to dashboard or home page
			// window.location.href = "/dashboard.html";
		} else {
			alert(data.message)
		}
	} catch (err) {
		alert('Login failed: ' + err.message)
	}
}

// function uploadFile(callback) {
//   setTimeout(() => {
//     callback();
//   }, 2000);
// }

// function callback() {
//   console.log("Callback is called");
// }

// uploadFile(callback);

// function outer() {
//   return function inner() {};
// }

// const inner = outer();
// inner();

// fetch().then().catch().finally()
