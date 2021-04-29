import { useDispatch, useSelector } from "react-redux";
import { closeModal, sendEmail } from "../../store/action/modalActions";
import Btn from "../UI/Btn";

const Modal = (props) => {
const {isOpen,} = useSelector(state => state.modal)
const dispatch = useDispatch()
const handleClose = (props) =>{

    dispatch(closeModal())
}
const handleSendEmail =()=>{
  console.log("kk")
  dispatch(sendEmail())

}
  return isOpen  ? (
    <div className=" bg-opacity-50 w-full h-full left-0 top-0 flex  justify-center items-center fixed z-10  text-gray ">
      <div className="md:w-2/5 w-4/5 h-60  rounded-xl ">

        <div className="bg-light-primary p-6">
          <h4 className="mb-6 text-3xl">Transfer</h4>
          <label className="text-sm ">Transfer to</label>
          <input
            type="email"
            className="rounded-md mb-4 mt-2 appearance-none border border-dark-primary w-full py-2 pl-2 bg-dark-primary text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent "
            placeholder="Enter the email address"
          />
        </div>
        <div className="bg-dark-primary p-4 flex justify-end">
          <Btn
            className="mr-8"
            size="md"
            variant="danger"
            onClick={handleClose}
          >
            Cancel
          </Btn>

          <Btn className=" bg-turquoise  text-white  hover:bg-sky" size="md" onClick={handleSendEmail}>
            Send
          </Btn>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
