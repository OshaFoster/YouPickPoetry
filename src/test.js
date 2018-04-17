

let newArray = []
function randomItems(items){


    for (let i = 0; i < 50; i ++){
        const word = items[Math.floor(Math.random()*items.length)]
            newArray.push(word)
    }

    return newArray
}

var items =[ "shoe", "pace", "shine", "knuckle", "home"];
console.log(randomItems(items));

anotherArray =[]
newArray.map(item => {
    anotherArray.push(item + " new word")
})

console.log(anotherArray)
