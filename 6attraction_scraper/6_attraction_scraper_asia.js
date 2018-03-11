const Crawler = require("crawler");
const jsonfile = require('jsonfile')

// asia
const read_file_asia = '../5attraction_array_maker/5array_maker_asia.json'
const write_file_asia = './6_attraction_scraper_asia.json'
let asia_attractions_list = jsonfile.readFileSync(read_file_asia)

let asia_attractions_urls = []
let obj = {asia_attractions_urls}

let c = new Crawler({
    maxConnections: 5, // `maxConnections` will be forced to 1
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            const $ = res.$;
            let baseURL = 'https://www.tripadvisor.ca'
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            $("div.listing_title a").each(
                function(){
                    console.log($(this).attr('href'))
                    asia_attractions_urls.push(baseURL + $(this).attr('href'))
            });

        }
        done();
    }
});

// Queue a list of URLs
c.queue(asia_attractions_list.asia_attractions_list);

c.on('drain', function(){
    jsonfile.writeFile(write_file_asia, obj, function (err) {
        console.error(err)
    })
})