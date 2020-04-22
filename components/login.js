import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React,{useState} from "react"
import { Redirect } from 'react-router-dom'
import { render } from "react-dom";


const UsersQuery = gql`
query getUsers{
        users{
                id
                userName
                password
                role
                isActive
        }
}
`
;
 
function Login(){

let AloggedIn=false;
let SloggedIn=false;
let TloggedIn=false;

const [userName, setUserName]=useState("");
const [password,setPassword]= useState("");


        if(AloggedIn){
                return <Redirect to={`/components/admin`} />
                
            }
           else if(SloggedIn){
                return <Redirect to={`/components/student`} />
            }
            else if(TloggedIn){
                return <Redirect to={`/components/teacher`} />
            }
        
            const {data}=useQuery(UsersQuery)

        return(
                <form name="myForm" 
                
                onSubmit={e=>{
                       
                        submitForm(data,userName,password,AloggedIn,SloggedIn,TloggedIn)
                        
                        //    { data.users.map(user=>{
                        //             if(userName===user.userName && password===user.password && "student"===user.role){
                        //                 localStorage.setItem("token", "fsdfsdfrg")
                        //                 SloggedIn:true;
                                        
                        //             }
                
                        //             else if(userName===user.userName && password===user.password && "admin"===user.role){
                        //                 localStorage.setItem("token", "vghvhvhjh")
                        //                 AloggedIn:true;
                        //             }
                
                        //             else if(userName===user.userName && password===user.password && "teacher"===user.role){
                        //                 localStorage.setItem("token", "bfddfsd")
                        //                 TloggedIn:true;
                        //             }
                                    
                
                        //         })}
                        }} className="boxfield">
                        <h1>Login</h1>
                        <label className="side">Email</label>
                        <input className="inputfield" type="email"  value={userName} onChange={(e)=>setUserName(e.target.value)} />

                        <label className="side">Password</label>
                        <input className="inputfield" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
                </form>
               
        )
}

function submitForm(e,data,userName,password,AloggedIn,SloggedIn,TloggedIn){
        e.preventDefault();
       
        { data.users.map(user=>{
                    if(userName===user.userName && password===user.password && "student"===user.role){
                        localStorage.setItem("token", "fsdfsdfrg")
                        SloggedIn=true
                        
                    }

                    else if(userName===user.userName && password===user.password && "admin"===user.role){
                        localStorage.setItem("token", "vghvhvhjh")
                        AloggedIn=true
                    }

                    else if(userName===user.userName && password===user.password && "teacher"===user.role){
                        localStorage.setItem("token", "bfddfsd")
                        TloggedIn=true
                    }
                    

                })
        }
        

}

export default Login;
