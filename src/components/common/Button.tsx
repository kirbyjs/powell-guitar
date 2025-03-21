import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

type ButtonProps = {
  inverse?: boolean;
  selected?: boolean;
} & QwikIntrinsicElements['button'];
export default component$((props: ButtonProps) => {
  const { inverse, selected, ...otherProps } = props;
  const buttonProps: QwikIntrinsicElements['button'] = {
    type: 'button',
    ...otherProps,
  };
  let classes =
    'text-sm text-center rounded-sm sm:w-fit focus:ring-4 focus:outline-hidden focus:ring-primary-300 ';

  if (inverse) {
    classes += 'border ';

    if (selected) {
      classes +=
        'text-white bg-amber-700 dark:text-amber-700 dark:bg-amber-300';
    } else {
      classes +=
        'text-amber-600 border-amber-600 hover:text-white hover:bg-amber-700 dark:text-amber-300 dark:border-amber-300 dark:hover:text-amber-700 dark:hover:bg-amber-300';
    }
  } else {
    classes +=
      'text-white bg-amber-600 hover:bg-amber-700 dark:bg-amber-300 dark:text-amber-800 dark:hover:bg-amber-400';
  }

  return (
    <button {...buttonProps} class={`${classes} ${props.class}`}>
      <Slot />
    </button>
  );
});
