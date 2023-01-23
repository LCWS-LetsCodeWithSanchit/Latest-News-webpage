(
  async function() {
  var url = 'https://newsapi.org/v2/top-headlines?country=Your Country&apiKey=Your Api ID';

var data = await (await fetch(url)).json();
data.articles.forEach(news=>{
var image= document.createElement("div");
image.style.backgroundImage =`url(${news.urlToImage}`;
image.classList.add("img");

var title = document.createElement("div")

title.classList.add("title")
title.innerText = news.title;
image.appendChild(title)

var author= document.createElement("div")

author.classList.add('source');
author.innerHTML= news.source.name ;
image.appendChild(author);

var description= document.createElement("div");

description.classList.add('description');
description.innerHTML= news.description;
document.body.appendChild(image);
document.body.appendChild(description);

})
console.log(data.articles);
})()

  
