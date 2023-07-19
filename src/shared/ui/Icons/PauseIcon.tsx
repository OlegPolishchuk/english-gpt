import React, { ComponentPropsWithRef } from 'react';

export const PauseIcon = (props: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 19.75C8.80189 19.7474 8.61263 19.6676 8.47253 19.5275C8.33244 19.3874 8.25259 19.1981 8.25 19V5C8.25 4.80109 8.32902 4.61032 8.46967 4.46967C8.61032 4.32902 8.80109 4.25 9 4.25C9.19891 4.25 9.38968 4.32902 9.53033 4.46967C9.67098 4.61032 9.75 4.80109 9.75 5V19C9.74741 19.1981 9.66756 19.3874 9.52747 19.5275C9.38737 19.6676 9.19811 19.7474 9 19.75Z" />
      <path d="M15 19.75C14.8019 19.7474 14.6126 19.6676 14.4725 19.5275C14.3324 19.3874 14.2526 19.1981 14.25 19V5C14.25 4.80109 14.329 4.61032 14.4697 4.46967C14.6103 4.32902 14.8011 4.25 15 4.25C15.1989 4.25 15.3897 4.32902 15.5303 4.46967C15.671 4.61032 15.75 4.80109 15.75 5V19C15.7474 19.1981 15.6676 19.3874 15.5275 19.5275C15.3874 19.6676 15.1981 19.7474 15 19.75Z" />
    </svg>
  );
};
