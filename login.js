//to validate enter button


const username = document.querySelector("#username")
const password = document.querySelector("#password")

// if(username == "admin" && password == "admin123"){
//     alert("success")
//     window.location.href = "app.html"
// }else{
//     alert ("please register")
// }
// }

//code handling registration

const register = document.querySelector(".register");
const clients = []

const firstName = document.querySelector(".first")
const lastName = document.querySelector(".last")
const passWord = document.querySelector("#password")

register.addEventListener('click',(e)=>{
let client = {
    firstname:firstName.value,
    lastname:lastName.value,
    password:passWord.value
}
clients.push(client)

localStorage.setItem("client",JSON.stringify(clients))
e.preventDefault()
}
)


const enter = document.querySelector("#enter")
enter.addEventListener("click",(e)=>{
    let getData = localStorage.getItem ("client")
    let newGetData = JSON.parse(getData)

    newGetData.map( element =>{
        if(element.lastname == username.value){
          alert("saved")
          window.location = "app.html"
        }else{
            alert('return')
        }
    })


})
