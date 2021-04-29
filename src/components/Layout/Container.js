import Modal from "./Modal";
import SentEmailModal from './../Dashboard/Transfer/SentEmailModal'
const Container = (props) => {
    
    return <div className="container mx-auto py-5">
      <Modal />
      <SentEmailModal/>

     {props.children}
     
     </div>;
  };
  
  export default Container;
  