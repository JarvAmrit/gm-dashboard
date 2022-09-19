import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AzureDbCall() {
  const [userData, setuserData] = useState([]);

  const getuserData = () => {
    axios
      .get(
        "https://reactapi-app.azurewebsites.net/api/getlist?code=3N0GbtuQTIBuXsygkLg5QDg5r9ZJewT4o7duvfDggJEtAzFuqI1bUQ=="
      )
      .then((res) => {
        setuserData(res.data);
      });
  };

  useEffect(() => {
    getuserData();
  }, []);

  return (
    <div>
        <table id="customers">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Occupation</th>
                    <th>Hobbie</th>
                    <th>Id</th>
                    
                </tr>
            </thead>
        </table>
      {userData &&
        userData.map((data) => {
          return (
            <table id="customers">
              
              <tbody>
               <tr>
                <td>{data.name}</td>
                <td>{data.occupation}</td>
                <td>{data.hobbie}</td>
                <td>{data._id}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
    </div>
  );
}
