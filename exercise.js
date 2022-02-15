// 1. Remove vowels
// Input: "javascript"
// Output: "jvscrpt"

const removeVowels = (string) => {
    let vocal = ["a", "i", "u", "e", "o"]
    let result = ""
    
    for(let i = 0; i < string.length ; i++){
        if(!vocal.includes(string[i])){
            result += string[i]
        }
    }
    return result

}

console.log(removeVowels("jametkudasi"));


// 2. Alphabet value
// Hitung jumlah value suatu string dimana setiap huruf memiliki value
// posisi huruf tersebut di dalam abjad. Contoh: A = 1, B = 2, Z = 26, J = 10
// Examples
// Input: "abc"
// Output: 6
// const alphabetArr = "abcdefghijklnopqrstuvwxyz".split("")

// Input: "steve"
// Output: 71

const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("")
const alphabetValue = (string) => {
    let result = 0

    for(let i = 0; i < string.split("").length; i++){
        result += alphabetArr.indexOf(string[i]) + 1
    }
    return result

}


console.log(alphabetValue("mantap"));

// 3. Odd alphabet value
// Sama seperti soal nomor 2, tetapi kali ini hanya hitung huruf yang memiliki
// value ganjil

// Input: "steve"
// Output: 29

// Input: "abc"
// Output: 4

// const oddAlphabetValue = (string) => {
    
//         let result = 0

//         for (let i = 0; i < string.split("").length; i++) {
//             if()

//             result += alphabetArr.indexOf(string[i]) + 1
//         }
//         return result

// }




// 4. Unique items
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// unique (hanya berada di salah satu array saja)

// Input:
// arr1 = [1, 3, 7, 4]
// arr2 = [1, 5, 3, 7, 0]
// Output: [5, 4, 0]

// Bonus Question
// 5. Remove duplicates
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// dari kedua array tersebut, tetapi sudah
// Input:
// arr1 = [1, 3, 7, 4]
// arr2 = [1, 5, 3, 7, 0]
// Output: [1, 3, 4, 5, 7, 0]