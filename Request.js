class Request{
    constructor(){
        this.url="https://type.fit/api/quotes"
    }

    getQuote(){
        return new Promise((result,error)=>{
            fetch(this.url)
            .then(resolve=>resolve.json())
            .then(data=>result(data))
            .catch(err=>error(err))
        })
    }
}

