const FilterationGroup = (props) => {
    return ( 
        <div className="flex justify-between ">
            {props.children}
        </div>
     );
}
 
export default FilterationGroup;