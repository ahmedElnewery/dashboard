import { useEffect } from "react";
import Container from "./Container";
const Page = (props) => {
  useEffect(() => {
    document.title = `${props.title} | App`;
    window.scroll(0, 0);
  }, [props.title]);
  return (
    <div className="bg-dark text-white">
      <Container>{props.children}</Container>
    </div>
  );
};

export default Page;
