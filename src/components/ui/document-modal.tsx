"use client";

import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useId, useRef, useState } from "react";

export function DocumentModal({
  buttonLabel,
  title,
  organization,
  images = [],
  originalUrl,
}: {
  buttonLabel: string;
  title: string;
  organization: string;
  images?: string[];
  originalUrl?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [unavailable, setUnavailable] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const image = images[imageIndex];
  const preview = unavailable || !image
    ? "/images/placeholders/credential-placeholder.png"
    : image;

  return (
    <>
      <button
        className="document-action"
        type="button"
        onClick={() => {
          setImageIndex(0);
          setUnavailable(false);
          dialogRef.current?.showModal();
        }}
      >
        {buttonLabel} <ArrowUpRight size={12} aria-hidden="true" />
      </button>
      <dialog
        className="document-dialog"
        ref={dialogRef}
        aria-labelledby={titleId}
        onCancel={() => dialogRef.current?.close()}
        onKeyDown={(event) => {
          if (event.key === "Escape") dialogRef.current?.close();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="document-dialog__panel">
          <div className="document-dialog__header">
            <p className="eyebrow" id={titleId}>{buttonLabel}</p>
            <button
              className="document-dialog__close"
              type="button"
              aria-label="Close document preview"
              onClick={() => dialogRef.current?.close()}
            >
              <X size={17} aria-hidden="true" />
            </button>
          </div>
          <div className="document-dialog__image">
            <Image
              src={preview}
              alt={
                image && !unavailable
                  ? title
                  : buttonLabel === "View documentation"
                    ? "Documentation preview placeholder"
                    : "Credential preview placeholder"
              }
              fill
              sizes="(max-width: 680px) 94vw, 760px"
              onError={() => setUnavailable(true)}
            />
            {(!image || unavailable) && (
              <div className="document-dialog__placeholder">
                <strong>{buttonLabel === "View documentation" ? "DOCUMENTATION PREVIEW" : "CREDENTIAL PREVIEW"}</strong>
                <span>Replace with real {buttonLabel === "View documentation" ? "documentation" : "certificate"}</span>
              </div>
            )}
            {images.length > 1 && (
              <div className="document-dialog__gallery-controls">
                <button
                  type="button"
                  aria-label="Previous document"
                  onClick={() => {
                    setImageIndex((index) => (index - 1 + images.length) % images.length);
                    setUnavailable(false);
                  }}
                >
                  Previous
                </button>
                <span>{imageIndex + 1} / {images.length}</span>
                <button
                  type="button"
                  aria-label="Next document"
                  onClick={() => {
                    setImageIndex((index) => (index + 1) % images.length);
                    setUnavailable(false);
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
          <div className="document-dialog__footer">
            <div>
              <p>{organization}</p>
              <h3>{title}</h3>
            </div>
            {originalUrl && (
              <a href={originalUrl} target="_blank" rel="noopener noreferrer">
                Open original <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
