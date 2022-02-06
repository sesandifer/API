

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

    $("#runBreedList").click(function(event){
	$('#list').empty();
    var apiKey = "dbd8058845ca77d360619bf5f8a371af";
	var url = "http://api.petfinder.com/breed.list?animal=dog&key=" + apiKey + "&format=json&callback=?"
    $(document).ready(function(){
        $.ajax({
            dataType: "jsonp",
            url: url,
            success:(function(data){
                var breeds = data.petfinder.breeds.breed;
				
				for(var i in breeds)
				{
					var text = breeds[i].$t;

					var output='<li>'+text+'</li>';
					$('#list').append(output);
				}
            })
        });
    });
	event.preventDefault();
    });
});

