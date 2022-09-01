const posts= [
    { title: 'post 1', body : 'this is title 1'},
{ title: 'post 2', body : 'this is title 1'}
];

function getpost(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post,index)=>{
            output+= `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output
    }, 1000)
}


function createPost(post, callback){
    setTimeout(()=> {
        posts.push(post);
        callback()
    
    },2000)
}





createPost({title:'post 3', body: 'this is title 3'},getpost);

const x = 13

console.log(x)