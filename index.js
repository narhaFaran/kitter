fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(json => {
        let users = document.getElementById("users");
        for (let i = 0; i < 8; i++) {
            let d = document.createElement("div");
            d.className = "user-item";

            fetch('https://api.thecatapi.com/v1/images/search')
                .then(catResponse => catResponse.json())
                .then(catJson => {
                    let imgUrl = catJson[0].url;
                    d.innerHTML = `<img src="${imgUrl}" alt="User Profile Picture"><strong>${json[i].name}</strong>`;
                    users.appendChild(d);
                });
        }
    });

fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(json => {
        let posts = document.getElementById("posts");
        for (let i = 0; i < 3; i++) {
            let d = document.createElement("div");
            d.className = "post-item";

            fetch('https://api.thecatapi.com/v1/images/search')
                .then(catResponse => catResponse.json())
                .then(catJson => {
                    let imgUrl = catJson[0].url;
                    d.innerHTML = `${json[i].title}<br><p>${json[i].body}</p><img src="${imgUrl}" alt="Cat Image" style="width:100%; border-radius:5px;">`;
                    posts.appendChild(d);
                });
        }
    });

fetch('https://jsonplaceholder.typicode.com/comments/')
    .then(response => response.json())
    .then(json => {
        let comments = document.getElementById("comments");
        for (let i = 0; i < 10; i++) {
            let d = document.createElement("div");
            d.className = "comment-item";
            d.innerHTML = `<strong>${json[i].email}</strong><br><p>${json[i].body}</p>`;
            comments.appendChild(d);
        }
    });
