const Crawler = require("crawler");
const jsonfile = require('jsonfile')

// canada
const read_file_canada = '../5.5filter/5.5filter_canada.json'
const write_file_canada = './6_attraction_detail_canada.json'
let canada_attractions_list = jsonfile.readFileSync(read_file_canada)

// let quarter_length = canada_attractions_list.canada_attractions_urls.length/4
// let first_quarter = canada_attractions_list.canada_attractions_urls.slice(quarter_length)

let canada_attractions_details = []
let obj = {canada_attractions_details}

let c = new Crawler({
    maxConnections: 5, // `maxConnections` will be forced to 1
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            const $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            if ($("div.prw_rup.prw_common_bubble_rating.bubble_rating span").attr('content') > 3){
                let regexp = /lat:\s(-?\d\d\d?\.\d{2,13})/
                let regexp2 = /lng:\s(-?\d\d\d?\.\d{2,13})/
                let lat = regexp.exec(res.body)
                let lng = regexp2.exec(res.body)

                console.log({
                    
                    name: $("h1#HEADING.heading_title").text(),
                    address: $("div.blEntry.address.clickable span.street-address").text() + $("div.blEntry.address.clickable span.locality").text() +  $("div.blEntry.address.clickable span.country-name").text(),
                    country: $("ul.breadcrumbs li.breadcrumb a[onclick='ta.setEvtCookie('Breadcrumbs', 'click', 'Country', 1, this.href);'] span").text(),
                    region: $("ul.breadcrumbs li.breadcrumb a[onclick='ta.setEvtCookie('Breadcrumbs', 'click', 'Province', 2, this.href);'] span").text(),
                    city: $("ul.breadcrumbs li.breadcrumb a[onclick='ta.setEvtCookie('Breadcrumbs', 'click', 'City', 3, this.href);'] span").text() || 
                      $("ul.breadcrumbs li.breadcrumb a[onclick='ta.setEvtCookie('Breadcrumbs', 'click', 'City', 4, this.href);'] span").text() ||
                      $("ul.breadcrumbs li.breadcrumb a[onclick='ta.setEvtCookie('Breadcrumbs', 'click', 'Island', 4, this.href);'] span").text() || 
                      $("ul.breadcrumbs li.breadcrumb a[onclick='ta.setEvtCookie('Breadcrumbs', 'click', 'NationalPark', 4, this.href);'] span").text(),
                    latitude: lat[1],
                    longitude: lng[1],
                    type: $("span.header_detail.attraction_details div a").text()
                })
            } 
        }
        done();
    }
});

c.queue(["https://www.tripadvisor.ca/Attraction_Review-g154910-d155281-Reviews-Taylor_Lake-Banff_National_Park_Alberta.html",
"https://www.tripadvisor.ca/Attraction_Review-g499213-d13155995-Reviews-St_Michael_s_Catholic_Church-Baddeck_Cape_Breton_Island_Nova_Scotia.html",
"https://www.tripadvisor.ca/Attraction_Review-g154943-d3372352-Reviews-RendezVous_Art_Gallery-Vancouver_British_Columbia.html",
"https://www.tripadvisor.ca/Attraction_Review-g155032-d186130-Reviews-Palais_de_Justice-Montreal_Quebec.html",
"https://www.tripadvisor.ca/Attraction_Review-g154945-d12037423-Reviews-Gage_Gallery_Arts_Collective-Victoria_Victoria_Capital_Regional_District_Vancouv.html",
"https://www.tripadvisor.ca/Attraction_Review-g941453-d12087487-Reviews-Naikoon_Provincial_Park-Graham_Island_Haida_Gwaii_Queen_Charlotte_Islands_Britis.html",
"https://www.tripadvisor.ca/Attraction_Review-g941437-d6509334-Reviews-Naikoon_Agate_Beach_Misty_Meadows_Provincial_Park-Masset_Graham_Island_Haida_Gwai.html",
"https://www.tripadvisor.ca/Attraction_Review-g182150-d3386221-Reviews-Spider_Lake_Provincial_Park-Qualicum_Beach_Vancouver_Island_British_Columbia.html"
])
