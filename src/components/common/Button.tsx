import { component$, QwikIntrinsicElements, Slot } from '@builder.io/qwik';

type ButtonProps = {
  inverse?: boolean;
} & QwikIntrinsicElements['button'];
export default component$((props: ButtonProps) => {
  const { inverse, ...otherProps } = props;
  const buttonProps: QwikIntrinsicElements['button'] = {
    type: 'button',
    ...otherProps,
  };
  let classes =
    'text-sm text-center rounded sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 ';

  if (inverse) {
    classes +=
      'border text-amber-600 border-amber-600 hover:text-white hover:bg-amber-700 dark:text-amber-300 dark:border-amber-300 dark:hover:text-amber-700 dark:hover:bg-amber-300';
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
