
let userList = document.getElementById("userList");
console.log("Hej från JS!")
function printUsers(){

    userList.innerHTML="";

    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(ateam =>{

        ateam.sort((a,b) => (a.age > b.age) ? 1 : -1)

        ateam.forEach(user =>{
        
        
            console.log("Namn" + user.name);

            

            let li = document.createElement("li")
            li.innerHTML = `Namn: ${user.name}<br>Email: ${user.email}<br>Title: ${user.title}<br>`;
            

            userList.appendChild(li)
            
        });

    })
}
printUsers();