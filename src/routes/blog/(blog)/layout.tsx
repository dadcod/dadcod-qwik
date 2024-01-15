import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="max-w-screen-md mx-auto">
      <Slot />
    </div>
  );
});
