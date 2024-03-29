let darkTheme = false

const themeToggleBtnEl = document.querySelector('#theme-toggle')

function changeTheme(event) {
    if (darkTheme) document.documentElement.classList.remove('dark')
    if (!darkTheme) document.documentElement.classList.add('dark')

    darkTheme = !darkTheme
}

themeToggleBtnEl.addEventListener('click', changeTheme)