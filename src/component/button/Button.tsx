import * as React from "react";
import * as styles from "./Button.module.scss";
import * as classNames from "classnames";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}


const Button: React.StatelessComponent<ButtonProps> = (props: ButtonProps) => {
  const { ...others } = props;

  const cssClass = classNames(styles.red, {
    [styles.disabled]: false,
    [styles.disabled2]: false,
  });

  return (
    <button {...others} className={cssClass}>
      {props.children}
    </button>
  );
};

export default Button;
