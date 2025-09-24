interface IconProps {
  name: 'close' | 'arrow-left' | 'arrow-right' | 'repository' | 'star' | 'users' | 'following' | 'code' | 'terminal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
};

export default function Icon({ name, size = 'md', className = '' }: IconProps) {
  const sizeClass = iconSizes[size];
  const baseClass = `${sizeClass} ${className}`;

  switch (name) {
    case 'close':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} fill="none" aria-hidden="true">
          <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
        </svg>
      );

    case 'arrow-left':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} fill="none" aria-hidden="true">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
        </svg>
      );

    case 'arrow-right':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} fill="none" aria-hidden="true">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
        </svg>
      );

    case 'repository':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 7H17M7 12H17M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
        </svg>
      );

    case 'star':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} fill="none" aria-hidden="true">
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      );

    case 'users':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} fill="none" aria-hidden="true">
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 21V19C3 16.7909 4.79086 15 7 15H11C13.2091 15 15 16.7909 15 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
          <circle cx="16" cy="6" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 21V19C21 17.3431 19.6569 16 18 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
        </svg>
      );

    case 'following':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} fill="none" aria-hidden="true">
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
        </svg>
      );

    case 'code':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} fill="none" aria-hidden="true">
          <path d="M8 6L2 12L8 18M16 6L22 12L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
        </svg>
      );

    case 'terminal':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} fill="none" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 10L10 14L6 18M12 18H18" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
        </svg>
      );

    default:
      return null;
  }
}