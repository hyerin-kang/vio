"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import React from "react";

export default function AnimatedTextWrapper({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const cloneChildren = (children) => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.props.children) {
          return React.cloneElement(child, {
            ...child.props,
            children: cloneChildren(child.props.children),
          });
        } else {
          return React.cloneElement(child, { isInView });
        }
      }
      return child;
    });
  };

  return <div ref={ref}>{cloneChildren(children)}</div>;
}
