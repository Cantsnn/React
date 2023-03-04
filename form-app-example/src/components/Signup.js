import React from 'react'
import { useFormik } from 'formik';
import validationSchema from './validation';

 function
    Signup() {
        const {handleSubmit,handleChange,values, errors, touched, handleBlur} = useFormik({
            initialValues:{
         
              email: '',
              password:'',
              passwordConfirm:''
            },
            onSubmit:(values) => {
              alert(JSON.stringify(values, null, 2));
            },
            validationSchema
          });
    return (
        <div>
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit}>

                <label >Email </label>
                <input
                    name="email"
 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {errors.email && touched.email && <div className='error'>{errors.email}</div> }
                <br />
                <br />


                <label  >Password </label>
                <input
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                />
                {errors.password && touched.password &&  <div className='error'>{errors.password}</div> }

                <br />
                <br />


                <label >Password Confirm </label>
                <input
                    name="passwordConfirm"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.passwordConfirm}
                />
                {errors.passwordConfirm && touched.passwordConfirm &&<div className='error'>{errors.passwordConfirm}</div> }
                
                <br />
                <br />

                <button type="submit">Submit</button>
                <br />
                <br />
                <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}
export default Signup;