/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, ReactNode, memo, useEffect, useRef } from "react";
// import { useClickAway } from "react-use";
import "./style.scss";
import { IoClose } from "react-icons/io5";

type ModalProps = {
  openModal: boolean;
  children: ReactNode;
  maxWidth?: string | number;
  closeModal: () => void;
  title?: string;
};

export const Modal = memo(
  ({ openModal, children, closeModal, maxWidth = 656, title }: ModalProps) => {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
      const checkIfClickedOutside = (e: any) => {
        if (openModal && ref.current && !ref.current.contains(e.target)) {
          closeModal();
        }
      };
      document.body.addEventListener("mousedown", checkIfClickedOutside);
      return () => {
        document.body.removeEventListener("mousedown", checkIfClickedOutside);
      };
    }, [openModal]);

    return (
      <div>
        {openModal && <div className="modal-overlay"></div>}
        <div
          style={{ maxWidth: maxWidth }}
          ref={ref}
          className={openModal ? "open-modal modal-box" : "modal-box"}
        >
          <div className="flex">
            {title && <p className="font-bold text-lg">{title}</p>}
            <button className="close-btn" onClick={() => closeModal()}>
              <IoClose />
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  }
);
