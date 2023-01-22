// Nama function haruslah antrian, panggilAntrian, tumpukan dan ganjilGenap
// sedangkann variabel yang sudah disediakan yaitu line
// Function dan variabel yang tersebut tidak boleh diganti dengan nama function lainnya
// Diberikan sebuah function ganjilGenap yang menerima satu parameter plat bertipe string.
// Parameter plat berisi informasi kumpulan plat dimana nomor antar plat dipisahkan oleh titik koma(;).
// Function ini akan mengembalikan keterangan jumlah plat genap dan jumlah plat ganjil.
let input = "2341;3429;864;1309;1276"

function ganjilGenap(plat) {
    let arr = []
    let text = ""
    for (let i = 0; i < plat.length + 1; i++) {
        if (plat[i] === ";" || i === plat.length) {
            arr.push(text);
            text = "";
        } else {
            text += plat[i];
        }
    }
    let jumlahGanjil = 0;
    let jumlahGenap = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            jumlahGenap++
        }
        else {
            jumlahGanjil++

        }
    }
    if(jumlahGenap === 0){
        return `plat ganjil sebanyak ${jumlahGanjil} dan plat genap tidak ditemukan`
    }
    else if(jumlahGanjil === 0){
        return `plat genap sebanyak ${jumlahGenap} dan plat ganjil tidak ditemukan`
    }
    return `plat genap sebanyak ${jumlahGenap} dan plat ganjil sebanyak ${jumlahGanjil}`
}

console.log(ganjilGenap(input));

