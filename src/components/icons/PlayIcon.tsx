type PlayIconProps = {
  class?: string;
};
export default function PlayIcon(props: PlayIconProps) {
  return (
    <svg
      class={props.class}
      xmlns="http://www.w3.org/2000/svg"
      height="1.5em"
      viewBox="0 0 384 512"
    >
      /* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com
      License - https://fontawesome.com/license (Commercial License) Copyright
      2023 Fonticons, Inc.*/
      <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
    </svg>
  );
}