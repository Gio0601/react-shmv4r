import React from "react"

const NameList = () => {
 const MaListe = ["Giovanna", "Asmae", "Fadel", "Alvin", "Olga"]

 return (
   <ul>
     {MaListe.map(prenom => <li>{prenom}</li>)}
    </ul>
 )
}


export default NameList