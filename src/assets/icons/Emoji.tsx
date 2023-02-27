import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Emoji({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2530_13056)">
        <g clipPath="url(#clip1_2530_13056)">
          <path
            d="M12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24ZM4.5375 14.7234C4.35938 14.0813 4.88438 13.5 5.55 13.5H18.45C19.1156 13.5 19.6453 14.0813 19.4625 14.7234C18.5719 17.9062 15.5672 20.25 12 20.25C8.43281 20.25 5.42813 17.9062 4.5375 14.7234ZM9.76875 9C9.76875 9.82969 9.09844 10.5 8.26875 10.5C7.43906 10.5 6.76875 9.82969 6.76875 9C6.76875 8.17031 7.43906 7.5 8.26875 7.5C9.09844 7.5 9.76875 8.17031 9.76875 9ZM15.7687 10.5C14.9391 10.5 14.2687 9.82969 14.2687 9C14.2687 8.17031 14.9391 7.5 15.7687 7.5C16.5984 7.5 17.2687 8.17031 17.2687 9C17.2687 9.82969 16.5984 10.5 15.7687 10.5Z"
            fill={Colors[fill!] ?? "black"}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2530_13056">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_2530_13056">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
