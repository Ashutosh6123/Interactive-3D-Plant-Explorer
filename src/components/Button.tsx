import { forwardRef, ElementType } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  asChild?: boolean;
  href?: string;
  to?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', isLoading, children, href, to, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      outline: "border border-border bg-transparent hover:bg-muted text-foreground",
      ghost: "bg-transparent hover:bg-muted text-foreground",
      link: "bg-transparent underline-offset-4 hover:underline text-foreground",
      gradient: "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md hover:shadow-lg hover:brightness-110"
    };
    
    const sizes = {
      sm: "h-9 px-4 rounded-md text-sm",
      md: "h-10 py-2 px-6 rounded-md",
      lg: "h-12 py-2 px-8 rounded-lg text-lg"
    };
    
    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );
    
    // If 'to' prop is provided, render as React Router Link
    if (to) {
      return (
        <Link
          to={to}
          className={classes}
          {...props as any}
        >
          {isLoading ? (
            <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          ) : null}
          {children}
        </Link>
      );
    }
    
    // If 'href' prop is provided, render as anchor
    if (href) {
      return (
        <a
          href={href}
          className={classes}
          {...props as any}
        >
          {isLoading ? (
            <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          ) : null}
          {children}
        </a>
      );
    }
    
    // Otherwise, render as button
    return (
      <button
        className={classes}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
