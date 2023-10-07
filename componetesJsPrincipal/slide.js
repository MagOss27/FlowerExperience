let radio = document.querySelector('.manuelaperta')
let cont = 1
document.getElementById('radio1')
// .checked = true


setInterval(() => {
    proximaImg()




}, 4000)
// tempo

function proximaImg() {
    cont++

    if (cont > 2) {
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}