export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 
        bg-black/50 
        flex items-center justify-center 
        z-50 
        px-4
      "
      onClick={onClose}
    >
      <div
        className="
          w-full 
          max-w-md 
          bg-white 
          rounded-2xl 
          p-5 sm:p-6
          relative 
          shadow-xl
          max-h-[90vh]
          overflow-y-auto
          animate-fadeIn
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="
            absolute top-3 right-3 
            text-gray-500 
            hover:text-black
          "
        >
          ✖
        </button>

        {children}
      </div>
    </div>
  );
}