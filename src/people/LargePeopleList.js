import React from "react";

const LargePeopleList = ({ people }) => {
    const {name,age,hairColor,hobbies} = people;

    return(
        <>
            
            <h1>name:{name} Age:{age}</h1>
            <h2>hairColor:{hairColor}</h2>
            <h2>hobbies:{hobbies}</h2>
            <ul>
                {hobbies.map((hobby,index)=>{
                    return(
                        <li key={index}><h3>{hobby}</h3></li>
                    )
                })
                }
            </ul>
        </>
    )

}

export default LargePeopleList;