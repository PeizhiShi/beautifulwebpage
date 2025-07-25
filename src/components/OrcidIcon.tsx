
interface OrcidIconProps {
  size?: number;
  className?: string;
}

const OrcidIcon = ({ size = 16, className = "" }: OrcidIconProps) => {
  return (
    <div 
      className={`inline-flex items-center justify-center rounded-full bg-current text-white font-bold text-xs ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      iD
    </div>
  );
};

export default OrcidIcon;
