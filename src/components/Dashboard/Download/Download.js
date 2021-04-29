import { ReactComponent as LapTopIcon } from "../../../assets/icons/laptop.svg";
import { ReactComponent as AppleIcon } from "../../../assets/icons/apple.svg";
import { ReactComponent as WindowsIcon } from "../../../assets/icons/windows.svg";
import Btn from "../../UI/Btn";
const Download = () => {
  return (
    <div className="p-6 bg-primary rounded-lg">
      <div className="flex   lg:flex-wrap lg:justify-center justify-between xl:justify-between items-center">
        <div className="rounded-md border-light-sec border p-3 ">
          <LapTopIcon />
          <p className="mt-4 ">Desktop App</p>
        </div>
        <div className="flex-col flex lg:mt-5 xl:mt-0">
          <Btn className="mb-3 text-xs">
            <span className="flex">
              <AppleIcon className="inline mr-3" />
              <span> Download for MacOS</span>
            </span>
          </Btn>
          <Btn size="xl" className="text-xs">
            {" "}
            <span className="flex">
              <span>
                <WindowsIcon className="inline mr-3" />
              </span>{" "}
              <span>Download for Windows</span>
            </span>
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default Download;
