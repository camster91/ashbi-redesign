import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

type OverlayShellProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  mode: "sheet" | "panel"; // sheet = full-screen slide-up, panel = right slide-in
  dark?: boolean;
  label: string;
};

export function OverlayShell({ open, onClose, children, mode, dark, label }: OverlayShellProps) {
  // ESC to close + body scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] transition-[visibility] duration-500 ${
        open ? "visible" : "invisible"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-[#12291c]/60 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Content */}
      <div
        className={`absolute transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mode === "sheet"
            ? `inset-0 overflow-y-auto ${open ? "translate-y-0" : "translate-y-full"}`
            : `inset-y-0 right-0 w-full max-w-xl overflow-y-auto shadow-2xl ${
                open ? "translate-x-0" : "translate-x-full"
              }`
        } ${dark ? "bg-[#12291c] text-[#f5f1e6]" : "bg-[#f5f1e6] text-[#12291c]"}`}
      >
        {open ? children : null}
      </div>
    </div>,
    document.body,
  );
}
