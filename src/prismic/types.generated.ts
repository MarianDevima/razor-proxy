// Code generated by prismic-ts-codegen. DO NOT EDIT.

import type * as prismic from '@prismicio/client';
import type * as prismicT from '@prismicio/types';

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Home Page documents */
interface HomeDocumentData {
  /**
   * Slice Zone (`slices`) field in *Home Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<HomeDocumentDataSlicesSlice>;
  /**
   * Slice Zone (`seo`) field in *Home Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.seo[]
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  seo: prismicT.SliceZone<HomeDocumentDataSeoSlice>;
}
/**
 * Slice for *Home Page → Slice Zone (`slices`)*
 *
 */
type HomeDocumentDataSlicesSlice = CallToActionSlice | ProxyCheckerSlice;
/**
 * Slice for *Home Page → Slice Zone (`seo`)*
 *
 */
type HomeDocumentDataSeoSlice = SeoSlice;
/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<
  Simplify<HomeDocumentData>,
  'home',
  Lang
>;
/** Content for Navigation documents */
interface NavigationDocumentData {
  /**
   * Logo field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.logo[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  logo: prismicT.GroupField<Simplify<NavigationDocumentDataLogoItem>>;
  /**
   * Dashboard field in *Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.dashboard
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  dashboard: prismicT.LinkField;
  /**
   * Slice Zone (`slices`) field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<NavigationDocumentDataSlicesSlice>;
}
/**
 * Item in Navigation → Logo
 *
 */
export interface NavigationDocumentDataLogoItem {
  /**
   * Image field in *Navigation → Logo*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.logo[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<null>;
  /**
   * Link field in *Navigation → Logo*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.logo[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismicT.LinkField;
}
/**
 * Slice for *Navigation → Slice Zone (`slices`)*
 *
 */
type NavigationDocumentDataSlicesSlice = NavigationItemSlice;
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<
  Simplify<NavigationDocumentData>,
  'navigation',
  Lang
>;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.TitleField;
  /**
   * Slice Zone (`slices`) field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
  /**
   * Seo field in *Page*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: page.seo[]
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  seo: prismicT.GroupField<Simplify<PageDocumentDataSeoItem>>;
}
/**
 * Slice for *Page → Slice Zone (`slices`)*
 *
 */
type PageDocumentDataSlicesSlice = CallToActionSlice;
/**
 * Item in Page → Seo
 *
 */
export interface PageDocumentDataSeoItem {
  /**
   * Title field in *Page → Seo*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.seo[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
}
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<
  Simplify<PageDocumentData>,
  'page',
  Lang
>;
/** Content for Product Pages documents */
interface ProductDocumentData {
  /**
   * Slice Zone (`slices`) field in *Product Pages*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: product.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<ProductDocumentDataSlicesSlice>;
  /**
   * Slice Zone (`seo`) field in *Product Pages*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: product.seo[]
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  seo: prismicT.SliceZone<ProductDocumentDataSeoSlice>;
}
/**
 * Slice for *Product Pages → Slice Zone (`slices`)*
 *
 */
type ProductDocumentDataSlicesSlice = CallToActionSlice;
/**
 * Slice for *Product Pages → Slice Zone (`seo`)*
 *
 */
type ProductDocumentDataSeoSlice = SeoSlice;
/**
 * Product Pages document from Prismic
 *
 * - **API ID**: `product`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<
  Simplify<ProductDocumentData>,
  'product',
  Lang
>;
/** Content for Products Page documents */
interface ProductsDocumentData {
  /**
   * Slice Zone (`slices`) field in *Products Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: products.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<ProductsDocumentDataSlicesSlice>;
  /**
   * Slice Zone (`seo`) field in *Products Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: products.seo[]
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  seo: prismicT.SliceZone<ProductsDocumentDataSeoSlice>;
}
/**
 * Slice for *Products Page → Slice Zone (`slices`)*
 *
 */
type ProductsDocumentDataSlicesSlice = CallToActionSlice;
/**
 * Slice for *Products Page → Slice Zone (`seo`)*
 *
 */
type ProductsDocumentDataSeoSlice = SeoSlice;
/**
 * Products Page document from Prismic
 *
 * - **API ID**: `products`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<
  Simplify<ProductsDocumentData>,
  'products',
  Lang
>;
/** Content for Seo documents */
interface SeoDocumentData {
  /**
   * Slice Zone (`slices`) field in *Seo*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<SeoDocumentDataSlicesSlice>;
}
/**
 * Slice for *Seo → Slice Zone (`slices`)*
 *
 */
type SeoDocumentDataSlicesSlice = SeoSlice;
/**
 * Seo document from Prismic
 *
 * - **API ID**: `seo`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SeoDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<
  Simplify<SeoDocumentData>,
  'seo',
  Lang
>;
export type AllDocumentTypes =
  | HomeDocument
  | NavigationDocument
  | PageDocument
  | ProductDocument
  | ProductsDocument
  | SeoDocument;
/**
 * Primary content in CallToAction → Primary
 *
 */
interface CallToActionSliceDefaultPrimary {
  /**
   * Title field in *CallToAction → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: This is where it all begins...
   * - **API ID Path**: call_to_action.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.TitleField;
  /**
   * Description field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A nice description of your feature
   * - **API ID Path**: call_to_action.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Image field in *CallToAction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<null>;
  /**
   * Action Link field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.actionLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  actionLink: prismicT.LinkField;
  /**
   * Action Label field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.actionLabel
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  actionLabel: prismicT.KeyTextField;
}
/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CallToAction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CallToActionSliceDefault = prismicT.SharedSliceVariation<
  'default',
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *CallToAction*
 *
 */
type CallToActionSliceVariation = CallToActionSliceDefault;
/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: `CallToAction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CallToActionSlice = prismicT.SharedSlice<'call_to_action', CallToActionSliceVariation>;
/**
 * Primary content in NavigationItem → Primary
 *
 */
interface NavigationItemSliceDefaultPrimary {
  /**
   * Label field in *NavigationItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.primary.label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismicT.KeyTextField;
  /**
   * Link field in *NavigationItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.primary.link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismicT.LinkField;
}
/**
 * Item in NavigationItem → Items
 *
 */
export interface NavigationItemSliceDefaultItem {
  /**
   * Link field in *NavigationItem → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.items[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismicT.LinkField;
  /**
   * Label field in *NavigationItem → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.items[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismicT.KeyTextField;
}
/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSliceDefault = prismicT.SharedSliceVariation<
  'default',
  Simplify<NavigationItemSliceDefaultPrimary>,
  Simplify<NavigationItemSliceDefaultItem>
>;
/**
 * Slice variation for *NavigationItem*
 *
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;
/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSlice = prismicT.SharedSlice<
  'navigation_item',
  NavigationItemSliceVariation
>;
/**
 * Primary content in ProxyChecker → Primary
 *
 */
interface ProxyCheckerSliceDefaultPrimary {
  /**
   * Title field in *ProxyChecker → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Proxy checker
   * - **API ID Path**: proxy_checker.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.TitleField;
  /**
   * Label1 field in *ProxyChecker → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for first button of type DC
   * - **API ID Path**: proxy_checker.primary.typeDC1
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  typeDC1: prismicT.KeyTextField;
  /**
   * Label2 field in *ProxyChecker → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for second button of type DC
   * - **API ID Path**: proxy_checker.primary.typeDC2
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  typeDC2: prismicT.KeyTextField;
  /**
   * Location Label field in *ProxyChecker → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for Location dropdown
   * - **API ID Path**: proxy_checker.primary.locationLabel
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  locationLabel: prismicT.KeyTextField;
  /**
   * Session Type Label field in *ProxyChecker → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for Session Type dropdown
   * - **API ID Path**: proxy_checker.primary.sessionTypeLabel
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  sessionTypeLabel: prismicT.KeyTextField;
  /**
   * Target Url Label field in *ProxyChecker → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for Target Url input
   * - **API ID Path**: proxy_checker.primary.targetUrlLabel
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  targetUrlLabel: prismicT.KeyTextField;
  /**
   * Target Url Placeholder field in *ProxyChecker → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Placeholder inside target url input
   * - **API ID Path**: proxy_checker.primary.targetUrlPlaceholder
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  targetUrlPlaceholder: prismicT.KeyTextField;
}
/**
 * Item in ProxyChecker → Items
 *
 */
export interface ProxyCheckerSliceDefaultItem {
  /**
   * Value field in *ProxyChecker → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Value for data inside code template
   * - **API ID Path**: proxy_checker.items[].value
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  value: prismicT.KeyTextField;
  /**
   * Label field in *ProxyChecker → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for option in dropdown
   * - **API ID Path**: proxy_checker.items[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismicT.KeyTextField;
  /**
   * Type of DC field in *ProxyChecker → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**:  Related to dropdown option by DC
   * - **API ID Path**: proxy_checker.items[].typeDC
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  typeDC: prismicT.SelectField<'Shared' | 'Dedicated'>;
  /**
   * Dropdown Type field in *ProxyChecker → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Option of dropdown
   * - **API ID Path**: proxy_checker.items[].dropdownType
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  dropdownType: prismicT.SelectField<'Location' | 'Session'>;
}
/**
 * Default variation for ProxyChecker Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ProxyChecker`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProxyCheckerSliceDefault = prismicT.SharedSliceVariation<
  'default',
  Simplify<ProxyCheckerSliceDefaultPrimary>,
  Simplify<ProxyCheckerSliceDefaultItem>
>;
/**
 * Slice variation for *ProxyChecker*
 *
 */
type ProxyCheckerSliceVariation = ProxyCheckerSliceDefault;
/**
 * ProxyChecker Shared Slice
 *
 * - **API ID**: `proxy_checker`
 * - **Description**: `ProxyChecker`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProxyCheckerSlice = prismicT.SharedSlice<'proxy_checker', ProxyCheckerSliceVariation>;
/**
 * Primary content in Seo → Primary
 *
 */
interface SeoSliceDefaultPrimary {
  /**
   * Title field in *Seo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * Meta Description field in *Seo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.primary.metaDescription
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  metaDescription: prismicT.KeyTextField;
  /**
   * Indexing field in *Seo → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: seo.primary.indexing
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  indexing: prismicT.BooleanField;
  /**
   * Og Title field in *Seo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.primary.ogTitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  ogTitle: prismicT.KeyTextField;
  /**
   * Og Description field in *Seo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.primary.ogDescription
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  ogDescription: prismicT.KeyTextField;
  /**
   * Og Image field in *Seo → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.primary.ogImage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  ogImage: prismicT.ImageField<null>;
  /**
   * Og Secure Image field in *Seo → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.primary.ogSecureImage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  ogSecureImage: prismicT.ImageField<null>;
  /**
   * Twitter Card field in *Seo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.primary.twitterCard
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  twitterCard: prismicT.KeyTextField;
  /**
   * Twitter Site field in *Seo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.primary.twitterSite
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  twitterSite: prismicT.KeyTextField;
  /**
   * Twitter Creator field in *Seo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.primary.twitterCreator
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  twitterCreator: prismicT.KeyTextField;
  /**
   * Twitter Image field in *Seo → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.primary.twitterImage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  twitterImage: prismicT.ImageField<null>;
  /**
   * Twitter Image Alt field in *Seo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.primary.twitterImageAlt
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  twitterImageAlt: prismicT.KeyTextField;
  /**
   * Twitter Title field in *Seo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.primary.twitterTitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  twitterTitle: prismicT.KeyTextField;
  /**
   * Twitter Description field in *Seo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.primary.twitterDescription
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  twitterDescription: prismicT.KeyTextField;
  /**
   * Facebook App Id field in *Seo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.primary.fbAppId
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  fbAppId: prismicT.KeyTextField;
}
/**
 * Default variation for Seo Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Seo`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SeoSliceDefault = prismicT.SharedSliceVariation<
  'default',
  Simplify<SeoSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Seo*
 *
 */
type SeoSliceVariation = SeoSliceDefault;
/**
 * Seo Shared Slice
 *
 * - **API ID**: `seo`
 * - **Description**: `Seo`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SeoSlice = prismicT.SharedSlice<'seo', SeoSliceVariation>;
declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }
}