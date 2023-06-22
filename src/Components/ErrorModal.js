import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import React from "react";
import ReactDOM from "react-dom";
const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};
const ErrorOverLay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ErrorOverLay
          message={props.message}
          title={props.title}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("errorModal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
