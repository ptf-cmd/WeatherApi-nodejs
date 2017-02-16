$(document).ready(function(){
	$("#cityquery").submit(function(e){

	    var formInput = {
	        city: $('#city').val(),
			unit: $("input[name='unit']:checked").val()
	    };

		formInput = JSON.stringify({
	        data: formInput
	    });

		var url = "/weather?unit=" + $("input[name='unit']:checked").val();

		if ( $("#city").val() != "" ) {
			url += ( "&city=" + $("#city").val() );
		}

		console.log(url);

	    $.ajax({
	      url: url,
	      type:"POST",
	      data: formInput,
	      contentType:"application/json",
	      dataType:"JSON",
	      success: function(data){
			$("#div1").append("<p>" + JSON.stringify(data) + "</p>")
			$("#cityData").append("<p>Here is where data goes</p>")
			$("#weatherImg").attr('src','http://openweathermap.org/img/w/' + data.weather[0].icon + '.png')
	      }
	    })
	    e.preventDefault();
	})
});
