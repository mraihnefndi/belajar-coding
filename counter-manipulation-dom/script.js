// const btnElement = document.getElementById('btn')

// btnElement.addEventListener('click', triggerBtn)

// function triggerBtn(){
//     btnElement.innerHTML = "Text Sesudah"
// }

const countElement = document.getElementById('count')

const btnTambah = document.getElementById('tambah-angka')
const btnKurang = document.getElementById('kurang-angka')

btnTambah.addEventListener('click', function(){
    // Ambil Data Saat ini
    let currentNumber = countElement.textContent

    // Proses Kalkulasi
    currentNumber = parseInt(currentNumber) + 1

    // Ubah Angka yang sudah di kalkulasi dengan hasil penambahan
    countElement.innerHTML = currentNumber
})

btnKurang.addEventListener('click', function(){
    // Ambil Data Saat ini
    let currentNumber = countElement.textContent
    // Proses Kalkulasi
    currentNumber = parseInt(currentNumber) - 1
    // Ubah Angka yang sudah di kalkulasi dengan hasil penambahan
    countElement.innerHTML = currentNumber
})