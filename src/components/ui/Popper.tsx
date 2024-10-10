import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { usePopper } from "react-popper";
import { Options, Placement } from "@popperjs/core";
import { cn } from "@/utils/tailwind-merge";

interface Props {
  referenceElement: JSX.Element;
  popperElement: JSX.Element;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  popperStyle?: React.CSSProperties;
  arrowEnabled?: boolean;
  placement?: Placement;
  arrowClassNames?: string;
}

export const Popper: React.FC<Props> = (props) => {
  const [referenceElement, setReferenceElement] = useState<
    HTMLSpanElement | HTMLDivElement | null
  >(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

  useClickAway(containerRef, () => {
    props.setVisible(false);
  });

  //   const referenceElement = () => {
  //     return <div></div>;
  //   };
  //   const popperElement = () => {
  //     return <div></div>;
  //   };
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: props.placement || "bottom-start",
    // modifiers,
  });

  const popper = props.visible && (
    <div
      ref={setPopperElement}
      style={{ ...styles.popper, ...props.popperStyle }}
      className="z-[10] drop-shadow-sm"
      {...attributes.popper}
    >
      {props.arrowEnabled && (
        <div
          ref={setArrowElement}
          style={styles.arrow}
          className="relative h-4 w-6 flex items-center justify-center z-[-1]"
        >
          <div
            className={cn(
              "w-4 h-4 bg-white border -mt-2 rotate-45 transform origin-center",
              props.arrowClassNames
            )}
          ></div>
          <div className="absolute bg-white bottom-0 left-0 right-0 top-[1px]" />
        </div>
      )}

      {props.popperElement}
    </div>
  );

  return (
    <div ref={containerRef}>
      <div ref={setReferenceElement} className="w-full h-full">
        {props.referenceElement}
      </div>
      {popper}
    </div>
  );
};
