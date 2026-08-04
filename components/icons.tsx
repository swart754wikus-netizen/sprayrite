type IconProps = { size?: number; strokeWidth?: number };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function FactoryIcon({ size = 28, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth}>
      <path d="M3 21V11l5 3v-3l5 3v-3l6 3.4V21H3Z" />
      <path d="M18 10.4V6h2v3" />
      <path d="M10 21v-5h3v5" />
    </svg>
  );
}

export function WrenchIcon({ size = 28, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth}>
      <path d="M14.5 6.5a3.5 3.5 0 0 0-4.79 4.79L4 17l3 3 5.71-5.71a3.5 3.5 0 0 0 4.79-4.79l-2.14 2.14-2-2 2.14-2.14Z" />
    </svg>
  );
}

export function PackageIcon({ size = 28, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth}>
      <path d="M3 8l9-5 9 5-9 5-9-5Z" />
      <path d="M3 8v9l9 5 9-5V8" />
      <path d="M12 13v9" />
    </svg>
  );
}

export function HammerIcon({ size = 28, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth}>
      <rect x="13.2" y="2.8" width="6" height="4" rx="1" transform="rotate(45 16.2 4.8)" />
      <line x1="14" y1="8" x2="4.5" y2="17.5" />
      <line x1="3" y1="21" x2="6" y2="18" />
    </svg>
  );
}

export function BagIcon({ size = 28, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth}>
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function DocumentIcon({ size = 28, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="13" y2="16" />
    </svg>
  );
}

export function DropletIcon({ size = 28, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth}>
      <path d="M12 3s7 7.5 7 12a7 7 0 1 1-14 0c0-4.5 7-12 7-12Z" />
    </svg>
  );
}

export function ScissorsIcon({ size = 28, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="8.5" y1="8" x2="20" y2="19" />
      <line x1="8.5" y1="16" x2="20" y2="5" />
    </svg>
  );
}

export function WheatIcon({ size = 28, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth}>
      <path d="M12 22V4" />
      <path d="M12 6c-2-2-5-2-6 0 2 1 4 1 6 0Z" />
      <path d="M12 6c2-2 5-2 6 0-2 1-4 1-6 0Z" />
      <path d="M12 10.5c-2-2-5-2-6 0 2 1 4 1 6 0Z" />
      <path d="M12 10.5c2-2 5-2 6 0-2 1-4 1-6 0Z" />
      <path d="M12 15c-2-2-5-2-6 0 2 1 4 1 6 0Z" />
      <path d="M12 15c2-2 5-2 6 0-2 1-4 1-6 0Z" />
    </svg>
  );
}

export function ShieldCheckIcon({ size = 28, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth}>
      <path d="M12 2.5l7.5 3.5v5.5c0 5-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.5-7.5-9.5V6l7.5-3.5Z" />
      <path d="m8.7 12 2.3 2.2 4.3-4.4" />
    </svg>
  );
}

export function SupportIcon({ size = 28, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="4" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="20" />
      <line x1="4" y1="12" x2="9" y2="12" />
      <line x1="15" y1="12" x2="20" y2="12" />
    </svg>
  );
}

export function CameraIcon({ size = 28, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={strokeWidth}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8.5 7l1.2-2.5h4.6L15.5 7" />
      <circle cx="12" cy="13.5" r="3.4" />
    </svg>
  );
}
