const FilterationGroup = (props) => {
    return ( 
        <div className="flex justify-between   mb-10">
            {props.children}
        </div>
     );
}
 
export default FilterationGroup;