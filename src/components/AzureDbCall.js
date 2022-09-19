
import React, { useState, useEffect } from "react";
import axios from 'axios';


const [userData,setuserData]=useState([]);
const getuserData= ()=>{    
    axios.get('https://reactapi-app.azurewebsites.net/api/getlist?code=3N0GbtuQTIBuXsygkLg50Dg5r9ZJewT4o7duvfDggJEtAzFuqI1bUQ==')
    .then((res)=>{
        setuserData(res.data)
    })
}

useEffect(()=>{
getuserData();
},[])


export default function AzureDbCall() {

      return (
        <div>
            <>            
            {userData && userData.map((data)=>{
                <>
                    <h3>data.id</h3>
                    </>
            })}
            </>
        </div>
        
      );
    
  }
  
