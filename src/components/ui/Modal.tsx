"use client";
import React, { ReactNode } from "react";
import { Portal } from "@headlessui/react";

interface ModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  onBack?: () => void;
  backVisible: boolean;
  closeVisible: boolean;
  title?: string;
  dontCloseOnOuterClick?: boolean;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  if (props.visible)
    return (
      <Portal>
        <div
          onClick={
            !props.dontCloseOnOuterClick
              ? () => props.setVisible(false)
              : () => {}
          }
          className="fixed inset-0 ios-bottom w-full z-20 bg-black/40"
        ></div>
        <div className="fixed inset-0 ios-bottom w-full z-20 flex items-center justify-center pointer-events-none">
          <div className="w-[calc(100%-1rem)] relative max-w-[375px] laptop:max-w-[445px] bg-white rounded-xl border border-brand-gray-border">
            {props.children}
          </div>
        </div>
      </Portal>
    );
  return null;
};

export default Modal;
