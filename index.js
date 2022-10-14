const updateView = (data) => {
    const el = document.querySelector('p');
    el.textContent = data;
}

const renderPostToView = (posts) => {

    const parent = document.querySelector('section');


    posts.forEach((post) => {
        const p = document.createElement('p');
        p.textContent = post.title

        parent.appendChild(p)
    })


}

const fetchPostsByUserId = (userId) => {

    const request = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    return request.then((res) => res.json());
}

const handleError = (errorMsg, errorWindow = 5) => {
    const el = document.querySelector('div.errors');

    el.textContent = errorMsg

    el.classList.add('visible')

    setTimeout(() => {
        
        el.classList.remove('visible')

    }, 1000 * errorWindow);
}

const request = fetch('https://jsonplaceholder.typicode.com/usersasdasdasdasd/1')

request
.then((resp) => resp.json()) 
.then(data => {

    if (!data['email']) {
        throw 'An error has ocurred, please try again later!'
    }

    updateView(data.email);

    return fetchPostsByUserId(data.id)
})
.then((posts) => {

    renderPostToView(posts);


})
.catch((err) => {

    handleError(err, 15)



})