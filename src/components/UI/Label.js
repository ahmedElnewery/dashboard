const Label = (props) => {
  let classes =
    "label py-1 px-2 uppercase  text-center  rounded-sm text-xs bg-opacity-20 ";
    switch (props.variant) {
        case "success":
            classes += " bg-success   text-success "
            break;
        case "failure":
            classes += " bg-danger text-danger "
            break;
        default:
            classes +=" "
    }
  
  return (
    <span className={classes}>
      {props.children}
    </span>
  );
};

export default Label;
