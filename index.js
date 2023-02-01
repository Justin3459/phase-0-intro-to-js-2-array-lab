// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const newCats = [...cats]
function destructivelyAppendCat () {
    cats.push("Ralph")
}
function destructivelyPrependCat (){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat (){
    cats.pop()
}
function destructivelyRemoveFirstCat (){
    cats.shift()
}
/*function appendCat () [
    ...cats
]
*/
function appendCat(){
   const newCats = [
        ...cats.slice(), ]
    newCats.push("Broom")
    return(newCats)
    }
function prependCat(){
        const newCatBegining = [
            ...cats.slice()
    ]
        newCatBegining.unshift("Arnold")
        return (newCatBegining)
    }
function removeLastCat(){
    const removedLast = [
        ...cats.slice()
    ]
    removedLast.pop()
    return(removedLast)
}
function removeFirstCat(){
    const removeFirst = [ 
        ...cats.slice()
    ]
    removeFirst.shift()
    return(removeFirst)
}
