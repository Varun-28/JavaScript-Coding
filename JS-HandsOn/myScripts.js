// event bubbling and capturing
document.querySelector('#grandparent').addEventListener('click',() => {
    console.log('grandparent clicked!');
}, true);
document.querySelector('#parent').addEventListener('click',() => {
    console.log('parent clicked!');
}, false);
document.querySelector('#child').addEventListener('click',() => {
    console.log('child clicked!');
}, true);

// event delegation use case 1
document.querySelector('#form').addEventListener('keyup', (e) => {
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})

// event delegation use case 2
document.querySelector('#navigation').addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if(e.target.tagName == 'LI'){
        // window.location.href = "/" + e.target.id;
        console.log(e.target.id);
    }
})

// callback, promise and async-await
const posts = [{title:"post1"},{title:"post2"}]

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post,idx) => {
            output += `<li>${post?.title}</li>`;
        })
        console.log(output);
        document.querySelector('#posts').innerHTML = output;
    },1000);
}

// using below code will add post after execution of getPosts so, 3rd post will not be visible

// const createPost = (post) => {
//     setTimeout(() => {
//         posts.push(post);
//     },2000);
// }

// getPosts();
// createPost({title:"post3"});

// callback
// const createPost = (post,callback) => {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     },2000);
// }
// createPost({title:"post3"},getPosts);


// promise
// const createPost = (post) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             let err = false;
//             if(!err){
//                 resolve();
//             }else{
//                 reject('Something went wrong!');
//             }
//         },2000);
//     });
// }

// createPost({title:"post3"})
// .then(getPosts)
// .catch(err => console.log(err));

// async await
const createPost = (post) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            let err = false;
            if(!err){
                resolve();
            }else{
                reject('Something went wrong!');
            }
        },2000);
    });
}

async function init(){
    await createPost({title:"post3"});
    getPosts();
}

init();


