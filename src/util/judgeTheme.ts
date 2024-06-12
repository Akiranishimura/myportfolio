// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// console.log(window.matchMedia)  

// localStorage.removeItem('theme')
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
 // console.log(localStorage.theme)
  
  // Whenever the user explicitly chooses to respect the OS preference
