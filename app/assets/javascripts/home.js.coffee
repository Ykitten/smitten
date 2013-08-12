$ ->
  create_location_only_spark = () ->
    handleNoGeolocation = (errorFlag) ->
      if (errorFlag)
        console.log("Geolocation service failed.")
      else
        console.log("Your browser doesn't support geolocation.")

    # if browser supports geolocation
    if(navigator.geolocation)
      navigator.geolocation.getCurrentPosition((position) ->
        # if success
        window.latitude = position.coords.latitude
        window.longitude = position.coords.longitude
        send_ajax()
      ,
      # if error
      () ->
        handleNoGeolocation(true)
      )
    # If browser doesn't support Geolocation
    else
      handleNoGeolocation(false)

    # once the geolocation succeeds, send the latitude and longitude
    send_ajax = ->
      spark_data =
        latitude: window.latitude
        longitude: window.longitude

      $.ajax
        dataType: "script"
        url: "/update_location"
        method: "POST"
        data: spark_data

  $('#update_location').on("click", create_location_only_spark)