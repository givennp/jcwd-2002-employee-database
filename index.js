// Duplikasi method .find
// Duplikasi method .indexOf

// Conditions (indexOf)
// 1. Mencari index dari sebuah item dalam array
// 2. Akan return sebuah number (index)

// Conditions (find)
// 1. Mencari sebuah value (item) dalam array yang
//    memenuhi condition yang kita berikan
// 2. Callback function kita harus return boolean
// 3. Ketika callback function return true, loop akan berhenti
//    lalu function find akan return item dari array.

const books = [
    "LOTR",
    "Harry Potter",
    "Doraemon",
    "Naruto",
    "Tutorial: Korupsi"
]

    const duplicateFind = (arr, callback) => {
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                
                return arr[i]
            }
        }

    }

    let findData = duplicateFind(books, (val) => {
        return val.startsWith("T")
    })



    const duplicateIndexOf = (arr, string) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == string ) {
                return i
            }
        }
        
        return -1
    }

    console.log(duplicateIndexOf(books, "Harry Potter"))
    console.log(findData)