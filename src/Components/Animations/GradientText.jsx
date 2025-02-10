import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = ["rgba(254,0,102,1)", "rgba(228,0,113,1)", "rgba(150,0,139,1)", "rgb(125, 51, 120)", "rgba(254,0,102,1)"],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
