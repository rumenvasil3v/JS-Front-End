function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';

    // Get HTML Elements
    const postsButton = document.getElementById('btnLoadPosts');
    const selectElementsPosts = document.getElementById('posts');
    const viewButton = document.getElementById('btnViewPost');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');
    
    postsButton.addEventListener('click', function() {

        fetch(postsURL)
            .then(response => response.json())
            .then(result => {
                const posts = result;

                for (const post in result) {
                    currentPostId = result[post].id.toString();
                    currentPostTitle = result[post].title;
                    currentPostBody = result[post].body;

                    const optionElement = document.createElement('option');
                    optionElement.setAttribute('value', post);

                    optionElement.text = currentPostTitle;
                    selectElementsPosts.appendChild(optionElement);
                }

                viewButton.addEventListener('click', function() {
                    fetch(commentsURL)
                        .then(response => response.json())
                        .then(result => {
                            postComments.textContent = '';

                            const currentOption = selectElementsPosts.options[selectElementsPosts.selectedIndex];
                            postTitle.textContent = currentOption.text;

                            const currentPosts = Object.entries(posts);
                            
                            const findPost = currentPosts.find(([objectKey, objectValue]) => {
                                return currentOption.value === objectKey;
                            });

                            const post = findPost[1];
                            postBody.textContent = post.body;

                            const comments = Object.values(result);
                            
                            for (const comment of comments) {
                                const currentCommentPostId = comment.postId.toString();
                                
                                if (currentCommentPostId === currentOption.value) {
    
                                    const liElement = document.createElement('li');
                                    liElement.textContent = comment.text;
    
                                    postComments.appendChild(liElement);
                                }
                            }
                        })
                        .catch(error => console.log(error));
                });

            })
            .catch(error => console.log(error));

    });
}

attachEvents();