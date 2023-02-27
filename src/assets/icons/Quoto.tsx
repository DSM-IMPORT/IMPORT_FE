import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Quoto({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3071_29118)">
        <path
          d="M1.5 10.125C1.5 7.01719 4.01719 4.5 7.125 4.5H7.5C8.32969 4.5 9 5.17031 9 6C9 6.82969 8.32969 7.5 7.5 7.5H7.125C5.67656 7.5 4.5 8.67656 4.5 10.125V10.5H7.5C9.15469 10.5 10.5 11.8453 10.5 13.5V16.5C10.5 18.1547 9.15469 19.5 7.5 19.5H4.5C2.84531 19.5 1.5 18.1547 1.5 16.5V15V13.5V10.125ZM13.5 10.125C13.5 7.01719 16.0172 4.5 19.125 4.5H19.5C20.3297 4.5 21 5.17031 21 6C21 6.82969 20.3297 7.5 19.5 7.5H19.125C17.6766 7.5 16.5 8.67656 16.5 10.125V10.5H19.5C21.1547 10.5 22.5 11.8453 22.5 13.5V16.5C22.5 18.1547 21.1547 19.5 19.5 19.5H16.5C14.8453 19.5 13.5 18.1547 13.5 16.5V15V13.5V10.125Z"
          fill={Colors[fill!] ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_3071_29118">
          <rect
            width="21"
            height="24"
            fill="white"
            transform="translate(1.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
