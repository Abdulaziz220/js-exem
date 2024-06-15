let a = document.getElementById("id")
let b = document.getElementById("parol")
let c = document.getElementById("btn")
let form = document.createElement("myform")
let q = document.getElementById("contenr")

// let form = document.getElementById("myform")
c.addEventListener("click", ism);

function ism(event) {
    event.preventDefault();
    let username = a.value;
    let password = b.value;

    if (username === 'mmm' && password === '123mmm') {
        alert("Tizimga muvafaqiyatli kirdingiz")
        q.remove()
        let box = document.createElement("div")
        let savol = document.createElement("li")
        let inp = document.createElement("input")
        let clickMe = document.createElement("button")
        let bod = document.querySelector("body")

        box.appendChild(inp)
        box.appendChild(clickMe)

        bod.appendChild(box);


        box.style.display = "flex"
        box.style.justifyContent = "center"
        box.style.alignItems = "center"
        box.style.gap = "10px"

        inp.style.width = "500px"
        inp.style.height = "90px"
        inp.style.borderRadius = "15px"
        inp.style.backgroundColor = "rgb(151, 151, 151)"
        inp.style.fontSize = "30px"
        inp.style.border = "none"

        clickMe.style.width = "200px"
        clickMe.style.height = "100px"
        clickMe.style.borderRadius = "15px"
        clickMe.style.fontSize = "30px"
        clickMe.style.border = "none"


        savol.innerHTML = "savol kiritish"
        savol.style.listStyleType = "none"
        clickMe.appendChild(savol)

        clickMe.addEventListener("click", addTodo);

        function addTodo(event) {
            event.preventDefault();

            let todoDiv = document.createElement("div");

            todoDiv.style.marginTop = "30px"

            let check = document.createElement("input")
            check.setAttribute("type", "checkbox")
            todoDiv.appendChild(check);
            check.style.width = "20px"
            check.style.height = "20px"
            check.style.borderRadius = "30px"

            let text = document.createElement("li");
            text.innerHTML = inp.value;
            text.style.color = "black"
            text.style.listStyleType = "none"
            text.style.fontSize = "40px"
            text.style.marginTop = "40px"
            todoDiv.appendChild(text)

            let btnTrash = document.createElement("button");
            btnTrash.innerHTML = '<i class="fa-solid fa-xmark"></i>'
            btnTrash.style.border = "none"
            btnTrash.style.marginLeft = "320px"
            btnTrash.style.width = "50px"
            btnTrash.style.height = "50px"
            todoDiv.appendChild(btnTrash);
            todoDiv.style.marginInline = "auto"
            todoDiv.style.display = "flex"
            todoDiv.style.justifyContent = "center"
            todoDiv.style.alignItems = "center"
            todoDiv.style.gap = "10px"

            btnTrash.addEventListener("click", function trash(event) {
                todoDiv.remove();
            })

            bod.appendChild(todoDiv)
        }

    } else {
        alert("Noto'g'ri modem ID yoki parol. Iltimos, yana bir bor urinib ko'ring.")
    }

}
