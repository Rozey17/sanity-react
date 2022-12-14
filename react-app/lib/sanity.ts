import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";
import { sanityConfig } from "./config";

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source).auto("format").fit("max");

export const usePreviewSubscription =
  createPreviewSubscriptionHook(sanityConfig);

export const useCurrentUser = createCurrentUserHook(sanityConfig);
