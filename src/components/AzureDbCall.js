
import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function AzureDbCall() {

    const [userData,setuserData]=useState([]);

    const getuserData= ()=>{    
        axios.get('https://reactapi-app.azurewebsites.net/api/getlist?code=3N0GbtuQTIBuXsygkLg5QDg5r9ZJewT4o7duvfDggJEtAzFuqI1bUQ==')
        .then((res)=>{
            setuserData(res.data)
        })
    }

    useEffect(()=>{
        getuserData();
        },[])
        

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
  
