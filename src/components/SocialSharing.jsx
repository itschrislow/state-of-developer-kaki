import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

import facebook from "../icons/facebook.svg";
import whatsapp from "../icons/whatsapp.svg";
import twitter from "../icons/twitter.svg";
import link from "../icons/link.svg";
import share from "../icons/share.svg";
import download from "../icons/download.svg";
import tick from "../icons/tick.svg";
import {
  copyLinkToClipboard,
  shareToFacebook,
  shareToTwitter,
  shareToWhatsapp,
} from "../lib/helpers";
import { handleGA4Event } from "../lib/ga4";

export default function SocialSharing({ path, ga4Label, imageLink }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }, [isCopied]);

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="p-1 text-white rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 focus:outline-none focus-visible:ring-0"
      >
        <img src={share} alt="Share to Social Media" className="w-6 h-6" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform text-white font-mono bg-black border border-dashed">
                <div className="flex flex-col divide-y divide-dashed">
                  {/* FACEBOOK */}
                  <button
                    className="social-share-item"
                    onClick={() => {
                      handleGA4Event({
                        action: "Social Sharing",
                        category: "Facebook",
                        label: ga4Label,
                      });
                      shareToFacebook(`${window.location.origin}${path}`);
                    }}
                  >
                    <img
                      src={facebook}
                      alt="Share chart on Facebook"
                      className="w-6 h-6"
                    />
                    <h4>Share chart on Facebook</h4>
                  </button>
                  {/* WHATSAPP */}
                  <button
                    className="social-share-item"
                    onClick={() => {
                      handleGA4Event({
                        category: "Whatsapp",
                        action: "Social Sharing",
                        label: ga4Label,
                      });
                      shareToWhatsapp(`${window.location.origin}${path}`);
                    }}
                  >
                    <img
                      src={whatsapp}
                      alt="Share chart on Whatsapp"
                      className="w-6 h-6"
                    />
                    <h4>Share chart on Whatsapp</h4>
                  </button>
                  {/* TWITTER */}
                  <button
                    className="social-share-item"
                    onClick={() => {
                      handleGA4Event({
                        category: "Twitter",
                        action: "Social Sharing",
                        label: ga4Label,
                      });
                      shareToTwitter(`${window.location.origin}${path}`);
                    }}
                  >
                    <img
                      src={twitter}
                      alt="Share chart on Twitter"
                      className="w-6 h-6"
                    />
                    <h4>Share chart on Twitter</h4>
                  </button>
                  {/* COPY LINK */}
                  <button
                    className="social-share-item"
                    onClick={() => {
                      handleGA4Event({
                        category: "Copy Link",
                        action: "Social Sharing",
                        label: ga4Label,
                      });
                      copyLinkToClipboard(`${window.location.origin}${path}`);
                      setIsCopied(true);
                    }}
                  >
                    <img
                      src={isCopied ? tick : link}
                      alt="Copy link"
                      className="w-6 h-6"
                    />
                    <h4>Copy link</h4>
                  </button>
                  {/* DOWNLOAD IMAGE */}
                  {imageLink && (
                    <a
                      className="social-share-item"
                      target="_blank"
                      rel="noreferrer"
                      href={imageLink}
                      onClick={() => {
                        handleGA4Event({
                          category: "Download Chart",
                          action: "Social Sharing",
                          label: ga4Label,
                        });
                      }}
                    >
                      <img src={download} alt="Copy link" className="w-6 h-6" />
                      <h4>Download chart</h4>
                    </a>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
