declare module MyGraphQL {
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  amountFree?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  oldPrice?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Int']>;
  priceQuant?: Maybe<Scalars['Float']>;
  oldPriceQuant?: Maybe<Scalars['Float']>;
  discountQuant?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['String']>;
  quantImage?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};

export type Profile = {
  __typename?: 'Profile';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  products?: Maybe<Array<Maybe<Product>>>;
  profile?: Maybe<Profile>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};


export type QueryProductsArgs = {
  id?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryReviewsArgs = {
  id?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Review = {
  __typename?: 'Review';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['ID']>;
  product?: Maybe<Product>;
};

}