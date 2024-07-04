import React, { useCallback, useState } from "react";

import { Pencil } from "lucide-react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

import { cn } from "@/client/lib/utils";

import { ImageButton } from "./button";

export type ImageDropzoneProps = {
  setValue: (arg1: any, arg2: any) => void;
  fieldName: string;
  initialValue?: string;
  type?: string;
};

export type ViewProps = {
  file: string | null | undefined;
  containerClassName?: string;
  removeImage?: () => void;
  getRootProps: any;
  getInputProps: any;
};

const Preview = ({
  file,
  previewClassName,
}: {
  file: string;
  previewClassName?: string;
}) => {
  return (
    <Image
      src={file}
      alt={`image-${file}`}
      width={0}
      height={0}
      className={cn(
        "h-full w-full object-cover opacity-80 lg:opacity-100 lg:group-hover:opacity-80",
        previewClassName
      )}
    />
  );
};

export const ImageDropzone = ({
  setValue,
  fieldName,
  initialValue,
  type,
}: ImageDropzoneProps) => {
  const initialFile = initialValue ? initialValue : null;
  const [file, setFile] = useState<string | null | undefined>(initialFile);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selectedFile = acceptedFiles[0];

      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result?.toString();
        setValue(fieldName, selectedFile && imageDataUrl);
        setFile(imageDataUrl);
      };
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.readAsDataURL(selectedFile);
    },
    [fieldName, setValue]
  );

  const { getRootProps, getInputProps } = useDropzone({
    noKeyboard: true,
    accept: {
      "image/": [".jpg", ".jpeg", ".png"],
    },
    multiple: false,
    onDrop,
  });

  const removeImage = () => {
    setFile(null);
    setValue(fieldName, null);
  };

  if (type === "avatarView")
    return (
      <AvatarView
        file={file}
        getRootProps={getRootProps}
        getInputProps={getInputProps}
      />
    );
  return (
    <DefaultView
      file={file}
      removeImage={removeImage}
      getRootProps={getRootProps}
      getInputProps={getInputProps}
    />
  );
};

export const DefaultView = ({
  file,
  containerClassName,
  removeImage,
  getRootProps,
  getInputProps,
}: ViewProps) => {
  return (
    <div
      className={cn(
        "group relative flex h-32 w-full flex-col items-center justify-center gap-1 overflow-clip rounded-[3px] border border-dashed border-gray-1400 lg:h-40 lg:gap-2 lg:border-2 lg:border-black 2xl:h-48",
        file && "border-none transition-all",
        containerClassName
      )}
    >
      <input {...getInputProps()} />

      {file && (
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 lg:hidden lg:group-hover:block">
          <ImageButton
            buttonClassName="bg-white rounded-lg py-1.5 2xl:py-2 px-4 lg:px-6 2xl:px-8 mb-2 2xl:mb-4"
            {...getRootProps()}
          >
            <span className="font-default text-xs font-medium leading-5 text-black lg:text-sm">
              Replace
            </span>
          </ImageButton>
          <ImageButton
            buttonClassName="bg-white rounded-lg py-1.5 2xl:py-2 px-4 lg:px-6 2xl:px-8"
            onClick={removeImage}
          >
            <span className="font-default text-xs font-medium leading-5 text-black lg:text-sm">
              Remove
            </span>
          </ImageButton>
        </div>
      )}

      {file ? (
        <Preview file={file} />
      ) : (
        <ImageButton
          buttonClassName="self-center justify-self-center bg-dark-100 px-3 py-2 min-w-fit max-w-3/4 lg:px-4 lg:py-3"
          {...getRootProps()}
        >
          <span className="font-default text-xxs leading-5 text-white lg:text-xs">
            Upload Image
          </span>
        </ImageButton>
      )}
    </div>
  );
};

const AvatarView = ({
  file,
  containerClassName,
  getRootProps,
  getInputProps,
}: ViewProps) => {
  return (
    <div className="relative flex w-fit ">
      <div
        className={cn(
          "relative flex h-16 w-16 items-center justify-center overflow-clip rounded-full border border-dashed border-gray-1400 md:h-24 md:w-24 lg:gap-2 lg:border-2 lg:border-black 2xl:h-32 2xl:w-32",
          file && "border-none transition-all",
          containerClassName
        )}
      >
        <input {...getInputProps()} />

        {file && <Preview file={file} />}
      </div>
      <ImageButton
        buttonClassName="absolute w-fit bottom-0.5 -right-2 lg:-right-1"
        {...getRootProps()}
      >
        <Pencil className="h-4 w-4 fill-dark-900 stroke-dark-900" />
      </ImageButton>
    </div>
  );
};
