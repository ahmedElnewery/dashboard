import { ReactComponent as TransferIcon } from "../../../assets/icons/transfer.svg";
import Btn from "../../UI/Btn";
import { ReactComponent as ChervronRight } from "../../../assets/icons/chevron-right.svg";

const Transfer = (props) => {
    return ( 
        <div className="p-6 bg-primary rounded-lg">
            <div className="inline-flex">
              <span className="mr-2">
            <TransferIcon />

              </span>
            <span className="text-sm font-bold"> Transfer</span>

          </div>
      <div className="xl:flex justify-between items-center">
        <div className="email">
          
          <p className="text-xs text-white opacity-60">Current Email</p>
          <p className=" ">anthony2142@emaill.com</p>
          
        </div>
        <Btn size="md" variant="custom" className=" w-full">
         Transfer 
          <ChervronRight className="inline "/>
        </Btn>
      </div>
    </div>
     );
}
 
export default Transfer;