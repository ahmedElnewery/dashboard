const FilterationGroup = (props) => {
    return ( 
        <div className="lg:flex justify-between flex-shrink">
            {props.children}
        </div>
     );
}
 
export default FilterationGroup;