import { Slot, component$, useStyles$ } from "@builder.io/qwik";

import styles from "./blog.css?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="container">
        <div class="content">
            <Slot />
        </div>
    </div>
  );
});
