const inputElement1 = document.getElementById('input1');
const inputElement2 = document.getElementById('input2');
const btnElement = document.getElementById('submit');
const hasil =document.getElementById('hasil');
// 
btnElement.addEventListener('click', function(){

    const angkaPertama = inputElement1.value
    console.log("Angka Pertama =>", angkaPertama)
    const angkaKedua = inputElement2.value
    console.log("Angka Kedua =>", angkaKedua)

    calculateNumber = parseInt(angkaPertama) * parseInt(angkaKedua)
    hasil.innerHTML = calculateNumber
    
})