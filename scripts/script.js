content = document.getElementById("content");

function like(){

    buttons = document.querySelectorAll("button");

    for (let button of buttons){
        button.addEventListener("click", function(e){
            let count = parseInt(e.target.nextElementSibling.innerText);
            count++;
            e.target.nextElementSibling.innerText = count;
            for (let movie of movies) {
                if (movie.id == button.parentNode.parentNode.attributes[0].value) {
                    movie.Likes = count;    
                    console.log(movie.Likes) 
                }
            }
        })
    }
}

function showCards() {

    for (let movie of movies) {
        content.innerHTML += 
        `
        <div id="${movie.id}" class ="movie">
            <img src="${movie.img}">
            <div class ="inner">
                <p class ="title">${movie.title}</p>
                <p class ="director">Director: ${movie.Director}</p>
                <p class ="runtime">Runtime: ${movie.Runtime} minutes</p>
                <button>Like</button>
                <span>${movie.Likes}</span>
            </div>
        </div>
        `
    }
}


showCards()
like()
