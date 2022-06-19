const RegularList = ({items,resourcename,ItemComponent}) =>{
    return(
        <div className="regular-list">
            
            {
                items.map((item,index)=>(
                    <ItemComponent key={index} {...{[resourcename]:item}}/>
                ))
            }
        </div>
    )
}

export default RegularList;