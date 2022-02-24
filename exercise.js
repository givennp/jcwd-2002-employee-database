// 1. Remove vowels
// Input: "javascript"
// Output: "jvscrpt"

const removeVowels = (string) => {
    let vocal = ["a", "i", "u", "e", "o"]
    let result = ""

    for (let i = 0; i < string.length; i++) {
        if (!vocal.includes(string[i].toLowerCase())) {
            result += string[i]
        }
    }
    return result

}

console.log(removeVowels("jametkudaSI"));


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

    for (let i = 0; i < string.split("").length; i++) {
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

const oddAlphabetValue = (string) => {

    let result = 0

    for (let i = 0; i < string.split("").length; i++) {
        if (!((alphabetArr.indexOf(string[i]) + 1) % 2 == 0))

            result += alphabetArr.indexOf(string[i]) + 1
    }
    return result

}


console.log(oddAlphabetValue("fortinaitilababaji"));

// 4. Unique items
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// unique (hanya berada di salah satu array saja)

// Input:
// arr1 = [1, 3, 7, 4]
// arr2 = [1, 5, 3, 7, 0]
// Output: [5, 4, 0]

    const uniqueItem = (arr1 = [], arr2 = []) => {
        let result = [];
        
        arr1.forEach((val) => {
            if(!arr2.includes(val)){
                result.push(val)
            }
        })

        arr2.forEach((val) => {
            if (!arr1.includes(val)) {
                result.push(val)
            }
        })

        return result;
    }

    console.log(uniqueItem([1, 2, 5, 4], [1,2]));


// Bonus Question
// 5. Remove duplicates
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// dari kedua array tersebut, tetapi sudah
// Input:
// arr1 = [1, 3, 7, 4]
// arr2 = [1, 5, 3, 7, 0]
// Output: [1, 3, 4, 5, 7, 0]

arr1 = [1, 3, 7, 4]
arr2 = [1, 5, 3, 7, 0]
arr3 = arr1.concat(arr2)

const removeDuplicates = (value, idx, arr) => {
    return arr.indexOf(value) == idx
}

const remove = arr3.filter(removeDuplicates)

console.log(remove)

//   for (var i = 0; i < 6; i++) {
//       var str = '';
//       for (var j = 1; j < 6 - i; j++) {
//           str = str + ' ';
//       }
//       for (var k = 1; k <= (2 * i + 1); k++) {
//           str = str + '*';
//       }
//       console.log(str);
//   }

function find_average(array) {
    // your code here
    var total = 0;

    for (var i in array) {
        if (array[i] > 0) {
            total += array[i];
        }
    }
    let final = total / array.length
    return final
}

console.log(find_average([1, 2, 3]));