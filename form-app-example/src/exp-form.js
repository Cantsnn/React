import { useFormik } from 'formik';


function exForm() {

    const {handleSubmit,handleChange,values} = useFormik({
      initialValues:{
        firstName: 'Can',
        lastName: 'Tosun',
        email: 'cantosun@gmail.com',
        gender: 'male',
        hobbies: [],
        country:'turkey'
      },
      onSubmit:(values) => {
        alert(JSON.stringify(values, null, 2));
      }
    });
    return (
      <div className="App">
        <h1>Sign Up</h1>
   
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input name="firstName" value={values.firstName} onChange={handleChange} />
  
              <br />
              <br />
  
              <label htmlFor="lastName">Last Name</label>
              <input name="lastName" value={values.lastName} onChange={handleChange} />
              <br />
              <br />
  
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
              />
              <br />
              <br />
  
  
              <span>Male</span>
              <input type="radio" name='gender' value="male" onChange={handleChange} 
                checked={values.gender === 'male'}></input>
              <span>Female</span>
              <input type="radio" name='gender' value="female" onChange={handleChange} 
                checked={values.gender === 'female'}></input>
  
              <br />
              <br />
  
              <div>
              <input type="checkbox" name='hobbies' value="Football" onChange={handleChange}/>
              Football
              </div>
              <div>
              <input type="checkbox" name='hobbies' value="Cinema" onChange={handleChange}/>
              Cinema
                
              </div>
  
              <div>
              <input type="checkbox" name='hobbies' value="Photography" onChange={handleChange}/>
              Photography
  
              </div>
  
              <br />
              <br />
  
              <select name='country' value={values.country} onChange={handleChange}>
                <option value='turkey'> Turkey</option>
                <option value='england'> England</option>
                <option value='usa'> USA</option>
              </select>
              <br />
              <br />
              <button type="submit">Submit</button>
              <br />
              <br />
              <code>{JSON.stringify(values)}</code>
            </form>
         
      </div>
    );
  }
  
  export default exForm;
  