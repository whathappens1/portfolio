"use client";

import { Toaster } from "react-hot-toast";

export const ToastProvider = () => {
  return <div dir="rtl"><Toaster position="bottom-left" reverseOrder={false} /></div>;
};
