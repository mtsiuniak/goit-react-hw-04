import { RotatingLines } from 'react-loader-spinner'; 
import css from "./Loader.module.css";

export default function Loader() {
    return <div className={css.loader}><RotatingLines 
  visible={true}
  height="48"
  width="48"
  color="black"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  strokeColor="black"
  /></div>
}