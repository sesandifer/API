Website creation - Using a developer API to implement a Javascript web project using JSON with jQuery.

            The Petfinder API can return results in either XML
            or JSON. The developers of the API have designed it 
            for use with XML and so the documentation focuses on 
            XML.  Using it with JSON has turned out to be a 
            challenge.  The data is stored as $t: value in
            the JSON object:
            
            "petfinder":{"pets":{"pet":[
            {"description":{"$t":"text description here"}]
            
            which is not the easiest json format to work with.
            However, through the use of a jQuery ajax call, the
            data can be accessed:

            
                $.ajax({
                    dataType: "jsonp",
                    url: -complete url here-,
                    success:(function(data){
                    var sPets = data.petfinder.pets.pet;
                
			And then retrieving the property values:
                            
                for(var q = 0; q < sPets.length; q++){
                    var desc = sPets[q].description.$t;
                    var description='<li>'+desc+'</li>';
                    $('#sid').append(description);
                }
			
            The ajax call returns an object that can be assigned
            to a variable and then read by iterating through and 
            appending each property value to the html document.