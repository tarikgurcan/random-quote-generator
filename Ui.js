class UI{
    constructor(){
        this.quote=document.querySelector("#quote")
        this.quote_author=document.querySelector("#author")
    }
     setQuote(quotes){
        let randomNumber=Math.floor(Math.random()*1643)+1
        this.quote.textContent=quotes[randomNumber].text
        if(this.quote.textContent.length>50){
            this.quote.classList.add("long-quote")
        }
        else{
            this.quote.classList.remove("long-quote")

        }
        if(this.quote_author.textContent===""){
            this.quote_author.textContent="Unknown"
        }
        else{
            this.quote_author.textContent=quotes[randomNumber].author
        }
    }

}