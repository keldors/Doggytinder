import {dogsdata} from './data.js'

class Dog {
    constructor(data){
        Object.assign(this, data)
        
    }

    getDogHtml() {
        return `
        <img class="profile-pic" src="${this.avatar}">
        <img class="liked hidden" id="liked" src="images/badge-like.png">
        <img class="noped hidden" id="noped" src="images/badge-nope.png">
        <p class="name">${this.name}, <span class="age">${this.age}</span></p>
        <p class="profile-bio">${this.bio}</p>
        `
    }
    dogLiked() {
        dogsdata.forEach(dog => {
            if(dog.name === this.name) {
                dog.hasBeenLiked = true
            }
          })
    }
    
}



export {Dog}