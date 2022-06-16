const token = localStorage.getItem('token');
  if (!token)
    window.location.assign("./login/login.html")

window.addEventListener("load", e => {
    const button = document.querySelector("button")
    let input = document.getElementById("form3").value
    let ul= document.querySelector("ul")

    axios.get("http://localhost:3000/api/list/getlist").then((res) => {
        res.data.map((item,index) =>`
        <li
            class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div class="d-flex align-items-center">
                    <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                        ${item.title}
                </div>
                <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                    <i class="fas fa-times text-primary"></i>
                </a>
        </li>
        `)
    })

    button.addEventListener("click",(e)=>{

    })
})