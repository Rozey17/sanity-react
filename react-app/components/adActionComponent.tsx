import React, { useState } from "react";
import { Modal } from "@mantine/core";
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  FlagIcon,
  HeartIcon,
  PrinterIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

export const AdActionComponent = () => {
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between text-gray-500 text-sm">
        <button
          onClick={() => setOpened(true)}
          className="flex flex-col items-center"
        >
          <ShareIcon className="h-5" />
          <p className="capitalize">partager</p>
        </button>
        <a href="#" className="flex flex-col">
          <PrinterIcon className="h-5" />
          <p className="capitalize">imprimer</p>
        </a>{" "}
        <a href="#" className="flex flex-col">
          <HeartIcon className="h-5" />
          <p className="capitalize">favoris</p>
        </a>{" "}
        <a href="#" className="flex flex-col">
          <FlagIcon className="h-5" />
          <p className="capitalize">signaler</p>
        </a>
      </div>
      <Modal
        centered
        // overlayOpacity={0.55}
        // overlayBlur={3}
        opened={opened}
        onClose={() => setOpened(false)}
        title="Partager via"
        classNames={{
          modal: "z-20",
          overlay: "z-10",
        }}
      >
        <div className="flex gap-5">
          <FacebookShareButton
            quote="partager sur facebook"
            hashtag="#facebook"
            url="facebook.com"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <RedditShareButton title="redit share" url="reddit.com">
            <RedditIcon size={32} round />
          </RedditShareButton>
          <TwitterShareButton title="share" url="Twitter.com">
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton title="share" url="Linkedin.com">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <TelegramShareButton title="share" url="Telegram.com">
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
      </Modal>
    </>
  );
};
