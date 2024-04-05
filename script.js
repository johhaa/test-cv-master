

const btnDarkMode = document.querySelector(".dark-mode-btn")
const body = document.body

// Проверка темной темы
if (localStorage.getItem('darkMode') == "dark"){
    btnDarkMode.classList.add("dark-mode-btn--active")
    body.classList.add('dark')
}
 
// Системный настройки

if (window.matchMedia &&  window.matchMedia("(prefers-color-scheme: dark)").matches){
    btnDarkMode.classList.add("dark-mode-btn--active")
    body.classList.add('dark')
}


// Включение темной темы
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active")
    const isDark = body.classList.toggle('dark')

    if(isDark){
        localStorage.setItem('darkMode', 'dark')
    }
    else{
        localStorage.setItem('darkMode', 'light')
    }
}



