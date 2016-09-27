function fill_info(data){
  var html = "<div class='address-group'><div class='address'>"+data.address+"<i class='fa fa-times' aria-hidden='true' id='close-button'></i></div><div class='rooftop-img'><img src='../assets/photos/"+data.photo+"'></div><div class='caption'>"+data.photog+" / The Chronicle</div><div class='setting'><span class='bold'>Setting:</span> "+data.setting+"</div><div class='view'><span class='bold'>View:</span> "+data.view+"</div><div class='hassle'><span class='bold'>Hassle factor:</span> "+data.hassle+"</div><div class='payoff'><span class='bold'>Payoff:</span> "+data.payoff+"</div></div>";
  return html;
}

// clicking for desktop map interactive
var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));
qsa(".map-group").forEach(function(group,index) {
  group.addEventListener("click", function(e) {
    document.querySelector("#tooltip").classList.remove("hide");
    document.querySelector(".tooltip").innerHTML = fill_info(mapData[index]);
    if (document.querySelector(".selected")) document.querySelector(".selected").classList.remove("selected");
    e.target.parentElement.classList.add("selected");
    var tooltip = document.querySelector(".tooltip");
    var bounds = this.getBoundingClientRect();
    var x = e.clientX - bounds.left;
    var y = e.clientY - bounds.top;
    tooltip.style.left = x + 10 + "px";
    tooltip.style.top = y - 10 + "px";
    tooltip.classList[x > bounds.width / 2 ? "add" : "remove"]("flip");

    document.querySelector('#close-button').addEventListener('click', function(){
      console.log("click");
      document.querySelector("#tooltip").classList.add("hide");
    });
  });
});
