import { IconProps } from "./@types";

export default function File({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2530_13041)">
        <path
          d="M3 22.5H21C22.6547 22.5 24 21.1547 24 19.5V7.5C24 5.84531 22.6547 4.5 21 4.5H13.9922C13.1953 4.5 12.4312 4.18594 11.8687 3.62344L10.6266 2.37656C10.0641 1.81406 9.3 1.5 8.50312 1.5H3C1.34531 1.5 0 2.84531 0 4.5V19.5C0 21.1547 1.34531 22.5 3 22.5Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2530_13041">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
