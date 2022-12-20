// defining click event for like button
var count = 0;
var likeElement = document.querySelector("#likeCount")
function addOne() {
    count ++
    likeElement.innerText = count + " like(s)"
}