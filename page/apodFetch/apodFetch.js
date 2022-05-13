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
