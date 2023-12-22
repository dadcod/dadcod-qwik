import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="w-[90vw] max-w-3xl overflow-x-hidden mx-auto flex flex-col blog">
      <Slot />
    </div>
  );
});
