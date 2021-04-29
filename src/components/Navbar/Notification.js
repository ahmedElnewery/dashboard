import { ReactComponent as CheckIcon } from "./../../assets/icons/check.svg";
import { ReactComponent as ConfirmEmailIcon } from "./../../assets/icons/confirm-email.svg";


const Notification = (props) => {
    
  return props.isOpen ? (
    <div className="bg-primary  px-4 py-4 absolute top-24  z-40 w-80 h-96 right-48 rounded-lg">
      <h1 className="text-xl mb-5 ">Notifications</h1>

      <div className="w-full flex justify-between border border-danger rounded px-3 py-3 mb-3">
        <span className="mr-3">
          <CheckIcon />
        </span>
        <div className="text-sm text-white">
          <span>
            {" "}
            Transfer link confirmed{" "}
            <span className=" opacity-40"> by jamesconor@email.com</span>
            <span className=" opacity-40 block">
            just now
            </span>
          </span>
        </div>
      </div>
      <div className="w-full flex justify-between border border-danger rounded px-3 py-3 mb-3">
        <span className="mr-3">
          <CheckIcon />
        </span>
        <div className="text-sm text-white">
          <span>
            {" "}
            Transfer link confirmed{" "}
            <span className=" opacity-40"> by jamesconor@email.com</span>
            <span className=" opacity-40 block">
            2 min ago
            </span>
          </span>
        </div>
      </div>
      <div className="w-full flex justify-between border border-danger rounded px-3 py-3 mb-3">
        <span className="mr-3">
          <ConfirmEmailIcon />
        </span>
        <div className="text-sm text-white">
          <span>
            {" "}
            Confirmation email sent {" "}
            <span className=" opacity-40">to anthony2142@email.com and jamesconor@email.com</span>
            <span className=" opacity-40 block">
            5 min ago
            </span>          </span>
        </div>
      </div>
    </div>
  ) : null;
};

export default Notification;
