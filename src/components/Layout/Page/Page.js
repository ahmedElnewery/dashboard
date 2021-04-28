import { useEffect } from "react"
import Container from "./../Container/Container";

const Page = (props) => {

    useEffect(() => {
        document.title =  `${props.title} | App`;
        window.scroll(0,0)
    }, [props.title])

    return ( 
        <Container>
        {props.children}
        </Container>
     );
}
 
export default Page;