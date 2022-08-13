import { useState } from "react";

function useModal(initialStatus = false) {
  const [isOpen, setIsOpen] = useState(initialStatus);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return { isOpen, handleOpen, handleClose };
}

export { useModal };
