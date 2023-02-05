import { IconProps } from "./@types";

export default function Up({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2530_13039)">
        <path
          d="M12.9888 7.39047C12.4422 6.86984 11.5544 6.86984 11.0078 7.39047L5.41011 12.7217C5.00777 13.1049 4.8897 13.6755 5.10836 14.1753C5.32702 14.6751 5.8343 15 6.40282 15H17.5981C18.1623 15 18.674 14.6751 18.8926 14.1753C19.1113 13.6755 18.9888 13.1049 18.5909 12.7217L12.9932 7.39047H12.9888Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2530_13039">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
