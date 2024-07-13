document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    // Apri il modal quando si clicca su un'immagine
    var images = document.getElementsByClassName("photo-img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

    // Chiudi il modal quando si clicca sulla X
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Chiudi il modal quando si clicca fuori dall'immagine
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Gestisci la condivisione
    var shareButtons = document.getElementsByClassName("share-button");
    for (var i = 0; i < shareButtons.length; i++) {
        shareButtons[i].onclick = function(e) {
            e.preventDefault();
            var photoName = this.getAttribute("data-photo");
            var shareUrl = "https://Mamete91.github.io/Astrofoto/images/" + photoName;
            var shareText = "Guarda questa fantastica foto astronomica!";
            var facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareUrl);
            window.open(facebookShareUrl, "_blank");
        }
    }
});
