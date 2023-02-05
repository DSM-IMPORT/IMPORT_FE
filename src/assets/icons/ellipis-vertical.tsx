import { IconProps } from "./@types";

export default function Ellipis_Vertical({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3014_27469)">
        <path
          d="M12 16.875C13.4484 16.875 14.625 18.0516 14.625 19.5C14.625 20.9484 13.4484 22.125 12 22.125C10.5516 22.125 9.375 20.9484 9.375 19.5C9.375 18.0516 10.5516 16.875 12 16.875ZM12 9.375C13.4484 9.375 14.625 10.5516 14.625 12C14.625 13.4484 13.4484 14.625 12 14.625C10.5516 14.625 9.375 13.4484 9.375 12C9.375 10.5516 10.5516 9.375 12 9.375ZM14.625 4.5C14.625 5.94844 13.4484 7.125 12 7.125C10.5516 7.125 9.375 5.94844 9.375 4.5C9.375 3.05156 10.5516 1.875 12 1.875C13.4484 1.875 14.625 3.05156 14.625 4.5Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_3014_27469">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
