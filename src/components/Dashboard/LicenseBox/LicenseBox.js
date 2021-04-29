import { ReactComponent as EyeClosedtIcon } from "../../../assets/icons/eye-hide.svg";
import Btn from "../../UI/Btn";

const LicenseBox = () => {
  return (
    <div className="pt-16 px-6 pb-8  bg-primary rounded-lg lg:mt-0 mt-5" >
      <p className="text-white opacity-60 text-sm">License key</p>
      <div className="flex lg:justify-between justify-start  items-center mb-3">
        <p className="text-lg lg:mr-0 mr-16">xxxx - xxxx - xxxx - xxxx</p>
        <span>
          <EyeClosedtIcon />
        </span>
      </div>
      <div className="flex lg:justify-between items-center flex-wrap sm:justify-start ">
        <Btn size="lg" variant="success" className="   xl:text-left w-full  sm:w-auto sm:mr-20 mb-6 sm:mb-0 mr-0 lg:mr-0">
          Renew Now
        </Btn>
        <Btn size="md" variant="danger" className="text-center  w-full sm:w-auto ">
          Deactive
        </Btn>
      </div>
      <span className="text-xs">
        Next Renewal on <span className="font-bold">22 Mar 2021</span>
      </span>
    </div>
  );
};

export default LicenseBox;
