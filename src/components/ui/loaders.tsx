const LoadingSpinner = ({ size = "md", color = "accent" }: {
  size?: "sm" | "md" | "lg";
  color?: "accent" | "white" | "black";
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  const colorClasses = {
    accent: "border-accent",
    white: "border-white",
    black: "border-black"
  };

  return (
    <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-t-transparent ${colorClasses[color]}`}></div>
  );
};

const ShimmerLoader = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`bg-gradient-to-r from-muted via-accent/20 to-muted bg-[length:200%_100%] animate-shimmer rounded ${className}`}></div>
  );
};

const PulseLoader = ({ dots = 3, color = "accent" }: {
  dots?: number;
  color?: "accent" | "white" | "black";
}) => {
  const colorClasses = {
    accent: "bg-accent",
    white: "bg-white",
    black: "bg-black"
  };

  return (
    <div className="flex space-x-2">
      {Array.from({ length: dots }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${colorClasses[color]} animate-pulse`}
          style={{ animationDelay: `${i * 0.2}s` }}
        ></div>
      ))}
    </div>
  );
};

const TypingLoader = ({ text = "Loading" }: {
  text?: string;
  speed?: number;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="font-medium">{text}</span>
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1 h-1 bg-accent rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export { LoadingSpinner, ShimmerLoader, PulseLoader, TypingLoader };