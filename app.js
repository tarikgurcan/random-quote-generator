const quote_container=document.querySelector("#quote-container")
const new_quote=document.querySelector("#new-quote")
const twitter=document.querySelector("#twitter")
const quote=document.querySelector("#quote")
const quote_author=document.querySelector("#author")
const loader=document.querySelector("#loader")
const request=new Request()
const ui = new UI()

EventListener()

function EventListener(){
    new_quote.addEventListener("click",newQuote)
    twitter.addEventListener("click",tweet)
    addEventListener("DOMContentLoaded",newQuote)
}

function newQuote(){
    quote_container.style.display="none"
    loader.style.display="block"
    request.getQuote().then(data=>ui.setQuote(data))
    setTimeout(()=>{
        quote_container.style.display="block"
        loader.style.display="none"
    },700)
}



function tweet(){
    const quoteText=quote.textContent;
    const quote_author_text=quote_author.textContent
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText}-${quote_author_text}`
    open(twitterUrl,"_blank")
}


