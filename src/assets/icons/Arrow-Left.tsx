import { IconProps } from "./@types";

export default function Arrow_Left({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3014_27458)">
        <path
          d="M4.94061 10.9407C4.35468 11.5267 4.35468 12.4782 4.94061 13.0642L13.9406 22.0642C14.5266 22.6501 15.4781 22.6501 16.0641 22.0642C16.65 21.4782 16.65 20.5267 16.0641 19.9407L8.12343 12.0001L16.0594 4.05947C16.6453 3.47354 16.6453 2.52197 16.0594 1.93604C15.4734 1.3501 14.5219 1.3501 13.9359 1.93604L4.93593 10.936L4.94061 10.9407Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_3014_27458">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
