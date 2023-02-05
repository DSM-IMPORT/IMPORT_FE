import { IconProps } from "./@types";

export default function Format_Header_1({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4H5V10H9V4H11V18H9V12H5V18H3V4ZM14 18V16H16V6.31L13.5 7.75V5.44L16 4H18V16H20V18H14Z"
        fill={fill ?? "black"}
      />
    </svg>
  );
}
