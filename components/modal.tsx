"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
  title?: string;
  description?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const Modal = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}: ModalProps) => {
  return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose?.()}>
        <DialogContent dir="rtl">
          {title && (
            <DialogTitle className="mt-8">{title}</DialogTitle>
          ) }
          <DialogDescription>{description}</DialogDescription>
          <div>{children}</div>
          <DialogClose onClick={onClose} />
        </DialogContent>
      </Dialog>
  );
};
