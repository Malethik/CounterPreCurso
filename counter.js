let value = 0;

document.getElementById("incrementa").addEventListener("click", increase)
function increase() {
    value++
    counter()
}
document.getElementById("decrementa").addEventListener("click", decrease)
function decrease() {
    if (value > 0) {
        value--
    }
    else {
        value = 0
    }
    counter()
}
document.getElementById("cancela").addEventListener("click", cancel)
function cancel() {
    value = 0
    counter()
}

function counter() {
    let counterBarElement = document.getElementById("counterBar")
    if (counterBarElement) {
        counterBarElement.innerHTML = value
    }
}
document.addEventListener("DOMContentLoaded", counter)
