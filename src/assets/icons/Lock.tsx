import { IconProps } from "./@types";

export default function Lock({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3128_42601)">
        <path
          d="M8.25 6.75V9H15.75V6.75C15.75 4.67812 14.0719 3 12 3C9.92813 3 8.25 4.67812 8.25 6.75ZM5.25 9V6.75C5.25 3.02344 8.27344 0 12 0C15.7266 0 18.75 3.02344 18.75 6.75V9H19.5C21.1547 9 22.5 10.3453 22.5 12V21C22.5 22.6547 21.1547 24 19.5 24H4.5C2.84531 24 1.5 22.6547 1.5 21V12C1.5 10.3453 2.84531 9 4.5 9H5.25Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_3128_42601">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
