//task 11.1
{//sychronous vs asynchronous
console.log("1 - start");
console.log("2 - middle");
console.log("3 - end");

console.log("1 - start");
setTimeout(() =>{
console.log("2 - this is delayed");
}, 2000);
console.log("3 - end")


//predict the output
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
setTimeout(()=> console.log("D"),100);
console.log("E");

//callback pattern
function fetchData(callback){
    setTimeout(()=> {
        const data ={name: "john",age: "30"};
        callback(data);
    }, 1000)
}
fetchData(function(data){
    console.log("Data received;",data);
});
function loadUser(UserId, callback){
    setTimeout(()=> {
        const user ={
            id: UserId,
            name: "Alice",
            age: 25
        }; callback(user);
    }, 1500);
}
loadUser(1, function(user){
    console.log("User loaded;", user);
});
}

//task 11.2
{
    //experience callback hell
function getUserData( userId, callback){
    setTimeout(()=>{
        callback({id: userId, name:"string"});
    }, 1000);
}

function getUserPosts( userId, callback){
    setTimeout(()=>{
        callback([
            {id: 1, title: "post 1"},
            {id: 2, title:"post 2"}
        ]);
    }, 1000);
}

function getPostComments( postId, callback){
    setTimeout(()=>{
        callback([
            {id: 1, text:"great post"},
            {id: 2, text:"thanks for sharing"}
        ]);
    }, 1000)

}
// the nightmare
getUserData(1, function(user) {
    console.log("user:",user);
  getUserPosts(user.id, function(posts) {
    console.log("posts:",posts);
    getPostComments(posts[0].id, function(comments) {
         console.log("comments:",comments);
    });
    });    
    
});  

//promise to the rescue
const mypromise = new Promise((resolve, reject) =>{
    const success = true;
    setTimeout(()=>{
        if(success){
            resolve("It worked!");
        }
        else{
            reject("Something went wrong");
        }
    }, 1000)
});

//using a promise
mypromise
.then(result =>{
    console.log("Success:",result);
})
.catch(error=>{
    console.log("Error:",error)
});
}
{

function getUserData(userId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(userId > 0){
                resolve({id: userId, name: "John"});
            }else{
                reject("Invalid user ID")
            }
        },1000)
    });


}

function getUserPosts(userId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(userId > 0){
                resolve([
                    {id: 1, title:"post 1"},
                    {id: 2, title: "post 2"}
                ]);
            }else{
                reject("No posts found")
            };
        }, 1000);
    });
}


function getPostComments(postId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(postId > 0){
                resolve([
                    {id: 1, text: "Great post!"},
                    {id: 2, text:"Nice one!"}
                ]);
        }else{
            reject("No comments");
        }
    }, 1000);
});
}



//task 11.3

    //after refactoring to promises
getUserData(1)
.then(user=>{
    console.log("user:", user);
    return getUserPosts(user.id)
})
.then(posts=>{
    console.log("posts:",posts)
    return getPostComments(posts[0].id);

})
.then(comments=>{
    console.log("comments:", comments);
})
.catch(error =>{
    console.log("Error:", error)
});

//promise.all
const promise1 = getUserData(1);
const promise2 = getUserData(2);
const promise3 =getUserData(3);
Promise.all([promise1, promise2, promise3])
.then(results =>{
    console.log("All users:", results);
})
.catch(error =>{
    console.log("One failed:", error)
});

//promise.race
const fast = new Promise(resolve => setTimeout(()=> resolve("fast!"), 100));
const slow = new Promise(resolve => setTimeout(()=> resolve("slow!"), 500));

Promise.race([fast,slow])
.then(result =>{
    console.log("Winner:", result);
});


    function getUserData(userId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id: userId, name:"user" + userId});
        }, 1000);
    });
}

Promise.all([
    getUserData(1),
    getUserData(2),
    getUserData(3)
])
.then(users =>{
    console.log("All users:",users);
    users.forEach(user =>{
        console.log(user.name);
    });
})
.catch(error =>{
    console.log("Error:", error);
});
}
//task 11.4
{
    //converting to async/Await
    function getDataWithPromises(){
        return getUserData(1)
        .then(user => getUserPosts(user.id))
        .then(post=> getPostComments(post[0].id))
        .then(comments => comments);
    }
    async function getDataWithAsync(){
        const user = await getUserData(1);
         const posts = await getUserPosts(user.id);
          const comments= await getPostComments(posts[0].id);
          return comments;
    }
  getDataWithAsync().then(comments => console.log(comments));
  
  async function main(){
    const comments = await getDataWithAsync();
    console.log(comments);
  }
//try/catch
async function fetchUserData(userId){
    try{
        const user = await getUserData(userId);
        const posts = await getUserPosts(user.id);
        return{user, posts};
    }catch(error){
        console.log("Failed to fetch:", error);
        throw error;
    }

}

//parallel with async/await

async function getAllUsers(){
    //slow
    const user1 = await getUserData(1);
    const user2 = await getUserData(2);
    const user3 = await getUserData(3);
    //fast
    const[ul, u2, u3] = await Promise.all([
        getUserData(1),
         getUserData(2),
          getUserData(3)

    ]);
return[u1, u2,u3];

async function getEverything(){
    try{
        const user = await getUserData(1);
        console.log("user:",user);
        const posts = await getUserPosts(user.id);
        console.log("posts:", posts);
        const comments = await getPostComments(post[0].id);
        console.log("comments:", comments);
    }catch(error){
        console.log("Error:",error)
    }
}
    
    
}

}
//task 12.1 fetch api basic
{
//basic fetch
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response =>{
    console.log("Response object:", response);
    console.log("status:", response.status);
    console.log("OK:",response.ok);
    return response.json();
})
.then(data =>{
    console.log("User data:",data)
})
.catch(error=>{
    console.log("Error:", error)
});

//fetch with async/await
async function getUser(id) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);

        }
        const data = await response.json();
        return data;
    }catch(error){
        console.log("Failed to fetch user:", error);
    }

    
}
async function main(){
    const user = await getUser(1);
console.log(user);
}
main();

async function getSingleUser() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/user/1");
        const data = await response.json();
        console.log("Single user:",data);
        }catch (error){
            console.error(error)
        }
    
}
getSingleUser();

async function getAllUsers(){
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/user");
        const data = response.json();
        console.log("All users:", data);
    }catch(error){
        console.error(error);
    }
    
}
getAllUsers();


async function getUserPosts(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/user/1/posts");
        const data = await response.json();
        console.log("posts:", data);

    }catch(error){
        console.error(error);
    }
    
}getUserPosts();


}

//task 12.3
{




}









