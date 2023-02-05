import { IconProps } from "./@types";

export default function Chat({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2514_11993)">
        <path
          d="M24 11.9987C24.0002 14.0828 23.4575 16.1311 22.4256 17.9418C21.3936 19.7525 19.9079 21.2632 18.1147 22.3252C16.3215 23.3872 14.2826 23.9638 12.1988 23.9984C10.115 24.0329 8.05818 23.5241 6.23077 22.5221L2.76923 23.5029C2.45381 23.5944 2.1196 23.5996 1.80151 23.5178C1.48342 23.4361 1.19311 23.2704 0.960874 23.0382C0.728641 22.8059 0.563007 22.5156 0.481263 22.1975C0.399518 21.8794 0.404661 21.5452 0.496155 21.2298L1.47692 17.7681C0.597695 16.1639 0.0968624 14.3799 0.0127061 12.5524C-0.0714502 10.725 0.263297 8.9025 0.991364 7.22425C1.71943 5.54601 2.82154 4.05643 4.21346 2.86939C5.60538 1.68234 7.25025 0.829247 9.02236 0.375311C10.7945 -0.078625 12.6469 -0.121387 14.4381 0.250293C16.2292 0.621974 17.9117 1.39826 19.3569 2.51981C20.8021 3.64136 21.9718 5.07849 22.7765 6.72136C23.5813 8.36423 23.9997 10.1693 24 11.9987Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2514_11993">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}