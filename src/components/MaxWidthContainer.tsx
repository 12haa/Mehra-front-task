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
                className={clsx("px-4 py-10 md:px-4 md:py-10 lg:py-16 hero__section-wrapper ", className)}
                {...restProps}
            >
                <div className="mx-auto w-full max-w-7xl hero__section-childrens">{children}</div>
            </Comp>
        );
    },
);
Bounded.displayName = "Bounded";
export default Bounded;
