let index = 1; //starting point
slideShow(index);

//arrow
const prev = document.querySelector('.arrow-prev');
const next = document.querySelector('.arrow-next');

console.log(prev);

prev.addEventListener("click", function () {
    slideShow(index -= 1);
});

next.addEventListener("click", function () {
    slideShow(index += 1);
});

function slideShow(x) {
    let profilePic = document.getElementsByClassName("profile-image");
    let profileQuotes = document.getElementsByClassName("quotes");

    if (x > profilePic.length) { index = 1 };
    if (x < 1) { index = profilePic.length };

    for (let i = 0; i < profilePic.length; i++) {
        profilePic[i].style.display = "none";
        profileQuotes[i].style.display = "none";
    }

    profilePic[index - 1].style.display = "block";
    profileQuotes[index - 1].style.display = "block";
}