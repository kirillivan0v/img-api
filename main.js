window.onload = function(){
    const API_KEY = '19316226-1eddace69c97e7c82ba53a287';

    function httpRequest(query){
        let resultArray = [];
        let request = new XMLHttpRequest();
            request.open('GET', `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`);
            request.send();

            setTimeout(() => {
                let res = JSON.parse(request.responseText);
                res.hits.forEach(element => {
                    resultArray.push(element.largeImageURL);
                });
                
            }, 1000);
            
            console.log(resultArray);
            return resultArray; 
    }

    let mass = httpRequest('cats');

    
    console.log(mass)

}