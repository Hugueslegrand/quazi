
 import './Popup.css';
const Popup = (props:any) => {
  return (
    <section className="popup-box">
      <section className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </section>
    </section>
  );
};
 
export default Popup;