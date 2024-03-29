import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="overflow-x-hidden mx-auto flex flex-col blog">
      <Slot />
    </div>
  );
});
