content = document.getElementById("content");

for (movie of movies) {
    content.innerHTML += 
    `
    <div class ="movie">
        <img src="${movie.img}">
        <div class ="inner">
            <p class ="title">${movie.title}</p>
            <p class ="director">${movie.Director}</p>
            <p class ="runtime">${movie.Runtime}</p>
            <button>Like</button>
            <span>${movie.Likes}</span>
        </div>
    </div>
    `
   
}