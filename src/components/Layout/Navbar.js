import Container from "./Container";
import { ReactComponent as AlarmIcon } from "./../../assets/icons/alarm.svg";
import { ReactComponent as DownIcon } from "./../../assets/icons/chevron-down.svg";

import profileImg from "../../assets/img/user-profile.jpg";
import { useState } from "react";
import Notification from "../Navbar/Notification";
const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openNotification = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="bg-dark text-white">
      <Container>
        <Notification isOpen={isOpen} />

        <span className="absolute inline-flex h-3 w-3 top-8 right-80 rounded-full bg-danger  "></span>
        <div className=" flex justify-end items-center py-3">
          <div
            className=" hover:bg-sky transition-all cursor-pointer hover:opacity-100 opacity-40 mr-5 w-12 h-12 rounded-lg flex justify-center items-center border border-gray-500 "
            onClick={openNotification}
          >
            <AlarmIcon className="inline" />
          </div>

          <div className=" flex justify-between items-center w-64 h-12">
            <div className="pic">
              <img
                src={profileImg}
                alt="profile pic"
                className="bg-transparent rounded-full "
              />
            </div>
            <div className="">
              <p>Anthony Mike</p>
              <p className="text-white opacity-40">anthony2142@email.com</p>
            </div>
            <div className="cursor-pointer">
              <DownIcon />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
