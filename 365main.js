// slide show parts   -----------

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}





function mySerach() {
    var moviebox = document.getElementsByClassName("moviebox");
    var text = document.getElementById('myInput');
    console.log(text.value);

    filter = text.value.toUpperCase();
    console.log(filter);

    for (i = 0; i < moviebox.length; i++) {
        x = moviebox[i].getElementsByTagName('b')[0].innerText;
        console.log(x);
        c = x.toUpperCase();
        console.log(c);
        f = c.indexOf(filter);
        if (f > -1) {
            console.log(filter, "in list ");
            moviebox[i].style.display = "";
        }
        else {
            console.log(filter, "not in list");
            moviebox[i].style.display = "none";
        }
    }
}


function genre(category) {
    var moviebox = document.getElementsByClassName("moviebox")
    for (i = 0; i < moviebox.length; i++) {
        if (category == "Drama") {
            var drama = document.getElementsByClassName('Drama');
            for (j = 0; j < drama.length; j++) {
                drama[j].style.display = "";
            }
            var action = document.getElementsByClassName('Action');
            for (k = 0; k < action.length; k++) {
                action[k].style.display = "none";
            }
            //   console.log("parent showen");
        }
        else if (category == "Action") {

            var action = document.getElementsByClassName('Action');
            for (j = 0; j < action.length; j++) {
                action[j].style.display = "";
            }
            var drama = document.getElementsByClassName('Drama');
            for (k = 0; k < drama.length; k++) {
                drama[k].style.display = "none";
            }
            //   console.log("child showen");
        }
        else if (category == "All") {
            var all = document.getElementsByClassName('All');
            for (j = 0; j < all.length; j++) {
                all[j].style.display = "";
            }
        }
    }
}