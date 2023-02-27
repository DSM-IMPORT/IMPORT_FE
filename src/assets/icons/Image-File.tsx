import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Image_File({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3071_29122)">
        <path
          d="M6 0C4.34531 0 3 1.34531 3 3V21C3 22.6547 4.34531 24 6 24H18C19.6547 24 21 22.6547 21 21V7.5H15C14.1703 7.5 13.5 6.82969 13.5 6V0H6ZM15 0V6H21L15 0ZM9 12C9 12.8297 8.32969 13.5 7.5 13.5C6.67031 13.5 6 12.8297 6 12C6 11.1703 6.67031 10.5 7.5 10.5C8.32969 10.5 9 11.1703 9 12ZM13.125 13.5C13.3734 13.5 13.6031 13.6219 13.7437 13.8234L17.8688 19.8234C18.0281 20.0531 18.0422 20.3531 17.9156 20.5969C17.7891 20.8406 17.5312 21 17.25 21H13.125H11.25H9H6.75C6.47813 21 6.22969 20.8547 6.09844 20.6203C5.96719 20.3859 5.96719 20.0953 6.10781 19.8656L8.35781 16.1156C8.49375 15.8906 8.7375 15.75 9 15.75C9.2625 15.75 9.50625 15.8859 9.64219 16.1156L10.2422 17.1188L12.5063 13.8281C12.6469 13.6266 12.8766 13.5047 13.125 13.5047V13.5Z"
          fill={Colors[fill!] ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_3071_29122">
          <rect width="18" height="24" fill="white" transform="translate(3)" />
        </clipPath>
      </defs>
    </svg>
  );
}
