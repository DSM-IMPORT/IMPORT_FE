import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function DarkLignt({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2530_13042)">
        <g clipPath="url(#clip1_2530_13042)">
          <path
            d="M21 12C21 7.03125 16.9688 3 12 3V21C16.9688 21 21 16.9688 21 12ZM24 12C24 18.6281 18.6281 24 12 24C5.37188 24 0 18.6281 0 12C0 5.37188 5.37188 0 12 0C18.6281 0 24 5.37188 24 12Z"
            fill={Colors[fill!] ?? "black"}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2530_13042">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_2530_13042">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
