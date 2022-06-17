window.addEventListener("load",e=>{
    const submit=document.getElementById("signup")
    submit.addEventListener("click",e=>{
        e.preventDefault()
        const user=document.getElementById("name").value
        const password=document.getElementById("pass").value
        const repass=document.getElementById("re_pass").value

        if (!user||!password||!repass) {
            return alert("لطفا فیلدها را پر کنید!")
        }
        if(password!==repass){
            return alert("رمز ورود مقایرت ندارد!")
        }
        
        const data={
            user:user,
            password:password
        }

        axios.post("http://localhost:3000/api/user/register",data).then(res=>{
            localStorage.setItem("token",res.headers["x-auth-token"])
            window.location.assign("../../../public/index.html")
        }).catch(err=>{
            alert(err.response.data);
            document.getElementById("register-form").reset()
        })

    })
})