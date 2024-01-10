import { Slot, component$, useSignal } from '@builder.io/qwik';
import './counter.css';

export const Counter = component$<{ init: number; step: number }>(
  ({ init = 0, step = 1 }) => {
    const count = useSignal(init);

    const increment = () => {
      count.value += step;
    };

    return (
      <>
        <div class='relative'>
          <button class='button' type='button' onClick$={() => increment()}>
            count is {count.value}
          </button>
          <Slot />
        </div>
      </>
    );
  },
);
