import { IconProps } from "./@types";

export default function Arrow_Right({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3026_27887)">
        <path
          d="M19.0594 13.0593C19.6453 12.4733 19.6453 11.5218 19.0594 10.9358L10.0594 1.93584C9.47345 1.3499 8.52189 1.3499 7.93595 1.93584C7.35001 2.52178 7.35001 3.47334 7.93595 4.05928L15.8766 11.9999L7.94064 19.9405C7.3547 20.5265 7.3547 21.478 7.94064 22.064C8.52657 22.6499 9.47814 22.6499 10.0641 22.064L19.0641 13.064L19.0594 13.0593Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_3026_27887">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="matrix(-1 0 0 -1 24 24)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
