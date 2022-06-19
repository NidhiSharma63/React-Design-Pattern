const RegularList = ({items,resourcename,ItemComponent}) =>{
    return(
        <div className="regular-list">
            
            {
                items.map((item,index)=>(
                    // how it will change it to people={item}
                    console.log({[resourcename]:item}),
                    <ItemComponent key={index} {...{[resourcename]:item}}/>
                ))
            }
        </div>
    )
}

export default RegularList;