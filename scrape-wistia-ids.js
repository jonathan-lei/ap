
/*
This function will loop through a page's units and retrieve the Wistia code
*/

async function retrieveCodes(){

    var table = document.querySelector("#studentIndex > div.widget-wrapper > div > div > div > div.UnitContent > section.UnitContent--topics > table > tbody").children;
    var codes = "";

    for(var i = 1; i < table.length; i++){
        var subchildren = document.querySelector("#studentIndex > div.widget-wrapper > div > div > div > div.UnitContent > section.UnitContent--topics > table > tbody > tr:nth-child("+i+") > td.MuiTableCell-root.MuiTableCell-body.Subunit--resources-container > div > ul").children;

        for(var j = 1; j < subchildren.length+1; j++){
            await document.querySelector("#studentIndex > div.widget-wrapper > div > div > div > div.UnitContent > section.UnitContent--topics > table > tbody > tr:nth-child("+i+") > td.MuiTableCell-root.MuiTableCell-body.Subunit--resources-container > div > ul > li:nth-child("+j+") > div > a:nth-child(1)").click();
            await new Promise(r => setTimeout(r, 1000));
            codes=codes+","+(document.getElementsByTagName("video")[0].innerHTML.substring(97,107));
            await new Promise(r => setTimeout(r, 1000));
            await document.querySelector("#studentIndex > div:nth-child(4) > div > div > div.ScreenModal__topbar.ScreenModal__topbar--gray > div.ScreenModal__topbar__right > a").click();
        }
    }
    return codes;
}

/*
This function will click on each unit on the page and then calls the retrieveCodes function for each individual unit 
*/

async function getUnits(){

    var units = document.querySelector("#studentIndex > div.widget-wrapper > div > div > div > div.widget-top > div > div > div").children;

    var result = "";    

    for(var i = 1; i < units.length-1; i++){
        units[i].click();
        await new Promise(r => setTimeout(r, 1000));
        result = result + await retrieveCodes();
    }
    
    result = result.substring(1)

    console.log(result);

}

// This calls the first function to start looping through the units
getUnits();
