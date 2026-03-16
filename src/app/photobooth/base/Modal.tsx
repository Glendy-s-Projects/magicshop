import { ModalProps } from "@/types/index";

const Modal = ({ open, children }: ModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="modal">
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

      <div
        className="relative z-10 w-full max-w-2xl rounded-lg text-left overflow-hidden shadow-xl transform transition-all"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div className="bg-purple-500 px-4 pb-4 sm:p-6 sm:pb-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
