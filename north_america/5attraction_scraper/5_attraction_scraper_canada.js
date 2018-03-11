const Crawler = require("crawler");
const jsonfile = require('jsonfile')

// canada
const read_file_canada = '../4attraction_array_maker/4array_maker_canada.json'
const write_file_canada = './5_attraction_scraper_canada.json'
let canada_attractions_list = jsonfile.readFileSync(read_file_canada)

let canada_attractions_urls = []
let obj = {canada_attractions_urls}

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
                    canada_attractions_urls.push(baseURL + $(this).attr('href'))
            });

        }
        done();
    }
});

// Queue a list of URLs
c.queue(canada_attractions_list.canada_attractions_list);

c.on('drain', function(){
    jsonfile.writeFile(write_file_canada, obj, function (err) {
        console.error(err)
    })
})