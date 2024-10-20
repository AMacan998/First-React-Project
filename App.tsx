import React, { useState, useEffect, FC, FunctionComponent } from "react";
import "./App.css";

type user={
  firstName?:string;
  lastName?:string;
  birthYear:number;
};

export const App : FunctionComponent<user> = ({
  firstName,
  lastName,
  birthYear
}) => {
  const [count, setCount] = useState(0);
  const [name, setName]=useState("");
  const [string, setString]=useState("Prva rečenica!");
  const [tema, setTema]=useState(true);
  const [isChecked, setIsChecked]=useState(false);

  const god= new Date().getFullYear();

  const users: user[]=[
    {firstName:"Pero", lastName:"Petrović",birthYear:2005},
    {firstName:"Ivo", lastName:"Ivić",birthYear:2008},
    {firstName:"Ivana", lastName:"Ivanković",birthYear:1998},
  ];
  
  //useEffect(() => {
    //console.log(`Trenutni broj: ${count}`);
  //}, [count]);

  return (
    <div>
      
      <div>
        <h1>Zadatak 1</h1>
        <h1>{string}</h1>
        <button onClick={()=>setString("DRUGAČIJA REČENICA")}>Promijeni</button>
      </div>
      <div>
      <h1>Zadatak 2</h1>
        <h2>Lista korisnika:</h2>
        {users.map((user,index)=>{
          const age=god-user.birthYear;
          return(
            <p key={index}>
              {user.firstName}
              {user.lastName}, rođen/a 
              {user.birthYear}. {" "}
              {age < 18 ? "Mlađi od 18.":`starost: ${age} godina.`}
            </p>
          )
        })}
        <div>
          <h1>Zadatak 3</h1>
          <input type="text" 
          value={name} 
          onChange={(e)=>setName(e.target.value)} 
          placeholder="**Ovdje će se prikazati ime**"></input>
          <h2>Pozdrav, {name}</h2>
        </div>
        <div>
          <h1>Zadatak 4</h1>
          <p>Klikom na gumb mijenjate temu</p>
          <button onClick={() => setTema(!tema)}>Promijeni temu</button>
          <p>{tema? "tema1 ": "tema2"}</p>
        </div>
        <div>
        <h1>Zadatak 5</h1>
          <input type="checkbox" checked={isChecked} onChange={()=>setIsChecked(!isChecked)}/>
          <p>
            {isChecked ? "Checkbox je označen!":"Checkbox nije označen!"}
          </p>
        </div>
        <div>
          <h1>Zadatak 6</h1>
          <h3>{count}</h3>
          <button onClick={()=>setCount(count+1)}>Povećaj za 1</button>
          <button onClick={()=>setCount(count+2)}>Povećaj za 2</button>
          <button onClick={()=>setCount(count-1)}>Smanji za 1</button>
          <button onClick={()=>setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
};
