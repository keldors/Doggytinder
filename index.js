import {dogsdata} from './data.js'
import {Dog} from './Dog.js'
import {getCurrentDog, returnLikedDogsHtml} from './utils.js'

// Add all available profiles into array
let availableDogs = dogsdata.map( dog => {
    return dog
})

function render() {
    if(currentDog === "empty") { 
     
        endSummary()
    } else {
        console.log(currentDog)
        document.getElementById('profile').innerHTML = dogProfile.getDogHtml()
    }    
}

function endSummary() {
    document.getElementById("profile").classList.add("hidden")
    document.getElementById('summary').innerHTML += returnLikedDogsHtml(dogsdata)
    document.getElementById("buttons").classList.add("nopointer")
    document.getElementById("summary").classList.remove("hidden")
  
    
}
let currentDog = getCurrentDog(availableDogs)
let dogProfile = new Dog(currentDog)
render()

document.getElementById('like').addEventListener('click', function() {
    document.getElementById('like').classList.add("nopointer")
    document.getElementById('nope').classList.add("nopointer")
    document.getElementById("liked").classList.remove("hidden")
    dogProfile.dogLiked()
    setTimeout(function() { 
        currentDog = getCurrentDog(availableDogs)
        dogProfile = new Dog(currentDog)
        render()
        document.getElementById('like').classList.remove("nopointer")
        document.getElementById('nope').classList.remove("nopointer")
    },1500)
   
})

document.getElementById('nope').addEventListener('click', function() {
    document.getElementById('like').classList.add("nopointer")
    document.getElementById('nope').classList.add("nopointer")
    document.getElementById("noped").classList.remove("hidden")
    setTimeout(function() { 
        currentDog = getCurrentDog(availableDogs)
        dogProfile = new Dog(currentDog)
        render()
        document.getElementById('like').classList.remove("nopointer")
        document.getElementById('nope').classList.remove("nopointer")
    },1500)
   
})