import React,{useState} from 'react'
import styles from "./Form.module.css"



const Form = () => {
    const [formData,setformData] = useState({});

    const [record,setrecord] = useState([])
    const handleChange = (e)=>{
        const inputName = e.target.name;
        // console.log(e.target)
        if(e.target.type === "checkbox"){
         
           setformData({
               ...formData,[inputName]:e.target.checked,
            
           }) ;
        }
        else if(e.target.type === "file"){
            setformData({
                ...formData,[inputName]:e.target.files,
             
            }) ;
        }else{
            setformData({
               ...formData, [inputName]:e.target.value,
            });
        }
} 

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
        const newRecord = {...formData, id: new Date().getTime().toString()}
       setrecord([...record,newRecord])
    // Data.push([formData])
    }
  return(
      <div>
      <div className={styles.parent}>
          <div>
          <h1>Empolyee Details</h1>
      <form onSubmit={handleSubmit}>
          <div className={styles.name}>
              <label>Username  :-</label>
              <input type="text" name="username" onChange={handleChange} placeholder="Empolyee Name"/>
          </div>
        <div className={styles.salary}>
          <label>salary  :-</label>
          <input type={formData.showsalary ? "text" : "password"} name='salary' onChange={handleChange} placeholder="Privious salary"/>
       </div>
       <div style={{color:"blue",marginBottom:"10px"}}>
              <label>ShOw  </label>
              <input type="checkbox" name="showsalary" onChange={handleChange}/>
          </div>
        <div className={styles.age}>
          <label>Age :- </label>
          <input type="number" name='age' onChange={handleChange} placeholder="Age"/>
       </div>
       <div className={styles.status}>
          <label style={{color:"green"}}>status  :-</label>
          <input type="radio" value="single" name='statusRadio' onChange={handleChange}/>single<br/>
          <input type="radio" value="married" name='statusRadio' onChange={handleChange}/>married
       </div >
       <div className={styles.depart}>
          <label>Department :-</label>
         <select name="Department" onChange={handleChange}>
         <option >select</option>
             <option value="indore">indore</option>
             <option value="outdore">outdore</option>
         </select>
       </div>
       <div className={styles.dob}>
          <label>DOB :-</label>
          <input type="date" name='dob' onChange={handleChange}/>
       </div>
       <div className={styles.file}>
          <label>Experiance certificate  :-  </label>
          <input type="file" name='resume' onChange={handleChange}/>
          <div className={styles.submit}>
              <input type="submit"/>
          </div>
       </div>
      </form>
      </div>
      </div>
      <div className='show'>
          {
     record.map((curEle)=>{
         return(
             <div className='data'>
                 <table className={styles.table}>
                     <tbody >
                         <thead >
                           <td className={styles.table}>Employee User Name
                               <tr>{curEle.username}</tr>
                           </td>
                           <td className={styles.table}>Salary
                               <tr>{curEle.salary}</tr>
                           </td>
                           <td className={styles.table}>Age
                               <tr >{curEle.age}</tr>
                           </td>
                           <td className={styles.table}>Status
                               <tr>{curEle.radio}</tr>
                           </td>
                           <td className={styles.table}>Department
                               <tr>{curEle.Department}</tr>
                           </td>
                           <td className={styles.table}>DOB
                               <tr>{curEle.dob}</tr>
                           </td>
                           <td className={styles.table}>E-Certificate
                               <tr>{curEle.resume}</tr>
                           </td>
                         </thead>
                        
                     </tbody>
                 </table>
             </div>
         )
      }) 
    }
      </div>
      </div>

      
  )
}

export default Form