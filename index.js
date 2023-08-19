const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "x", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.getElementById("clear").addEventListener('click',function(){
  input.value = ""
  input.focus()
})

document.querySelectorAll(".charKey").forEach(function(charKeybtn) {
  charKeybtn.addEventListener('click',function(){
    const value = charKeybtn.dataset.value
    input.value += value
  })
})

input.addEventListener('keydown',function(ev){
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
  }
  if(ev.key === 'Backspace'){
    input.value = input.value.slice(0,-1)
  }

    if(ev.key === 'Enter'){
    calculate()
    input.focus()}
})

document.getElementById('equal').addEventListener('click',calculate)

function calculate(){
  const result = eval(input.value)
  resultInput.value = result
}


document.getElementById("copyToClipboard").addEventListener('click',function(){
  //////
})

document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
  const button = ev.currentTarget
  if (button.innerText === "Copy") {
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = "Copy"
    button.classList.remove("success")
  }
})


document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#000")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#0c06b8")
    main.dataset.theme = "light"
  } else {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#000")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#0c06b8")
    main.dataset.theme = "dark"
  }
})