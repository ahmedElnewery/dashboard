import { useDispatch, useSelector } from "react-redux";
import { closeEmail } from "../../../store/action/modalActions";
import { ReactComponent as ClosetIcon } from "../../../assets/icons/close.svg";
import { ReactComponent as SuccessfullySentIcon } from "../../../assets/icons/email-sent.svg";

const SentEmailModal = (props) => {
  const { isSent } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleClose = (props) => {
    dispatch(closeEmail());
  };

  return isSent ? (
    <div className=" bg-opacity-50 w-full h-full left-0 top-0 flex  justify-center items-center fixed z-10  text-gray ">
      <div className="md:w-2/5 w-4/5 h-60  rounded-xl ">
        <div className="bg-light-primary px-12 py-6">
          <div className="w-full h-4 relative">
            <span className="absolute right-0 top-0 z-20 cursor-pointer " onClick={handleClose}>
              <ClosetIcon className="" />
            </span>
          </div>
          <div className="pt-4 flex justify-center items-center">
            <div className="text-center">
              <span className="">
                <SuccessfullySentIcon className="mx-auto" />
              </span>
              <h3 className="text-xl my-4 ">Confirmation Email Sent</h3>
              <p className="text-lg my-5">
                We sent a link to{" "}
                <span className="text-turquoise underline">
                  anthony2142@email.com{" "}
                </span>{" "}
                and
                <span className="text-turquoise underline">
                  {" "}
                  jamesconor@email.com{" "}
                </span>
                . Check the email to confirm the transfer.
              </p>
              <div className="flex flex-col ">
                <p className="mb-2">Didn’t get a confirmation email?</p>
                <p>
                  Check your spam or <span className="text-turquoise underline">Send Again </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default SentEmailModal;
