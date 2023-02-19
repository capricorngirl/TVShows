const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: {q: searchTerm } }
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=`, config);  
    makeImages(response.data);
    form.elements.query.value = "";
})


const makeImages = (shows) => {
    for (let result of shows){
        if (result.show.image){
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}


const clearImg = document.querySelector("#clr");
clearImg.addEventListener("click", function (){
    const images = document.querySelectorAll("img");
    for (i=0; i< images.length; i++){
        images[i].remove(); 
    }
});