
interface OrcidIconProps {
  size?: number;
  className?: string;
}

const OrcidIcon = ({ size = 16, className = "" }: OrcidIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      fill="currentColor"
    >
      <path d="M256 128c0 70.7-57.3 128-128 128C57.3 256 0 198.7 0 128C0 57.3 57.3 0 128 0C198.7 0 256 57.3 256 128zM86.3 186.2H70.9V79.1h15.4v107.1zM78.2 71.4c-5.4 0-9.7-4.3-9.7-9.7s4.3-9.7 9.7-9.7s9.7 4.3 9.7 9.7S83.6 71.4 78.2 71.4zM186.8 186.2h-15.4v-54.4c0-6.1-.1-14-8.5-14c-8.5 0-9.8 6.6-9.8 13.5v54.9h-15.4V79.1h14.8v14.6h.2c2.1-3.9 7.2-8 14.8-8c15.8 0 18.7 10.4 18.7 23.9v76.6h-.4z"/>
      <circle cx="78.2" cy="61.7" r="9.7" fill="white"/>
      <rect x="70.9" y="79.1" width="15.4" height="107.1" fill="white"/>
      <rect x="137.3" y="79.1" width="15.4" height="107.1" fill="white"/>
      <path d="M152.7 93.7h.2c2.1-3.9 7.2-8 14.8-8c15.8 0 18.7 10.4 18.7 23.9v76.6h-15.4v-54.4c0-6.1-.1-14-8.5-14c-8.5 0-9.8 6.6-9.8 13.5v54.9" fill="white"/>
    </svg>
  );
};

export default OrcidIcon;
