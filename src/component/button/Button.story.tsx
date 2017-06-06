import * as React from "react";
import { storiesOf, module } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import Button from "./Button";

storiesOf("Button", module)
  .add("with text", () =>
    <Button onClick={action("clicked")}>
      {text("Children", "Hello Button")}
    </Button>
  )
  .add("with some emoji", () => <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>);
