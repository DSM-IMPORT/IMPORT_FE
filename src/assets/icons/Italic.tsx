import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Italic({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 3C9 2.17031 9.67031 1.5 10.5 1.5H19.5C20.3297 1.5 21 2.17031 21 3C21 3.82969 20.3297 4.5 19.5 4.5H16.7484L10.5 19.5H13.5C14.3297 19.5 15 20.1703 15 21C15 21.8297 14.3297 22.5 13.5 22.5H4.5C3.67031 22.5 3 21.8297 3 21C3 20.1703 3.67031 19.5 4.5 19.5H7.25156L13.5 4.5H10.5C9.67031 4.5 9 3.82969 9 3Z"
        fill={Colors[fill!] ?? "black"}
      />
    </svg>
  );
}
