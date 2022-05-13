$(document).ready(function () {
  $("#view_button").click(function () {
    var url = "https://api.nasa.gov/planetary/apod?api_key=GE5r6C7fP26s1Ta8sSkFkoJtNrvAdddi4FsCj1wS&date="+$("#date").val();   
    fetch(url, {
      method: "GET"      
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        $("#title").html(data.title);
        $("#explanation").html(data.explanation);
        $("#pic").attr("src", data.url);
      })
      .catch(function (error) {
        console.log("Request failed", error);
        alert(error.responseText);
      });
  });
});

// function getPicture() {
//   var myDate = $("#date").val();
//   $.ajax({
//     url: "https://api.nasa.gov/planetary/apod",
//     type: "GET",
//     data: { api_key: "DEMO_KEY", date: $("#date").val() },
//     dataType: "json",
//     success: showPicture,
//     error: noPicture,
//   });
// }
// function showPicture(data) {
//   $("#title").html(data.title);
//   $("#explanation").html(data.explanation);
//   $("#pic").attr("src", data.url);
// }
// function noPicture(error) {
//   alert(error.responseText);
// }
