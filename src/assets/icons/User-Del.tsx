import { IconProps } from "./@types";

export default function User_Del({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3128_42274)">
        <g clip-path="url(#clip1_3128_42274)">
          <path
            d="M1.455 2.19146C1.065 1.88396 0.498747 1.95521 0.191247 2.34521C-0.116253 2.73521 -0.0450028 3.30146 0.344997 3.60896L22.545 21.009C22.935 21.3165 23.5012 21.2452 23.8087 20.8552C24.1162 20.4652 24.045 19.899 23.655 19.5915L13.2487 11.4352C15.2962 10.8877 16.8 9.02021 16.8 6.80021C16.8 4.14896 14.6512 2.00021 12 2.00021C9.3825 2.00021 7.25625 4.09271 7.2 6.69521L1.455 2.19146ZM9.91125 13.4115C6.39375 13.6027 3.6 16.5202 3.6 20.0865C3.6 20.7015 4.09875 21.2002 4.71375 21.2002H19.2862C19.4325 21.2002 19.5712 21.174 19.6987 21.1215L9.91125 13.4115Z"
            fill={fill ?? "black"}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3128_42274">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_3128_42274">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
