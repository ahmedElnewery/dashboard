import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { closeModal } from "../../store/action/modalActions";
import Container from "./Container";
const Page = (props) => {
  useEffect(() => {
    document.title = `${props.title} | App`;
    window.scroll(0, 0);
  }, [props.title]);

  return (
    <div className="bg-dark text-white" >
      <Container>{props.children}</Container>
    </div>
  );
};

export default Page;
