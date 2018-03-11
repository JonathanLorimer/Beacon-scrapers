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
              if ($("div.prw_rup.prw_common_bubble_rating.bubble_rating span").attr('content') > 3){
                let regexp = /lat:\s(-?\d\d\.\d{2,13})/
                let regexp2 = /lng:\s(-?\d\d\.\d{2,13})/
                let lat = regexp.exec(res.body)
                let lng = regexp2.exec(res.body)

                let new_obj = {
                  name: $("h1#HEADING.heading_title").text(),
                  address: $("div.blEntry.address.clickable span.street-address").text() + $("div.blEntry.address.clickable span.locality").text() +  $("div.blEntry.address.clickable span.country-name").text(),
                  type: $("span.header_detail.attraction_details div a").text()
                }
              console.log (new_obj)
              if (lat && lng){
                console.log (lat[1])
                console.log (lng[1])
              } else {
                console.log ('lat or long undefined')
              }
              } 
        }
        done();
    }
});

c.queue(["https://www.tripadvisor.ca/Attraction_Review-g155019-d155503-Reviews-Centreville_Theme_Park-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d2644149-Reviews-Fantasy_Fair_at_Woodbine_Centre-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d10492648-Reviews-Kidstown_Water_Park-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d155502-Reviews-Ontario_Place-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d5031404-Reviews-Ripley_s_Aquarium_Of_Canada-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d186704-Reviews-Toronto_Zoo-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d7377917-Reviews-High_Park_Zoo-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d9998155-Reviews-Far_Enough_Farm-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d5031404-Reviews-Ripley_s_Aquarium_Of_Canada-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d185115-Reviews-Toronto_Islands-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d155496-Reviews-High_Park-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d155506-Reviews-Centre_Island-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d185075-Reviews-Edwards_Gardens-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d4833030-Reviews-Wards_Island-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d186805-Reviews-Allan_Gardens_Conservatory-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d186704-Reviews-Toronto_Zoo-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d3497880-Reviews-Tommy_Thompson_Park-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d3355580-Reviews-Bluffers_Park-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d185106-Reviews-Queen_s_Park-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d187007-Reviews-Toronto_Music_Garden-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d1563756-Reviews-Toronto_Beach-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d556744-Reviews-Trinity_Bellwoods_Park-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d4833023-Reviews-Humber_Bay_Park-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d8464532-Reviews-Woodbine_Park-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d2056324-Reviews-Toronto_Botanical_Garden-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d4090851-Reviews-Waterfront_Trail_1000_Islands-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d1903265-Reviews-Hanlan_s_Point_Beach-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d3847516-Reviews-Centennial_Park_Greenhouse-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d4471770-Reviews-Canada_s_Sugar_Beach-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d184776-Reviews-Ashbridge_s_Bay_Park-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d3264600-Reviews-Rouge_Park_Conservation_Area-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d12507140-Reviews-Berczy_Park-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d4832998-Reviews-Colonel_Sam_Smith_Park-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d8347497-Reviews-Rosetta_McClain_Gardens-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d4859653-Reviews-Guild_Park-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d1155483-Reviews-Sunnyside_Park-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d7070406-Reviews-Kay_Gardner_Beltline_Trail-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d8539538-Reviews-Kew_Gardens-Toronto_Ontario.html","https://www.tripadvisor.ca/Attraction_Review-g155019-d185112-Reviews-St_Lawrence_Market-Toronto_Ontario.html"]);