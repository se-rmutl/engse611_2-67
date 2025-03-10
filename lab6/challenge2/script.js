<script>
var parasInMain = document.querySelectorAll("#main p");
for (var i = 0; i < parasInMain.length; i++) {
if (parasInMain[i].innerHTML == "Llamas and Chickens!") {
parasInMain[i].style.color = "red";
}
}
</script>