import axios from "axios"
import {useNavigate} from "react-router-dom"
const Dashboard = ()=>{

const nav = useNavigate()

    const handleProfile = async ()=>{
        const response:any= await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/profile`,null,
     {
    withCredentials: true
  }
  );

  if(response.status!==200){ 
   
    
    return alert("Error")
  
  }

    console.log(response)
 nav("/profile")
  
}
 

    
    return<>
    <h1>Dashboard Page</h1>
    <button onClick={handleProfile}>profile</button>
    
    
    </>
}
export default Dashboard;