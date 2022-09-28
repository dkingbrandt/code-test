import React from "react";
import { useState, useEffect } from "react";
import { get } from "./util/fetchhealper"
import "./App.css"


function App() {
  const [users, setUsers] = useState([])
  const [users1, setUsers1] = useState([])
  const [users2, setUsers2] = useState([])
  const [page1, setPage1] = useState(false)
  const [page2, setPage2] = useState(false)


  useEffect(() => {
    get("https://reqres.in/api/users").then((response) => setUsers(response.data),
      setPage1(false),
      setPage2(false)


    );

  }, [])

  return (

    <div className="container"  >

      <div className="mainContainer">

        {users.map((user) => {
          return (
            <div className="userContainer" key={user.id}>



              <img className="avatar" src={user.avatar} alt="user"></img>


              <p className="userName">{user.first_name} {user.last_name}</p>

              <a className="contactLink" href={user.email}>Contact</a>


            </div>

          )
        })}

      </div>

      {page1 ? (
        <div className="mainContainer">

          {users1.map((user) => {
            return (
              <div className="userContainer" key={user.id}>



                <img className="avatar" src={user.avatar} alt="user"></img>


                <p className="userName">{user.first_name} {user.last_name}</p>

                <a className="contactLink" href={user.email}>Contact</a>


              </div>
            )
          })}
        </div>

      ) : null}

      {page2 ? (
        <div className="mainContainer">

          {users2.map((user) => {
            return (
              <div className="userContainer" key={user.id}>



                <img className="avatar" src={user.avatar} alt="user"></img>


                <p className="userName">{user.first_name} {user.last_name}</p>

                <a className="contactLink" href={user.email}>Contact</a>


              </div>

            )
          })}

        </div>
      ) : null}

      <div className="a-TagContainer">

        <a href="#" className="a-tag1" onClick={(() => {
          get("https://reqres.in/api/users").then((response) => setUsers1(response.data),
            setPage1(true),
            setPage2(false),
            setUsers([])

          );

        })}>1</a>


        <a href="#" className="a-tag2"

          onClick={(() => {
            get("https://reqres.in/api/users?page=2").then((response) => setUsers2(response.data),
              setPage2(true),
              setPage1(false),
              setUsers([])



            );

          })}>2</a>

      </div>
    </div>
  );


}

export default App;
