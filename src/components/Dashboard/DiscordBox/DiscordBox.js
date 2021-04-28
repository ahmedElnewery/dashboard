import { ReactComponent as DiscordIcon } from "../../../assets/icons/discord.svg";
import Btn from "../../UI/Btn";

const DiscordBox = () => {
  return (
    <div className="p-6 bg-primary rounded-lg">
      <div className="lg:flex justify-between items-center">
        <div className="discord">
          <div className="inline-flex">
              <span className="mr-2">
            <DiscordIcon />

              </span>
            <span className="text-sm font-bold"> Discord ID</span>

          </div>
          <p className="text-lg">antony#2142</p>
        </div>
        <Btn size="md" variant="danger" className="flex-grow-0	">
          Unbind
        </Btn>
      </div>
    </div>
  );
};

export default DiscordBox;
