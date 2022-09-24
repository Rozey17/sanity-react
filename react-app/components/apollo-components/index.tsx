import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
};

export type Account = Document & {
  __typename?: 'Account';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  providerType?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type AccountFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  accessToken?: InputMaybe<StringFilter>;
  accessTokenExpires?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  providerId?: InputMaybe<StringFilter>;
  providerType?: InputMaybe<StringFilter>;
  refreshToken?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserFilter>;
};

export type AccountSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  accessToken?: InputMaybe<SortOrder>;
  accessTokenExpires?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  providerId?: InputMaybe<SortOrder>;
  providerType?: InputMaybe<SortOrder>;
  refreshToken?: InputMaybe<SortOrder>;
};

export type Advert = Document & {
  __typename?: 'Advert';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  contact?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  location?: Maybe<Geopoint>;
  price?: Maybe<Scalars['Float']>;
  slug?: Maybe<Slug>;
  subcategory?: Maybe<Subcategory>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type AdvertFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  contact?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
  location?: InputMaybe<GeopointFilter>;
  price?: InputMaybe<FloatFilter>;
  slug?: InputMaybe<SlugFilter>;
  subcategory?: InputMaybe<SubcategoryFilter>;
  title?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserFilter>;
};

export type AdvertSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  contact?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  location?: InputMaybe<GeopointSorting>;
  price?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Block = {
  __typename?: 'Block';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<Span>>>;
  list?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type Category = Document & {
  __typename?: 'Category';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  subcategories?: Maybe<Array<Maybe<Subcategory>>>;
};

export type CategoryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export type CategorySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Date']>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type File = {
  __typename?: 'File';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Float']>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['ID']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<Scalars['ID']>>;
};

export type Image = {
  __typename?: 'Image';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Int']>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  Account?: Maybe<Account>;
  Advert?: Maybe<Advert>;
  Category?: Maybe<Category>;
  Document?: Maybe<Document>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  Subcategory?: Maybe<Subcategory>;
  User?: Maybe<User>;
  allAccount: Array<Account>;
  allAdvert: Array<Advert>;
  allCategory: Array<Category>;
  allDocument: Array<Document>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allSubcategory: Array<Subcategory>;
  allUser: Array<User>;
};


export type RootQueryAccountArgs = {
  id: Scalars['ID'];
};


export type RootQueryAdvertArgs = {
  id: Scalars['ID'];
};


export type RootQueryCategoryArgs = {
  id: Scalars['ID'];
};


export type RootQueryDocumentArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID'];
};


export type RootQuerySubcategoryArgs = {
  id: Scalars['ID'];
};


export type RootQueryUserArgs = {
  id: Scalars['ID'];
};


export type RootQueryAllAccountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AccountSorting>>;
  where?: InputMaybe<AccountFilter>;
};


export type RootQueryAllAdvertArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AdvertSorting>>;
  where?: InputMaybe<AdvertFilter>;
};


export type RootQueryAllCategoryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CategorySorting>>;
  where?: InputMaybe<CategoryFilter>;
};


export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};


export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};


export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};


export type RootQueryAllSubcategoryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SubcategorySorting>>;
  where?: InputMaybe<SubcategoryFilter>;
};


export type RootQueryAllUserArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<UserSorting>>;
  where?: InputMaybe<UserFilter>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
  top?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars['String']>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars['Boolean']>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars['ID']>;
};

export type Slug = {
  __typename?: 'Slug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC'
}

export type Span = {
  __typename?: 'Span';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['String']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<Scalars['String']>>;
};

export type Subcategory = Document & {
  __typename?: 'Subcategory';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  adverts?: Maybe<Array<Maybe<Advert>>>;
  category?: Maybe<Category>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
};

export type SubcategoryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  category?: InputMaybe<CategoryFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export type SubcategorySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
};

export type User = Document & {
  __typename?: 'User';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
};

