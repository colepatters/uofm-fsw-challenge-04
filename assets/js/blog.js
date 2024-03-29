
const postsListEl = document.querySelector("#posts-list")

function getDateStringFromMillis(millis) {
    const dateObj = new Date(millis)
    return dateObj.toLocaleString('en-US')
}

function createPostElementFromPost(post) {
    const el = document.createElement("li")
    el.innerHTML = `
        <header>
            <h3>${post.title}</h3>
        </header>
        <section>
            ${post.content}
        </section>
        <footer>
            <span>Posted on ${getDateStringFromMillis(post.created)} by ${post.username}</span>
        </footer>
    `
    el.classList.add('post')
    return el
}

function renderPosts(posts) {
    for (const post of posts) {
        const currentPostAsEl = createPostElementFromPost(post)
        postsListEl.appendChild(currentPostAsEl)
    }
}

const posts = JSON.parse(localStorage.getItem("posts"))
renderPosts(posts)