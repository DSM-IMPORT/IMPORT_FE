import { IconProps } from "./@types";

export default function Trash({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2989_22644)">
        <path
          d="M8.3375 0.829688L8 1.5H3.5C2.67031 1.5 2 2.17031 2 3C2 3.82969 2.67031 4.5 3.5 4.5H21.5C22.3297 4.5 23 3.82969 23 3C23 2.17031 22.3297 1.5 21.5 1.5H17L16.6625 0.829688C16.4094 0.31875 15.8891 0 15.3219 0H9.67813C9.11094 0 8.59062 0.31875 8.3375 0.829688ZM21.5 6H3.5L4.49375 21.8906C4.56875 23.0766 5.55312 24 6.73906 24H18.2609C19.4469 24 20.4312 23.0766 20.5062 21.8906L21.5 6Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2989_22644">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
