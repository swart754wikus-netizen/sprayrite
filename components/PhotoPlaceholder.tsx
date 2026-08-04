import { CameraIcon } from "./icons";

export default function PhotoPlaceholder({
  label = "Photo coming soon",
  tone = "dark",
  className = "",
  style,
}: {
  label?: string;
  tone?: "dark" | "light";
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`photo-placeholder ${tone} ${className}`} style={style}>
      <div className="photo-placeholder-inner">
        <CameraIcon size={28} />
        <span>{label}</span>
      </div>
    </div>
  );
}
