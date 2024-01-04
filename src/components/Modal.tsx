import React from "react";

interface propsInterface {
  isVisible: boolean;
  onClose: boolean;
}
const Modal = (props: propsInterface) => {
  const { isVisible, onClose } = props;
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center">
      <div>This is custom modal</div>
    </div>
  );
};

export default Modal;
