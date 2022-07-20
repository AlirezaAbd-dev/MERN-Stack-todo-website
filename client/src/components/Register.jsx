import {Link, useNavigate} from 'react-router-dom'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import {useImmer} from 'use-immer'

import image from '../assets/images/register/signup-image.jpg'
import {regsiterSchema} from '../validation/registerValidation'
import { register } from '../services/todosServices'

const Register = () => {

  const navigate=useNavigate()

  const [user,setUser]= useImmer({})

  const submitForm =async (username,password) => {
    setUser({username,password})
    try{
      const result= await register(username,password)
      if(result.status===200){
        const token=result.headers['x-auth-token']
        localStorage.setItem('token', token)
        navigate('/todos')
      }
    }catch(e){
      console.log(e.response);
    }
  }

  return (
    <Formik 
    initialValues={{
      user:'',
      password:'',
      confirmPassword:''
    }}
    validationSchema={regsiterSchema}
    onSubmit={(values)=>{
      setUser({})
      submitForm(values.user,values.password)
    }}>
    <section style={{ marginTop: 80}} className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <Form className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="user">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <Field
                id="user"
                name="user"
                type="text"
                placeholder="user"/>
              </div>
              <ErrorMessage name='user' render={msg=> <div style={{color: 'red'}}>{msg}</div>}/>
              <div className="form-group">
                <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
                <ErrorMessage name='password' render={msg=> <div style={{color: 'red'}}>{msg}</div>}/>
              <div className="form-group">
                <label htmlFor="confirmPassword"><i className="zmdi zmdi-lock"></i></label>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Re-Enter Password"
                  required
                />
              </div>
                <ErrorMessage name='confirmPassword' render={msg=> <div style={{color: 'red'}}>{msg}</div>}/>
              <div className="form-group form-button">
                <Field
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Register"
                />
              </div>
            </Form>
          </div>
          <div className="signup-image">
            <figure>
              <img src={image} alt='register'/>
            </figure>
            <Link
            to={'/login'}
              className="signup-image-link">
              I am already member
              </Link>
          </div>
        </div>
      </div>
    </section>
    </Formik>
  )
}

export default Register