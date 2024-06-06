import React from "react";
import clsx from "clsx";

interface BoundedProps {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
    ({as: Comp = "section", className, children, ...restProps}, ref) => {
        return (
            <Comp
                ref={ref}
                className={clsx("hero__section-wrapper ", className)}
                {...restProps}
            >
                <div className="hero__section-childrens">{children}</div>
            </Comp>
        );
    },
);
Bounded.displayName = "Bounded";
export default Bounded;
