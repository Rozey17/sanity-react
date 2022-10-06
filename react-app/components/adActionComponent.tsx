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
  const [favorite, setFavorite] = useState(false);
  const router = useRouter();
  const slug = router.query.slug;
  console.log(favorite);
  const url =
    process.env.NODE_ENV === "development"
      ? `localhost:3000/advert/${slug}`
      : `https://sanity-react-dusky.vercel.app/advert/${slug}`;
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
        <button
          onClick={() => setFavorite(!favorite)}
          className="flex flex-col items-center"
        >
          <HeartIcon
            className={
              favorite === true ? "fill-red-500 text-red-500 h-5" : "h-5"
            }
          />
          <p className="capitalize">favoris</p>
        </button>{" "}
        <a href="#" className="flex flex-col">
          <FlagIcon className="h-5" />
          <p className="capitalize">signaler</p>
        </a>
      </div>
      <Modal
        centered
        overlayOpacity={0.55}
        overlayBlur={3}
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
            url={url}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <RedditShareButton title="redit share" url={url}>
            <RedditIcon size={32} round />
          </RedditShareButton>
          <TwitterShareButton title="share" url={url}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton title="share" url={url}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <TelegramShareButton title="share" url={url}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
      </Modal>
    </>
  );
};
