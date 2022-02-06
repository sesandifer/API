

$(document).ready(function () {
    $('.nav li').hover(
      function () {
        $('ul', this).fadeIn();
      },
      function () {
        $('ul', this).fadeOut();
      }
    );
  }
);

$(document).ready(function(){

    $("#runShelterList").click(function(event){

    var apiKey = "dbd8058845ca77d360619bf5f8a371af";
	var url = "http://api.petfinder.com/shelter.listByBreed?animal=dog&breed=Beagle&key=" + apiKey + "&format=json&callback=?"
    $(document).ready(function(){
        $.ajax({
            dataType: "jsonp",
            url: url,
            success:(function(data){
				var shelters = data.petfinder.shelters.shelter;
				
				for(var q = 0; q < shelters.length; q++){
					var SID = shelters[q].id.$t;
						var shelterID='<li>'+SID+'</li>';
						$('#sid').append(shelterID);
						
					var SCITY = shelters[q].city.$t;
						var shelterCity='<li>'+SCITY+'</li>';
						$('#cid').append(shelterCity);
						
					var SSTATE = shelters[q].state.$t;
						var shelterState='<li>'+SSTATE+'</li>';
						$('#stid').append(shelterState);
						
					var SPHONE = shelters[q].phone.$t;
						var shelterPhone='<li>'+SPHONE+'</li>';
						$('#pid').append(shelterPhone);
				}
            })
        });
    });
	event.preventDefault();
    });
});

