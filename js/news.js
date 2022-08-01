
const result = document.getElementById('result');


const endPointURL = "https://newsapi.org/v2/everything?q=Apple&from=2022-07-28&sortBy=popularity&apiKey=e2b3877061ea42de85f1610118ea8016"


let showArticles = (article) => {
    // this function renders the image on the page
    let renderArticle = (item, index) => {
        //  
        result.innerHTML += `
        <div class="article">
        <h2>${item.title}</h2>
        <h3>${item.author}</h3>
        <img src="${item.urlToImage}">
        <p>${item.description}</p>
        <h6>${item.publishedAt}</h6>
        </div>
        `;
    }
    // this functions loops through our images and runs renderImage for each one
    article.forEach(renderArticle);
}

$.ajax({
    type: "GET",
    url: endPointURL,
    success: function (data) {
        console.log(data)
        console.log(data.articles[0].author)
        showArticles(data.articles);
    },
    error: function (error) {
        console.log("There is a problem");
        console.log(error);
    }

});
