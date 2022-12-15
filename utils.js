        
        function getCurrentDog(data){
          return data.length > 0 ? data.shift() : "empty"
        }

        function returnLikedDogsHtml(data) {
          let likedDogsHtml = []
          data.forEach(dog => {
            if(dog.hasBeenLiked) {
                likedDogsHtml += `
                  <div class="summary-list">
                    <img class="summary-pic" src="${dog.avatar}">
                    <p class="summary-name">${dog.name}, <span>${dog.age}</span></p>
                  </div>
                `
            }
          })
          return likedDogsHtml

        }
        export {getCurrentDog, returnLikedDogsHtml}