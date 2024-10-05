const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "http://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

// when we click on the tweet button then it should open the twitter window where we can share the particular quote. 
// when we click on the tweet button then it will execute the tweet() function and it will open a new window and run the below url("https://twitter.com/intent/tweet?text=Hello%20world") with the specified width and height.   
function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML,"Tweet Window", "width=600, height=300");
}

getquote(api_url);