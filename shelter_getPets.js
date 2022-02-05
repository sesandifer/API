

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

    $("#runPetList").click(function(event){

    var apiKey = "dbd8058845ca77d360619bf5f8a371af";
	var url = "http://api.petfinder.com/shelter.getPets?id=AL139&key=" + apiKey + "&format=json&callback=?"
    $(document).ready(function(){
        $.ajax({
            dataType: "jsonp",
            url: url,
            success:(function(data){
				var sPets = data.petfinder.pets.pet;
				
				for(var q = 0; q < sPets.length; q++){
					var desc = sPets[q].description.$t;
					var description='<li>'+desc+'</li>';
											
					var photo = sPets[q].media.photos.photo[2].$t;
					var imSrc = '<img src="' + photo + '"width="180px">';
										
					$('#sid').append(imSrc);
					$('#sid').append(description + "<br><br>");
				}
            })
        });
    });
	event.preventDefault();
    });
});

