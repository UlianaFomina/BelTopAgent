import React, { SVGProps } from "react";

interface ISpeedometrProps {
  props?: SVGProps<SVGSVGElement>;
  className?: string;
}

export const Mail = ({ className, ...props }: ISpeedometrProps) => {
  return (
    <svg
      className={className}
      {...props}
      width="38"
      height="41"
      viewBox="0 0 38 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.75 12.1666C4.75 11.2825 5.08363 10.4347 5.6775 9.80956C6.27136 9.18444 7.07681 8.83325 7.91667 8.83325H30.0833C30.9232 8.83325 31.7286 9.18444 32.3225 9.80956C32.9164 10.4347 33.25 11.2825 33.25 12.1666V28.8333C33.25 29.7173 32.9164 30.5652 32.3225 31.1903C31.7286 31.8154 30.9232 32.1666 30.0833 32.1666H7.91667C7.07681 32.1666 6.27136 31.8154 5.6775 31.1903C5.08363 30.5652 4.75 29.7173 4.75 28.8333V12.1666Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75 12.1665L19 22.1665L33.25 12.1665"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
