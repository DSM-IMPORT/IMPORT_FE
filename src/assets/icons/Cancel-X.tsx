import { IconProps } from "./@types";

export default function Cancel({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2514_11987)">
        <path
          d="M22.0594 4.94043C22.6453 5.52637 22.6453 6.47793 22.0594 7.06387L10.0594 19.0639C9.47344 19.6498 8.52188 19.6498 7.93594 19.0639L1.93594 13.0639C1.35 12.4779 1.35 11.5264 1.93594 10.9404C2.52188 10.3545 3.47344 10.3545 4.05938 10.9404L9 15.8764L19.9406 4.94043C20.5266 4.35449 21.4781 4.35449 22.0641 4.94043H22.0594Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2514_11987">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
