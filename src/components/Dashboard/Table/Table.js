const Table = (props) => {
    return ( 
        
        <div className="-my-2 order-table overflow-x-auto overflow-y-auto sm:-mx-6  h-table">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 ">
          <div className="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg">
            <table className="order-table min-w-full divide-y divide-gray-500 table-auto">

                  {props.children}  
            </table>
                </div>
              </div>
            </div>
     );
}
 
export default Table;