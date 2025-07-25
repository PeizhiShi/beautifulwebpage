
interface OrcidIconProps {
  size?: number;
  className?: string;
}

const OrcidIcon = ({ size = 16, className = "" }: OrcidIconProps) => {
  return (
    <img 
      src="/lovable-uploads/526aa74e-7e03-46e1-b485-5de12e591fed.png"
      alt="ORCID iD"
      width={size}
      height={size}
      className={`inline-block filter grayscale ${className}`}
    />
  );
};

export default OrcidIcon;
