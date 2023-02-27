import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Send({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2530_13044)">
        <g clipPath="url(#clip1_2530_13044)">
          <path
            d="M23.3484 0.262679C23.8219 0.590804 24.0703 1.15799 23.9813 1.72518L20.9813 21.2252C20.9109 21.6799 20.6344 22.0783 20.2313 22.3033C19.8281 22.5283 19.3453 22.5564 18.9188 22.3783L13.3125 20.0486L10.1016 23.5221C9.68437 23.9767 9.02813 24.1267 8.45156 23.9017C7.875 23.6767 7.5 23.1189 7.5 22.5002V18.5814C7.5 18.3939 7.57031 18.2158 7.69688 18.0799L15.5531 9.50643C15.825 9.21112 15.8156 8.75643 15.5344 8.47518C15.2531 8.19393 14.7984 8.17518 14.5031 8.44237L4.96875 16.9127L0.829687 14.8408C0.332812 14.5924 0.0140624 14.0955 -5.25615e-08 13.5424C-0.0140626 12.9892 0.276563 12.4736 0.754687 12.1971L21.7547 0.197054C22.2563 -0.0888833 22.875 -0.0607583 23.3484 0.262679Z"
            fill={Colors[fill!] ?? "black"}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2530_13044">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_2530_13044">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
