// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"
// turn string into an array
//iterate through array using .map to equate the values to the expected numbers
//return the array back to a string using the .join method
const codedMessage = (string) => {
  let stringArr = string.split("")
  let newArr = stringArr.map(value => {
    if(value == "a"){
       return value = 4
    }
    else if(value == "e"){
      return value = 3
    }
    else if(value == "i"){
      return value = 1
    }
    else if(value == "o"){
      return value = 0
    }
  })
  return newArr.join("")
}

console.log(codedMessage(secretCodeWord1))
console.log(codedMessage(secretCodeWord2))

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const onlyA = (array) => {
  smallArr = []
    for(var i = 0; i < array.length; i++){
      smallArr.push(array[i].toLowerCase())
    }
    newArray = smallArr.filter(value => {
      return value = value.includes("a")
    })
  return newArray
}


console.log(onlyA(arrayOfWords))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

const pokerHand = (array) => {
let sortedArr = array.sort()
// hand1 now is [3, 3, 5, 5, 5]
fullHouseArray =[]
remaining =[]

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i + 2] == sortedArr[i+1]
            && sortedArr[i+1] == sortedArr[i]
            && sortedArr[i + 2] == sortedArr[i]) {
            fullHouseArray.push(sortedArr[i+2])
            fullHouseArray.push(sortedArr[i+1])
            fullHouseArray.push(sortedArr[i])
        } else {
            remaining.push(sortedArr[i])
        }
    }
    for (let j = 0; j < remaining.length-2; j++) {
        if (remaining[j + 1] == remaining[j]) {
            fullHouseArray.push(remaining[j])
            fullHouseArray.push(remaining[j+1])
        }
    }
    if (fullHouseArray.length==5){
        return `NOICE, "${fullHouseArray}" is a full house!`
    } else {
        return "Sorry, you do NOT have a full house"
    }
}
console.log(pokerHand(hand1))
console.log(pokerHand(hand2))
console.log(pokerHand(hand3))
