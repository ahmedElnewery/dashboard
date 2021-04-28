import { ReactComponent as EyeClosedtIcon } from "../../../assets/icons/eye-hide.svg";
import Btn from "../../UI/Btn";

const LicenseBox = () => {
  return (
    <div className="pt-16 px-6 pb-8  bg-primary rounded-lg">
      <p className="text-white opacity-60 text-sm">License key</p>
      <div className="flex justify-between items-center mb-3">
        <p className="text-lg">xxxx - xxxx - xxxx - xxxx</p>
        <span>
          <EyeClosedtIcon />
        </span>
      </div>
      <div className="lg:flex justify-between items-center flex-wrap">
        <Btn size="lg" variant="success" className="xl:mb-0 mb-3  w-full xl:text-left">
          Renew Now
        </Btn>
        <Btn size="md" variant="danger" className="text-center w-full">
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
