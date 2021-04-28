import style from './Row.module.css'
const Row = (props) => {
    return ( 
        <div className={style.row}>
            {props.children}
        </div>
     );
}
 
export default Row;