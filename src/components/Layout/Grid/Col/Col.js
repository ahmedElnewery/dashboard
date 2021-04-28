import style from "./Col.module.css";
const Col = (props) => {
  let classes = ` `;
  switch (props.md) {
    case 1:
      classes += style.colMd1;
      break;
    case 2:
      classes += style.colMd2;
      break;
    case 3:
      classes += style.colMd3;
      break;
    case 4:
      classes += style.colMd4;
      break;
    case 5:
      classes += style.colMd5;
      break;
    case 6:
      classes += style.colMd6;
      break;
    case 7:
      classes += style.colMd7;
      break;
    case 8:
        console.log("hello")
      classes += style.colMd8;
      break;
    case 9:
      classes += style.colMd9;
      break;

    case 10:
      classes += style.colMd10;
      break;
    case 11:
      classes += style.colMd11;
      break;
    case 12:
      classes += style.colMd12;
      break;
    default:
      break;
  }
  return <div className={classes}>{props.children}</div>;
};

export default Col;
