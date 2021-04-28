
const Btn = (props) => {
    let classes =" bg-light-sec transition ease-in duration-200   font-semibold shadow-md focus:outline-none focus:ring-2  rounded-lg  text-white disabled:opacity-50 px-4 py-3 disabled:cursor-not-allowed "
    switch (props.variant) {
        case "success":
            classes += " hover:bg-sky text-sky hover:text-white "
            break;
            case "danger":
                classes += "  hover:bg-blood hover:text-white text-blood  "
                break;
                case "custom":
                    classes += "  hover:bg-turquoise hover:text-white text-turquoise  "
                    break;
        default:
            break;
            
    }
    switch (props.size) {
        case "lg":
            classes += " xl:w-48  "
            break;
            case "md":
            classes += " xl:w-32  "
            break;
        default:
            break;
    }
  return (
    <button className={classes + " " + props.className}>
      {props.children}
    </button>
  );
};

export default Btn;
