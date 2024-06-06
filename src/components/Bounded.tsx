import React from "react";
import clsx from "clsx";

interface BoundedProps {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties
    childrenStyle?: React.CSSProperties
}

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
    ({as: Comp = "section", className,style ,childrenStyle, children, ...restProps}, ref) => {
        return (
            <Comp
                ref={ref}
                className={clsx("hero__section-wrapper", className)}
                {...restProps}
                style={style}
            >
                <div className="hero__section-childrens" style={childrenStyle}>{children}</div>
            </Comp>
        );
    },
);
Bounded.displayName = "Bounded";
export default Bounded;
