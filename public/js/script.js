const token = localStorage.getItem('token');
if (!token)
    window.location.assign("./login/login.html")
    let data;

function active(id) {
    const userId=data.data.find(item => item._id === id)

    axios.get(`http://localhost:3000/api/list/editTodo/${userId._id}`,
        {
            headers: {
                "x-auth-token": localStorage.getItem('token')
            }
        }).then(res => {
            show()
        }).catch((err => {
            alert(err.response.data);
        }));
}

function onDeleteTask(id) {
    axios.delete(`http://localhost:3000/api/list/deleteTodo/${id}`, 
    {
        headers: {
            "x-auth-token": localStorage.getItem('token')
        }
    }).then(res => {
        show()
    }).catch((err => {
        alert(err.response.data);
    }))
}

    const button = document.querySelector("button")
    let ul = document.querySelector("ul")
   
    function show() {

        axios.get("http://localhost:3000/api/list/getlist", {
            headers: {
                "x-auth-token": localStorage.getItem('token')
            }
        }).then((res) => {
            data = res;
            ul.innerHTML = res.data.map((item, index) => `
            <li
            class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
            <div onclick="active('${item._id}')" class="d-flex align-items-center ${check(item._id)}" )'>
            ${item.title}
            </div>
            <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
            <i class=" fa fa-trash-alt" onclick="onDeleteTask('${item._id}')"></i>
            </a>
            </li>
            `).join("")
            return false
        }).catch((err) => {
            console.log(err.message);
        })
    }
    show()

    button.addEventListener("click", (e) => {
        let input = document.getElementById("form3").value
        const data = { title: input }


        axios.post("http://localhost:3000/api/list/addTodo", data, {
            headers: {
                "x-auth-token": localStorage.getItem('token')
            }
        }).then(res => {
            show()
        }).catch((err) => {
            console.log(err);
        })
    })



    function check(id) {
        const todo = data.data.find(item => item._id == id)
        if (todo.checked == true) {
            return "done"
        } else {
            return ""
        }
    }