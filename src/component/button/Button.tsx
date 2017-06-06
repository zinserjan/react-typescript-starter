import * as React from "react";
import * as styles from "./Button.module.scss";
import * as classNames from "classnames";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

const Button: React.StatelessComponent<ButtonProps> = (props: ButtonProps) => {
  const { children, ...others } = props;

  const cssClass = classNames(styles.red, {
    [styles.disabled]: false,
    [styles.disabled2]: false,
  });

  return (
    <button {...others} className={cssClass}>
      {children}
    </button>
  );
};

export default Button;
