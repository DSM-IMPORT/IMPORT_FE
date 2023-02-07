import { IconProps } from "./@types";

export default function Home({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2514_11995)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.4 0.512C10.8616 0.179655 11.423 0 12 0C12.577 0 13.1384 0.179655 13.6 0.512L22.9333 7.232C23.2645 7.47046 23.5333 7.77966 23.7185 8.13513C23.9036 8.4906 24 8.88257 24 9.28V21.44C24 22.119 23.719 22.7701 23.219 23.2502C22.7189 23.7303 22.0406 24 21.3333 24H2.66667C1.95942 24 1.28115 23.7303 0.781048 23.2502C0.280951 22.7701 0 22.119 0 21.44V9.28C0 8.88257 0.0963869 8.4906 0.281528 8.13513C0.466668 7.77966 0.735477 7.47046 1.06667 7.232L10.4 0.512Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2514_11995">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
