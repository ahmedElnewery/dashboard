import { ReactComponent as TransferIcon } from "../../../assets/icons/transfer.svg";
import Btn from "../../UI/Btn";
import { ReactComponent as ChervronRight } from "../../../assets/icons/chevron-right.svg";
import { useDispatch } from "react-redux";
import { openModal } from "../../../store/action/modalActions";

const Transfer = (props) => {
    const dispatch = useDispatch()
    const handleOpen = () =>{
        dispatch(openModal())
    }
    return ( 
        <div className="p-6 bg-primary rounded-lg">
            <div className="inline-flex">
              <span className="mr-2">
            <TransferIcon />

              </span>
            <span className="text-sm font-bold"> Transfer</span>

          </div>
      <div className="flex xl:justify-between items-center lg:flex-wrap justify-between">
        <div className="email">
          
          <p className="text-xs text-white opacity-60">Current Email</p>
          <p className="xl:m-0 mb-4">anthony2142@emaill.com</p>
          
        </div>
        <Btn size="md" variant="custom" className="lg:w-full xl:w-auto " onClick ={handleOpen}>
         Transfer 
          <ChervronRight className="inline "/>
        </Btn>
      </div>
    </div>
     );
}
 
export default Transfer;