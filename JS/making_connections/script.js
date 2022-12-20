console.log("page loaded...");

// change user name

var nameTag = document.querySelector("#nameTag")
function changeName() {
    nameTag.innerText = "Jessica P"
}

function accept(){
    var request = document.querySelector("#request")
    request.remove()
    requestBadge.innerText--
    connectBadge.innerText++
}

function decline() {
    var request = document.querySelector("#request")
    request.remove()
    requestBadge.innerText--
}

