import { ReactComponent as SuccessCheckoutIcon } from '../../../assets/icons/success-cart.svg';

const TotalCheckouts = (props) => {
    return ( 
        <div className="w-72 bg-primary  p-5 rounded-lg"> 
            <div className="flex justify-between items-center">
                <div>
                    <p className="mb-3">Total Checkouts</p>
                    <p><span className="text-3xl text-success">10</span>  <span className="text-sm text-gray-400 ">/ 82</span></p>
                </div>
                <div className="w-16 h16 flex justify-center items-center rounded-full ">
                <SuccessCheckoutIcon/>
                </div>
            </div>
        </div>
     );
}
 
export default TotalCheckouts;