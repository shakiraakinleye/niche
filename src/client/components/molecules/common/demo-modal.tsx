import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";

import Image, { StaticImageData } from "next/image";

import Modal from "@/components/atoms/modal";

export type modalElementsType = {
  image: StaticImageData;
  title: string;
  description?: string;
};

export const BasicModalContent = ({
  modalElements,
}: {
  modalElements: modalElementsType;
}) => {
  const { image, title, description } = modalElements;

  return (
    <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-8 text-center text-black md:px-16 md:py-12">
        <a href="https://niche.com">
          <Image
            src={image}
            alt={title}
            className="h-10 w-10 rounded-full md:h-13 md:w-13 lg:h-18 lg:w-18 xl:h-24 xl:w-24"
          />
        </a>
        <h3 className="font-display text-lg font-semibold leading-8 tracking-tight md:text-xl xl:text-2xl">
          {title}
        </h3>
        {description && (
          <p className="font-default text-xs leading-5 md:text-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
  modalContent,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
  modalContent: React.ReactNode;
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      {modalContent}
    </Modal>
  );
};

export function useDemoModal(
  modalContent: React.ReactNode,
  showModal?: boolean
) {
  const [showDemoModal, setShowDemoModal] = useState(showModal || false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
        modalContent={modalContent}
      />
    );
  }, [showDemoModal, setShowDemoModal, modalContent]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback]
  );
}
