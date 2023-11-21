import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import  Axios  from "axios";
import AdoptionForm from "./AdoptionForm";


function EditAppoinment()
{
    const {id}=useParams();
    const [initialvalue,setInitialValue]=useState({petname:"",pettype:"",appoinmentdate:"" ,appoinmenttime:""})
    const [newData, setNewData] = useState([]);

    
    useEffect(()=>{
        Axios.get("https://mern-project-petadoption-backend.onrender.com/petdoctorRoute/update/" + id)
        .then((res)=>{
            if(res.status === 200){
                 const {petname,pettype,appoinmentdate,appoinmenttime} = res.data;
                 setInitialValue({petname,pettype,appoinmentdate,appoinmenttime});
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = {petname:newData[0], pettype: newData[1], appoinmentdate: newData[2],appoinmenttime:newData[3] };
        Axios.put("http://localhost:4000/petdoctorRoute/update/" + id , data)
        .then((res)=>{
            if(res.status === 200){
                alert("Record updated successfully");
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }


    return(
        <form onSubmit={handleSubmit} >
            <AdoptionForm getState={getState}
                         petnameValue={initialvalue.petname}
                         pettypeValue={initialvalue.pettype}
                         appoinmentdateValue={initialvalue.appoinmentdate}
                         appoinmnettimeValue={initialvalue.appoinmenttime} />
        </form>
    )
}

export default EditAppoinment;