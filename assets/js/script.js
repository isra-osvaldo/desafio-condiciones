// Ejercicio 1
const $imgLulu = document.querySelector('.img-lulu')
const $btnAddBorder = document.querySelector('.btn-add-border')
const $btnRemoveBorder = document.querySelector('.btn-remove-border')

$imgLulu.addEventListener('click', () => {
    if ($imgLulu.style.border) {
        $imgLulu.style.border = ''
    } else {
        $imgLulu.style.border = '2px solid red'
    }
})

// Ejercicio 2
const $btnValidate = document.querySelector('.btn-validate')

$btnValidate.addEventListener('click', () => {
    const $cantSticker1 = Number(document.querySelector('#sticker-1').value)
    const $cantSticker2 = Number(document.querySelector('#sticker-2').value)
    const $cantSticker3 = Number(document.querySelector('#sticker-3').value)
    const $outputMessage = document.querySelector('.output-message')

    let totalStickers = $cantSticker1 + $cantSticker2 + $cantSticker3

    if (totalStickers > 10) {
        $outputMessage.innerHTML = 'Llevas demasiados stickers. ⚠️'
        $outputMessage.style.color = 'red'
    } else if (totalStickers < 0) {
        $outputMessage.innerHTML = 'No puedes llevar una cantidad negativa. ❌'
        $outputMessage.style.color = 'red'
    } else {
        $outputMessage.innerHTML = `Total de stickers: ${totalStickers} ✅ `
        
    }
})

// Ejercicio 3 
const $btnIngresar = document.querySelector('.btn-ingresar')

$btnIngresar.addEventListener('click', () => {
    const $value1 = Number(document.querySelector('#select-1').value)
    const $value2 = Number(document.querySelector('#select-2').value)
    const $value3 = Number(document.querySelector('#select-3').value)
    const $outputResult = document.querySelector('.output-result')
    
    if ($value1 === 9 && $value2 === 1 && $value3 === 1 ) {
        $outputResult.innerHTML = 'Password 1 correcto 🔓'
        $outputResult.style.color = 'green'
    }
    else if ($value1 === 7 && $value2 === 1 && $value3 === 4 ) {
        $outputResult.innerHTML = 'Password 2 correcto 🔓'
        $outputResult.style.color = 'green'
    } 
    else {
        $outputResult.innerHTML = 'Password incorrecto ❌'
        $outputResult.style.color = 'red'
    }
})


