import { ReactComponent as CartIcon } from '../../../assets/icons/failure-cart.svg';

const TotalFailures = (props) => {
    return ( 
        <div className="lg:w-72 w-full bg-primary  p-5 rounded-lg lg:m-0  mb-3"> 
            <div className="flex justify-between items-center">
                <div>
                    <p className="mb-3">Total Failures</p>
                    <p><span className="text-3xl text-danger">72</span>  <span className="text-sm text-gray-400 ">/ 82</span></p>
                </div>
                <div className="w-16 h16 flex justify-center items-center rounded-full ">
                <CartIcon/>
                </div>
            </div>
        </div>
     );
}
 
export default TotalFailures;