export type UserSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type ListAdvertsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListAdvertsQuery = { __typename?: 'RootQuery', allAdvert: Array<{ __typename?: 'Advert', _id?: string | null, contact?: string | null, description?: string | null, _type?: string | null, title?: string | null, price?: number | null, user?: { __typename?: 'User', _id?: string | null, _type?: string | null, _createdAt?: any | null, _updatedAt?: any | null, name?: string | null, email?: string | null, image?: string | null } | null, slug?: { __typename?: 'Slug', current?: string | null } | null, subcategory?: { __typename?: 'Subcategory', _id?: string | null, name?: string | null, category?: { __typename?: 'Category', _id?: string | null, name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null } | null, location?: { __typename?: 'Geopoint', lat?: number | null, lng?: number | null, alt?: number | null } | null, image?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null }> };

export type GetAdvertQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAdvertQuery = { __typename?: 'RootQuery', Advert?: { __typename?: 'Advert', _id?: string | null, contact?: string | null, description?: string | null, _type?: string | null, title?: string | null, price?: number | null, user?: { __typename?: 'User', _id?: string | null, _type?: string | null, _createdAt?: any | null, _updatedAt?: any | null, name?: string | null, email?: string | null, image?: string | null } | null, slug?: { __typename?: 'Slug', current?: string | null } | null, subcategory?: { __typename?: 'Subcategory', _id?: string | null, name?: string | null } | null, location?: { __typename?: 'Geopoint', lat?: number | null, lng?: number | null, alt?: number | null } | null, image?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null } | null };

export type ListAdvertsByCategoryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ListAdvertsByCategoryQuery = { __typename?: 'RootQuery', allAdvert: Array<{ __typename?: 'Advert', _id?: string | null, title?: string | null, _createdAt?: any | null, description?: string | null, contact?: string | null, price?: number | null, slug?: { __typename?: 'Slug', current?: string | null } | null, subcategory?: { __typename?: 'Subcategory', _id?: string | null, name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, location?: { __typename?: 'Geopoint', lat?: number | null, lng?: number | null, alt?: number | null } | null, image?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null }> };

export type ListAdvertsBySubCategoryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ListAdvertsBySubCategoryQuery = { __typename?: 'RootQuery', allAdvert: Array<{ __typename?: 'Advert', _id?: string | null, title?: string | null, _createdAt?: any | null, description?: string | null, contact?: string | null, price?: number | null, slug?: { __typename?: 'Slug', current?: string | null } | null, subcategory?: { __typename?: 'Subcategory', _id?: string | null, name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, location?: { __typename?: 'Geopoint', lat?: number | null, lng?: number | null, alt?: number | null } | null, image?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null }> };

export type ListAdvertSearchQueryVariables = Exact<{
  lat: Scalars['Float'];
  lng?: InputMaybe<Scalars['Float']>;
  title: Scalars['String'];
  subcategory: Scalars['ID'];
}>;


export type ListAdvertSearchQuery = { __typename?: 'RootQuery', allAdvert: Array<{ __typename?: 'Advert', _id?: string | null, title?: string | null, _createdAt?: any | null, description?: string | null, contact?: string | null, price?: number | null, slug?: { __typename?: 'Slug', current?: string | null } | null, subcategory?: { __typename?: 'Subcategory', _id?: string | null, name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, location?: { __typename?: 'Geopoint', lat?: number | null, lng?: number | null, alt?: number | null } | null, image?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null }> };

export type ListCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCategoriesQuery = { __typename?: 'RootQuery', allCategory: Array<{ __typename?: 'Category', _id?: string | null, name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null, subcategories?: Array<{ __typename?: 'Subcategory', _id?: string | null, name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null, adverts?: Array<{ __typename?: 'Advert', _id?: string | null, title?: string | null } | null> | null, category?: { __typename?: 'Category', _id?: string | null, name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null } | null> | null }> };

export type ListSubCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListSubCategoriesQuery = { __typename?: 'RootQuery', allSubcategory: Array<{ __typename?: 'Subcategory', _id?: string | null, _type?: string | null, name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null, category?: { __typename?: 'Category', _id?: string | null, name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, adverts?: Array<{ __typename?: 'Advert', _id?: string | null, title?: string | null, description?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null, subcategory?: { __typename?: 'Subcategory', _id?: string | null, name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null } | null> | null }> };

export type ListUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListUsersQuery = { __typename?: 'RootQuery', allUser: Array<{ __typename?: 'User', _id?: string | null, _type?: string | null, _createdAt?: any | null, _updatedAt?: any | null, _rev?: string | null, _key?: string | null, name?: string | null, email?: string | null, image?: string | null, password?: string | null }> };

export type ListUsersByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type ListUsersByEmailQuery = { __typename?: 'RootQuery', allUser: Array<{ __typename?: 'User', _id?: string | null, _type?: string | null, _createdAt?: any | null, _updatedAt?: any | null, _rev?: string | null, _key?: string | null, name?: string | null, email?: string | null, image?: string | null }> };


export const ListAdvertsDocument = gql`
    query ListAdverts {
  allAdvert {
    _id
    user {
      _id
      _type
      _createdAt
      _updatedAt
      name
      email
      image
    }
    slug {
      current
    }
    contact
    description
    _type
    title
    subcategory {
      _id
      name
      category {
        _id
        slug {
          current
        }
        name
      }
    }
    location {
      lat
      lng
      alt
    }
    price
    image {
      asset {
        url
      }
    }
  }
}
    `;

/**
 * __useListAdvertsQuery__
 *
 * To run a query within a React component, call `useListAdvertsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAdvertsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAdvertsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListAdvertsQuery(baseOptions?: Apollo.QueryHookOptions<ListAdvertsQuery, ListAdvertsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAdvertsQuery, ListAdvertsQueryVariables>(ListAdvertsDocument, options);
      }
export function useListAdvertsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAdvertsQuery, ListAdvertsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAdvertsQuery, ListAdvertsQueryVariables>(ListAdvertsDocument, options);
        }
export type ListAdvertsQueryHookResult = ReturnType<typeof useListAdvertsQuery>;
export type ListAdvertsLazyQueryHookResult = ReturnType<typeof useListAdvertsLazyQuery>;
export type ListAdvertsQueryResult = Apollo.QueryResult<ListAdvertsQuery, ListAdvertsQueryVariables>;
export const GetAdvertDocument = gql`
    query GetAdvert($id: ID!) {
  Advert(id: $id) {
    _id
    user {
      _id
      _type
      _createdAt
      _updatedAt
      name
      email
      image
    }
    slug {
      current
    }
    contact
    description
    _type
    title
    subcategory {
      _id
      name
    }
    location {
      lat
      lng
      alt
    }
    price
    image {
      asset {
        url
      }
    }
  }
}
    `;

/**
 * __useGetAdvertQuery__
 *
 * To run a query within a React component, call `useGetAdvertQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdvertQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdvertQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAdvertQuery(baseOptions: Apollo.QueryHookOptions<GetAdvertQuery, GetAdvertQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdvertQuery, GetAdvertQueryVariables>(GetAdvertDocument, options);
      }
export function useGetAdvertLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdvertQuery, GetAdvertQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdvertQuery, GetAdvertQueryVariables>(GetAdvertDocument, options);
        }
export type GetAdvertQueryHookResult = ReturnType<typeof useGetAdvertQuery>;
export type GetAdvertLazyQueryHookResult = ReturnType<typeof useGetAdvertLazyQuery>;
export type GetAdvertQueryResult = Apollo.QueryResult<GetAdvertQuery, GetAdvertQueryVariables>;
export const ListAdvertsByCategoryDocument = gql`
    query ListAdvertsByCategory($slug: String!) {
  allAdvert(where: {subcategory: {category: {slug: {current: {eq: $slug}}}}}) {
    _id
    title
    _createdAt
    slug {
      current
    }
    description
    subcategory {
      _id
      name
      slug {
        current
      }
    }
    contact
    price
    location {
      lat
      lng
      alt
    }
    image {
      asset {
        url
      }
    }
  }
}
    `;

/**
 * __useListAdvertsByCategoryQuery__
 *
 * To run a query within a React component, call `useListAdvertsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAdvertsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAdvertsByCategoryQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useListAdvertsByCategoryQuery(baseOptions: Apollo.QueryHookOptions<ListAdvertsByCategoryQuery, ListAdvertsByCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAdvertsByCategoryQuery, ListAdvertsByCategoryQueryVariables>(ListAdvertsByCategoryDocument, options);
      }
export function useListAdvertsByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAdvertsByCategoryQuery, ListAdvertsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAdvertsByCategoryQuery, ListAdvertsByCategoryQueryVariables>(ListAdvertsByCategoryDocument, options);
        }
export type ListAdvertsByCategoryQueryHookResult = ReturnType<typeof useListAdvertsByCategoryQuery>;
export type ListAdvertsByCategoryLazyQueryHookResult = ReturnType<typeof useListAdvertsByCategoryLazyQuery>;
export type ListAdvertsByCategoryQueryResult = Apollo.QueryResult<ListAdvertsByCategoryQuery, ListAdvertsByCategoryQueryVariables>;
export const ListAdvertsBySubCategoryDocument = gql`
    query ListAdvertsBySubCategory($slug: String!) {
  allAdvert(where: {subcategory: {slug: {current: {eq: $slug}}}}) {
    _id
    title
    _createdAt
    slug {
      current
    }
    description
    subcategory {
      _id
      name
      slug {
        current
      }
    }
    contact
    price
    location {
      lat
      lng
      alt
    }
    image {
      asset {
        url
      }
    }
  }
}
    `;

/**
 * __useListAdvertsBySubCategoryQuery__
 *
 * To run a query within a React component, call `useListAdvertsBySubCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAdvertsBySubCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAdvertsBySubCategoryQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useListAdvertsBySubCategoryQuery(baseOptions: Apollo.QueryHookOptions<ListAdvertsBySubCategoryQuery, ListAdvertsBySubCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAdvertsBySubCategoryQuery, ListAdvertsBySubCategoryQueryVariables>(ListAdvertsBySubCategoryDocument, options);
      }
export function useListAdvertsBySubCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAdvertsBySubCategoryQuery, ListAdvertsBySubCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAdvertsBySubCategoryQuery, ListAdvertsBySubCategoryQueryVariables>(ListAdvertsBySubCategoryDocument, options);
        }
export type ListAdvertsBySubCategoryQueryHookResult = ReturnType<typeof useListAdvertsBySubCategoryQuery>;
export type ListAdvertsBySubCategoryLazyQueryHookResult = ReturnType<typeof useListAdvertsBySubCategoryLazyQuery>;
export type ListAdvertsBySubCategoryQueryResult = Apollo.QueryResult<ListAdvertsBySubCategoryQuery, ListAdvertsBySubCategoryQueryVariables>;
export const ListAdvertSearchDocument = gql`
    query ListAdvertSearch($lat: Float!, $lng: Float, $title: String!, $subcategory: ID!) {
  allAdvert(
    where: {location: {lat: {eq: $lat}, lng: {eq: $lng}}, title: {matches: $title}, subcategory: {_id: {eq: $subcategory}}}
  ) {
    _id
    title
    _createdAt
    slug {
      current
    }
    description
    subcategory {
      _id
      name
      slug {
        current
      }
    }
    contact
    price
    location {
      lat
      lng
      alt
    }
    image {
      asset {
        url
      }
    }
  }
}
    `;

/**
 * __useListAdvertSearchQuery__
 *
 * To run a query within a React component, call `useListAdvertSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAdvertSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAdvertSearchQuery({
 *   variables: {
 *      lat: // value for 'lat'
 *      lng: // value for 'lng'
 *      title: // value for 'title'
 *      subcategory: // value for 'subcategory'
 *   },
 * });
 */
export function useListAdvertSearchQuery(baseOptions: Apollo.QueryHookOptions<ListAdvertSearchQuery, ListAdvertSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAdvertSearchQuery, ListAdvertSearchQueryVariables>(ListAdvertSearchDocument, options);
      }
export function useListAdvertSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAdvertSearchQuery, ListAdvertSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAdvertSearchQuery, ListAdvertSearchQueryVariables>(ListAdvertSearchDocument, options);
        }
export type ListAdvertSearchQueryHookResult = ReturnType<typeof useListAdvertSearchQuery>;
export type ListAdvertSearchLazyQueryHookResult = ReturnType<typeof useListAdvertSearchLazyQuery>;
export type ListAdvertSearchQueryResult = Apollo.QueryResult<ListAdvertSearchQuery, ListAdvertSearchQueryVariables>;
export const ListCategoriesDocument = gql`
    query ListCategories {
  allCategory {
    _id
    name
    slug {
      current
    }
    subcategories {
      _id
      name
      slug {
        current
      }
      adverts {
        _id
        title
      }
      category {
        _id
        name
        slug {
          current
        }
      }
    }
  }
}
    `;

/**
 * __useListCategoriesQuery__
 *
 * To run a query within a React component, call `useListCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
      }
export function useListCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
        }
export type ListCategoriesQueryHookResult = ReturnType<typeof useListCategoriesQuery>;
export type ListCategoriesLazyQueryHookResult = ReturnType<typeof useListCategoriesLazyQuery>;
export type ListCategoriesQueryResult = Apollo.QueryResult<ListCategoriesQuery, ListCategoriesQueryVariables>;
export const ListSubCategoriesDocument = gql`
    query ListSubCategories {
  allSubcategory {
    _id
    _type
    name
    slug {
      current
    }
    category {
      _id
      name
      slug {
        current
      }
    }
    adverts {
      _id
      title
      slug {
        current
      }
      description
      subcategory {
        _id
        name
        slug {
          current
        }
      }
    }
  }
}
    `;

/**
 * __useListSubCategoriesQuery__
 *
 * To run a query within a React component, call `useListSubCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSubCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSubCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListSubCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ListSubCategoriesQuery, ListSubCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSubCategoriesQuery, ListSubCategoriesQueryVariables>(ListSubCategoriesDocument, options);
      }
export function useListSubCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSubCategoriesQuery, ListSubCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSubCategoriesQuery, ListSubCategoriesQueryVariables>(ListSubCategoriesDocument, options);
        }
export type ListSubCategoriesQueryHookResult = ReturnType<typeof useListSubCategoriesQuery>;
export type ListSubCategoriesLazyQueryHookResult = ReturnType<typeof useListSubCategoriesLazyQuery>;
export type ListSubCategoriesQueryResult = Apollo.QueryResult<ListSubCategoriesQuery, ListSubCategoriesQueryVariables>;
export const ListUsersDocument = gql`
    query ListUsers {
  allUser {
    _id
    _type
    _createdAt
    _updatedAt
    _rev
    _key
    name
    email
    image
    password
  }
}
    `;

/**
 * __useListUsersQuery__
 *
 * To run a query within a React component, call `useListUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListUsersQuery(baseOptions?: Apollo.QueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
      }
export function useListUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
        }
export type ListUsersQueryHookResult = ReturnType<typeof useListUsersQuery>;
export type ListUsersLazyQueryHookResult = ReturnType<typeof useListUsersLazyQuery>;
export type ListUsersQueryResult = Apollo.QueryResult<ListUsersQuery, ListUsersQueryVariables>;
export const ListUsersByEmailDocument = gql`
    query ListUsersByEmail($email: String!) {
  allUser(where: {email: {eq: $email}}) {
    _id
    _type
    _createdAt
    _updatedAt
    _rev
    _key
    name
    email
    image
  }
}
    `;

/**
 * __useListUsersByEmailQuery__
 *
 * To run a query within a React component, call `useListUsersByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUsersByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUsersByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useListUsersByEmailQuery(baseOptions: Apollo.QueryHookOptions<ListUsersByEmailQuery, ListUsersByEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListUsersByEmailQuery, ListUsersByEmailQueryVariables>(ListUsersByEmailDocument, options);
      }
export function useListUsersByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUsersByEmailQuery, ListUsersByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListUsersByEmailQuery, ListUsersByEmailQueryVariables>(ListUsersByEmailDocument, options);
        }
export type ListUsersByEmailQueryHookResult = ReturnType<typeof useListUsersByEmailQuery>;
export type ListUsersByEmailLazyQueryHookResult = ReturnType<typeof useListUsersByEmailLazyQuery>;
export type ListUsersByEmailQueryResult = Apollo.QueryResult<ListUsersByEmailQuery, ListUsersByEmailQueryVariables>;