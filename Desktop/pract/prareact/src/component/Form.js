import React, {  useState} from 'react'

const Form=()=>{
    const [email,setEmail]= useState("");
    const [password,setPassword] = useState("");
    const [allEntry,setAllEntry]=useState([]);
    const submitForm=(e)=>{
        e.preventDefault();
        const newEntry ={email:email,password:password};
        setAllEntry([...allEntry,newEntry])
    }

        return(
            <>
            <h1>login page</h1>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label  htmlFor="email">Email:<br/></label>
                    <input type="email" name="email" id="email" autoComplete="off" value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                        
                </div>
                <div>
                    <label  htmlFor="password">Password:<br/></label>
                    <input type="password" name="password" id="password" autoComplete="off" value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button className="btn" type="submit">Login</button>
            </form>
            <div>
                {
                    allEntry.map((curElem)=>{
                        return (
                            <div className="Datastyle">
                                <p>{curElem.email}\\\{curElem.password}</p>
                                
                            </div>
                        )
                    })
                }

            </div>
            </>
    )
}
export default Form;