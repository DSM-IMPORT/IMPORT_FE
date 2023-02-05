import { IconProps } from "./@types";

export default function Link({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7425 12.0388C23.8612 9.92006 23.8612 6.48881 21.7425 4.37006C19.8675 2.49506 16.9125 2.25131 14.7563 3.79256L14.6962 3.83381C14.1562 4.22006 14.0325 4.97006 14.4188 5.50631C14.805 6.04256 15.555 6.17006 16.0913 5.78381L16.1513 5.74256C17.355 4.88381 19.0013 5.01881 20.0438 6.06506C21.225 7.24631 21.225 9.15881 20.0438 10.3401L15.8363 14.5551C14.655 15.7363 12.7425 15.7363 11.5612 14.5551C10.515 13.5088 10.38 11.8626 11.2388 10.6626L11.28 10.6026C11.6663 10.0626 11.5388 9.31256 11.0025 8.93006C10.4663 8.54756 9.7125 8.67131 9.33 9.20756L9.28875 9.26756C7.74375 11.4201 7.9875 14.3751 9.8625 16.2501C11.9813 18.3688 15.4125 18.3688 17.5312 16.2501L21.7425 12.0388ZM2.2575 11.1613C0.13875 13.2801 0.13875 16.7113 2.2575 18.8301C4.1325 20.7051 7.0875 20.9488 9.24375 19.4076L9.30375 19.3663C9.84375 18.9801 9.9675 18.2301 9.58125 17.6938C9.195 17.1576 8.445 17.0301 7.90875 17.4163L7.84875 17.4576C6.645 18.3163 4.99875 18.1813 3.95625 17.1351C2.775 15.9501 2.775 14.0376 3.95625 12.8563L8.16375 8.64506C9.345 7.46381 11.2575 7.46381 12.4388 8.64506C13.485 9.69131 13.62 11.3376 12.7613 12.5413L12.72 12.6013C12.3338 13.1413 12.4613 13.8913 12.9975 14.2738C13.5338 14.6563 14.2875 14.5326 14.67 13.9963L14.7113 13.9363C16.2563 11.7801 16.0125 8.82506 14.1375 6.95006C12.0188 4.83131 8.5875 4.83131 6.46875 6.95006L2.2575 11.1613Z"
        fill={fill ?? "black"}
      />
    </svg>
  );
}