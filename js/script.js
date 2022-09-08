/* navbar open and close */

function openNav() {
    document.getElementById("mySidebar").style.width = "25rem";
    document.getElementById("main").style.marginRight = "25rem";
}
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
}

/* activity */

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll("#myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for(let i=0;i<img.length;i++)
{
    var element = img[i];
    element.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
modal.style.display = "none";
}
