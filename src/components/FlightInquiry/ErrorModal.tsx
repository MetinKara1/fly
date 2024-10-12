"use client";
import { cn } from "@/utils/tailwind-merge";
import React, { useState } from "react";
import { useIcons } from "../icons/use-icons";
import { Button } from "../ui/Button";
import Modal from "../ui/Modal";

interface ErrorModalProps {
  content: string;
  visible: boolean;
  setVisible: any;
}

const ErrorModal = (props: ErrorModalProps) => {
  const { WarningIcon } = useIcons();
  return (
    <Modal
      visible={props.visible}
      setVisible={props.setVisible}
      backVisible={false}
      closeVisible={true}
    >
      <div className="p-5">
        <div className="flex gap-4">
          <WarningIcon />
          <p>{props.content}</p>
        </div>
        <div className="flex justify-end pt-2">
          <Button
            text="Kapat"
            className={cn(
              "flex justify-center border-t bg-main-red-primary text-white py-2 px-4 cursor-pointer"
            )}
            onClick={() => props.setVisible(false)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;
