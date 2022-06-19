import React from "react";

const SmallPeopleList = ({ people }) => {
    const {name,age} = people;

    return(
        <p>name:{name} Age:{age}</p>
    )

}

export default SmallPeopleList;