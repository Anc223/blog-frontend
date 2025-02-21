// import React, { useState } from 'react'

// function Frms() {
//     const [name, setName] = useState({ username: '', password: '' });

//     function change(e) {
//         setName({ ...name, [e.target.name]: e.target.value });
//     }
//     const submit = (e) => {
//         e.preventDefault()
//         console.log(name)
//     }
//     let username=anshu;
//     let password=aaa;
//     if(username!=password){
//         alert('Login Successfully')
//     }
    
//     return (
//         <div className='frm-main'>
//             <form onClick={submit}>
//                 <table>
//                     <tr><td><input type='textbox' placeholder='Username' onChange={change} name='username' required></input></td></tr>
//                     <tr><td><input type='textbox' placeholder='Password' onChange={change} name='password' required></input></td></tr>
//                     <button className='frm-btn'>Submit</button>
//                 </table>
//             </form>
//         </div>
//     )
// }

// export default Frms