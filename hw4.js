function tampil_array (arrayy){
    for (let x in arrayy){
        console.log(x+". "+arrayy[x]);
    }
}
function total (arrayy){
    let jumlah = 0
    for (let x of arrayy){
        jumlah += x
    }
    return jumlah
}
function ratarata (arrayy){
    jumlah = total(arrayy)
    return jumlah/arrayy.length
}
function nilai_maks (arrayy){
    let maks = arrayy[0]
    for ( let j = 0; j < arrayy.length; j++){
        if (maks == arrayy[j]){
            maks = arrayy[j]
        } else{
            if (arrayy[j] > maks ){
                maks = arrayy[j]
            }
        }
    }
    return maks
}
function nilai_min (arrayy){
    let min = arrayy[0]
    for ( let j = 0; j < arrayy.length; j++){
        if (min == arrayy[j]){
            min = arrayy[j]
        } else{
            if (arrayy[j] < min ){
                min = arrayy[j]
            }
        }
    }
    return min
}
function perbandingan (ganjil, genap){
    if (ganjil == genap){
        console.log("Nilai keduanya sama besar")
    } else{
        if (ganjil > genap ){
            console.log("Nilai Ganjil lebih besar");
        } else {
            console.log("Nilai Genap lebih besar");
        }
    }
}

let arr = new Array(100)
arr = arr.fill(0).map(() => Math.floor(Math.random() * 50)  + 1);
let arr_ganjil = new Array()
let arr_genap = new Array()
for (let x in arr){
    if (x % 2 == 0){ 
        arr_genap.push(arr[x]);
    } else {
        arr_ganjil.push(arr[x]);
    }
}
console.log("Array dengan jumlah index 100");
tampil_array(arr);
console.log("Array Ganjil ");
tampil_array(arr_ganjil);
console.log("Array Genap ");
tampil_array(arr_genap);

console.log("=======================================================");
console.log("Ganjil : ");
let total_ganjil = total(arr_ganjil)
let rata_ganjil = ratarata(arr_ganjil)
let maks_ganjil = nilai_maks(arr_ganjil)
let min_ganjil = nilai_min(arr_ganjil)
console.log("total : "+total_ganjil);
// console.log("jumlah array : "+arr_ganjil.length);
console.log("rata-rata : "+rata_ganjil);
console.log("nilai max : "+maks_ganjil);
console.log("nilai min : "+min_ganjil);

console.log("=======================================================");
console.log("Genap : ");
let total_genap = total(arr_genap)
let rata_genap = ratarata(arr_genap)
let maks_genap = nilai_maks(arr_genap)
let min_genap = nilai_min(arr_genap)
console.log("total : "+total_genap);
// console.log("jumlah array : "+arr_genap.length);
console.log("rata-rata : "+rata_genap);
console.log("nilai max : "+maks_genap);
console.log("nilai min : "+min_genap);

console.log("=======================================================");
console.log("Perbandingan");
console.log("Total : ");
perbandingan(total_ganjil, total_genap)
console.log("Rata - rata : ");
perbandingan(rata_ganjil, rata_genap)
console.log("Nilai Max : ");
perbandingan(maks_ganjil, maks_genap)
console.log("Nilai Min : ");
perbandingan(min_ganjil, min_genap)
