window.onload = function(){
    const API_KEY = '19316226-1eddace69c97e7c82ba53a287';

    function httpRequest(query){

        return new Promise(function(success, fail){
            let request = new XMLHttpRequest();
                request.open('GET', `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`);
        
            request.addEventListener("load", function() {
                if (request.status < 400)
                    success(request.response);
                else
                    fail(new Error("Request failed: " + request.statusText));
            });
                 
                  request.send();
        })


            /* setTimeout(() => {
                let res = JSON.parse(request.responseText);
                res.hits.forEach(element => {
                    resultArray.push(element.largeImageURL);
                });
                console.log(resultArray[2]);
                return resultArray;
            }, 1000).then(function(){alert()}) */
            
            
            // return resultArray; 
    }

    

    httpRequest('cats')
    .then(text => {
        // let massive = [];
        JSON.parse(text).hits.forEach(element => {
            // massive.push(element.largeImageURL);
            let div = document.createElement('div');
                div.classList.add('carousel-item');
            
            let img = document.createElement('img');
                img.classList.add('d-block');
                img.classList.add('w-100');

                img.src = element.largeImageURL;

            div.appendChild(img);
            document.querySelector('.carousel-inner').appendChild(div);
        });

        document.querySelector('.carousel-inner').firstElementChild.classList.add('active');

        
    })
    .catch(err => console.log(err));


}