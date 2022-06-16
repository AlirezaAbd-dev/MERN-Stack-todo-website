window.addEventListener("load", e => {
    const button = document.getElementById("signin")
    button.addEventListener("click", e => {
        e.preventDefault()
        const user = document.getElementById("your_name").value
        const password = document.getElementById("your_pass").value

        if (!user || !password) {
            return alert("لطفا فیلدها را پر کنید!")
        }

        const data = {
            user: user,
            password: password
        }

        axios.post("http://localhost:3000/api/user/login", data).then((res) => {
            localStorage.setItem("token",res.headers["x-auth-token"])
            window.location.assign("../../index.html")
        }).catch((err) => {
            alert(err.response.data);
            document.getElementById("login-form").reset();
        })
    })
})