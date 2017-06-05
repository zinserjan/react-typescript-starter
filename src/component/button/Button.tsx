import * as React from "react";
import * as styles from "./Button.module.scss";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}


const Button: React.StatelessComponent<ButtonProps> = (props: ButtonProps) => {
  const { ...others } = props;

  return (
    <button {...others} className={styles.red}>
      {props.children}
    </button>
  );
};

export default Button;
