import React, {useEffect, useState} from "react";
import axios  from "axios";
import MUIDataTable from "mui-datatables";
import { Avatar } from "@mui/material";
function Users(){
    
    //Configuramos hook
    const [users,setUsers]= useState([]);
    
    //Obtenemos datos con axios
    const endPoint="http://localhost:3000/users";

    const getData= async ()=>{
        await axios.get(endPoint)
        .then((response)=>{
            const data =response.data
            setUsers(data)
        })
    }
    useEffect(()=>{
       getData()
    },[]);
    
    //Definimos columnas
    const columns= [
        
        {
            name:"avatar",
            label:"AVATAR", 
            options:{
                filter:false,
                sort:false,

                //custom render para mostrar el avatat en vez de la url
                customBodyRender: (value ) => {  
                    return (
                        <Avatar src = {value} />
                    );
                }
            }
              
        },
        {
            name:"name",
            label:"NAME"   
        },
        {
            name:"surname",
            label:"SURNAME"   
        },
        {
            name:"createdAt",
            label:"CREATED "
        },
        {
            name:"id",
            label:"ID",
            options: 
            //custom sort para ordenar los IDS
            {sortCompare: (order) => {
                return (id1, id2) => {
                  let val1 = parseInt(id1.data, 10);
                  let val2 = parseInt(id2.data, 10);
                  return (val1 - val2) * (order === 'asc' ? 1 : -1);
                };
              }
            }
        }   
    ]
    // Renderizmaos tabla
    return(
       <MUIDataTable
        title={"Tabla con mui datatalbe + axios"}
        data={users}
        columns={columns}
        options={{selectableRows:false, print:false, download:false}}
       />
    )
}

export default Users;
