	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				countryName: $('#selCountry').val(),
				countryCode: $('#selCode').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtCode').html(result['data'][0]['countryCode']);
					$('#txtCountryName').html(result['data'][0]['countryName']);
					$('#txtTimezoneId').html(result['data'][0]['timezoneId']);
					$('#txtSunrise').html(result['data'][0]['sunrise']);
					$('#txtSunset').html(result['data'][0]['sunset']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});
