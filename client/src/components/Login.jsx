import {Link, useNavigate} from 'react-router-dom'
import {Formik,Form,Field,ErrorMessage} from 'formik'

import {loginSchema} from '../validation/registerValidation'
import image from '../assets/images/register/signin-image.jpg'
import { login } from '../services/todosServices'
const Login=()=>{

  const navigate=useNavigate()

  const formSubmit=async({user,password})=>{
    try{
      const result=await login(user,password)
      console.log(result);
      if(result.status===200) {
        localStorage.setItem('token',result.headers['x-auth-token'])
        navigate('/todos')
      }
    }catch(e){
      console.log(e.response.data);
    }
  }

    return(
      <Formik 
      initialValues={{
        user:'',
        password:''
      }}
      validationSchema={loginSchema}
      onSubmit={(values)=>{
        formSubmit(values)
      }}
      >
    <section style={{marginTop:80}} className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={image} alt="login" />
              </figure>
              <Link
                to={'/register'}
                className="signup-image-link">
                Create an account
                </Link>
            </div>

            <div className="signin-form">
              <h2 className="form-title">login</h2>
              <Form className="register-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="user">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                  <Field
                    type="text"
                    name="user"
                    id="user"
                    placeholder="Username"
                  />
                </div>
                  <ErrorMessage name="user" render={msg=> <div style={{color:'red'}}>{msg}</div>}/>
                <div className="form-group">
                  <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                  <ErrorMessage name="password" render={msg=> <div style={{color:'red'}}>{msg}</div>}/>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                  />
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
      </Formik>
    )
}

export default Login