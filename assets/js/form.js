// page setup
const formEl = document.querySelector("#post-submission-form")

let formUsernameEl = document.querySelector("#username-input")
let formPostTitleEl = document.querySelector("#post-title-input")
let formPostContentEl = document.querySelector("#post-content-input")
let formSubmitButtonEl = document.querySelector("#form-submit-btn")

formEl.addEventListener('submit', submitPost)

// populate username box if this page has been used before
populateUsernameField()

function populateUsernameField() {
    const storedUsername = localStorage.getItem("username")
    if (storedUsername) formUsernameEl.value = storedUsername
}

function submitPost(event) {
    event.preventDefault()

    formSubmitButtonEl.setAttribute("disabled", "")
    
    const postObj = {
        created: Date.now(),
        username: formUsernameEl.value,
        title: formPostTitleEl.value,
        content: formPostContentEl.value
    }

    if (postObj.title === "" || postObj.content === "") {
        alert("Post title or content cannot be empty!")
        formSubmitButtonEl.removeAttribute("disabled")
        return
    }

    // store username to improve user experience
    localStorage.setItem("username", postObj.username)

    // get already stored posts
    let posts = JSON.parse(localStorage.getItem("posts"))
    if (!posts) posts = []
    
    // add post to stored posts
    posts.push(postObj)

    // push changes to local storage
    localStorage.setItem("posts", JSON.stringify(posts))

    console.log(posts)
    console.log(postObj)
    window.location.href = "/blog.html"
}