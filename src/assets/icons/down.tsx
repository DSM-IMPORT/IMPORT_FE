import { IconProps } from "./@types";

export default function Down({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2530_13037)">
        <path
          d="M11.0112 16.6095C11.5578 17.1302 12.4456 17.1302 12.9922 16.6095L18.5899 11.2783C18.9922 10.8951 19.1103 10.3245 18.8916 9.82468C18.673 9.32487 18.1657 9 17.5972 9L6.40185 9.00417C5.83771 9.00417 5.32605 9.32904 5.10739 9.82884C4.88873 10.3286 5.01118 10.8993 5.40914 11.2824L11.0068 16.6137L11.0112 16.6095Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2530_13037">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
