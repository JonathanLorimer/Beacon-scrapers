const Crawler = require("crawler");

let c = new Crawler({
    maxConnections: 5, // `maxConnections` will be forced to 1
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);- p
        }else{
            const $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log(res.body)
            
        }
        done();
    }
});

c.queue("https://www.tripadvisor.ca/Attraction_Review-g181779-d2103679-Reviews-Paradise_Fun_Park-Parksville_Vancouver_Island_British_Columbia.html")