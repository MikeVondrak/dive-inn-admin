import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  float8: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/**
 * Flickr photo set and Dive Inn public site location
 *
 *
 * columns and relationships of "album"
 *
 */
export type Album = {
  __typename?: 'album';
  /** An array relationship */
  album_location_album: Array<Album_Location>;
  /** An aggregate relationship */
  album_location_album_aggregate: Album_Location_Aggregate;
  album_location_id: Scalars['Int'];
  description: Scalars['String'];
  flickr_photo_set_id?: Maybe<Scalars['String']>;
  flickr_photo_set_id_num: Scalars['float8'];
  id: Scalars['Int'];
  title: Scalars['String'];
};


/**
 * Flickr photo set and Dive Inn public site location
 *
 *
 * columns and relationships of "album"
 *
 */
export type AlbumAlbum_Location_AlbumArgs = {
  distinct_on?: InputMaybe<Array<Album_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Album_Location_Order_By>>;
  where?: InputMaybe<Album_Location_Bool_Exp>;
};


/**
 * Flickr photo set and Dive Inn public site location
 *
 *
 * columns and relationships of "album"
 *
 */
export type AlbumAlbum_Location_Album_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Album_Location_Order_By>>;
  where?: InputMaybe<Album_Location_Bool_Exp>;
};

/** aggregated selection of "album" */
export type Album_Aggregate = {
  __typename?: 'album_aggregate';
  aggregate?: Maybe<Album_Aggregate_Fields>;
  nodes: Array<Album>;
};

/** aggregate fields of "album" */
export type Album_Aggregate_Fields = {
  __typename?: 'album_aggregate_fields';
  avg?: Maybe<Album_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Album_Max_Fields>;
  min?: Maybe<Album_Min_Fields>;
  stddev?: Maybe<Album_Stddev_Fields>;
  stddev_pop?: Maybe<Album_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Album_Stddev_Samp_Fields>;
  sum?: Maybe<Album_Sum_Fields>;
  var_pop?: Maybe<Album_Var_Pop_Fields>;
  var_samp?: Maybe<Album_Var_Samp_Fields>;
  variance?: Maybe<Album_Variance_Fields>;
};


/** aggregate fields of "album" */
export type Album_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Album_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "album" */
export type Album_Aggregate_Order_By = {
  avg?: InputMaybe<Album_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Album_Max_Order_By>;
  min?: InputMaybe<Album_Min_Order_By>;
  stddev?: InputMaybe<Album_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Album_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Album_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Album_Sum_Order_By>;
  var_pop?: InputMaybe<Album_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Album_Var_Samp_Order_By>;
  variance?: InputMaybe<Album_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "album" */
export type Album_Arr_Rel_Insert_Input = {
  data: Array<Album_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Album_On_Conflict>;
};

/** aggregate avg on columns */
export type Album_Avg_Fields = {
  __typename?: 'album_avg_fields';
  album_location_id?: Maybe<Scalars['Float']>;
  flickr_photo_set_id_num?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "album" */
export type Album_Avg_Order_By = {
  album_location_id?: InputMaybe<Order_By>;
  flickr_photo_set_id_num?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "album". All fields are combined with a logical 'AND'. */
export type Album_Bool_Exp = {
  _and?: InputMaybe<Array<Album_Bool_Exp>>;
  _not?: InputMaybe<Album_Bool_Exp>;
  _or?: InputMaybe<Array<Album_Bool_Exp>>;
  album_location_album?: InputMaybe<Album_Location_Bool_Exp>;
  album_location_id?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  flickr_photo_set_id?: InputMaybe<String_Comparison_Exp>;
  flickr_photo_set_id_num?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "album" */
export enum Album_Constraint {
  /** unique or primary key constraint */
  AlbumPkey = 'album_pkey'
}

/** input type for incrementing numeric columns in table "album" */
export type Album_Inc_Input = {
  album_location_id?: InputMaybe<Scalars['Int']>;
  flickr_photo_set_id_num?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "album" */
export type Album_Insert_Input = {
  album_location_album?: InputMaybe<Album_Location_Arr_Rel_Insert_Input>;
  album_location_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  flickr_photo_set_id?: InputMaybe<Scalars['String']>;
  flickr_photo_set_id_num?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/**
 * Locations albums can be located on the Dive Inn public site
 *
 *
 * columns and relationships of "album_location"
 *
 */
export type Album_Location = {
  __typename?: 'album_location';
  /** An array relationship */
  albums: Array<Album>;
  /** An aggregate relationship */
  albums_aggregate: Album_Aggregate;
  description: Scalars['String'];
  id: Scalars['Int'];
  modified?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
};


/**
 * Locations albums can be located on the Dive Inn public site
 *
 *
 * columns and relationships of "album_location"
 *
 */
export type Album_LocationAlbumsArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};


/**
 * Locations albums can be located on the Dive Inn public site
 *
 *
 * columns and relationships of "album_location"
 *
 */
export type Album_LocationAlbums_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};

/** aggregated selection of "album_location" */
export type Album_Location_Aggregate = {
  __typename?: 'album_location_aggregate';
  aggregate?: Maybe<Album_Location_Aggregate_Fields>;
  nodes: Array<Album_Location>;
};

/** aggregate fields of "album_location" */
export type Album_Location_Aggregate_Fields = {
  __typename?: 'album_location_aggregate_fields';
  avg?: Maybe<Album_Location_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Album_Location_Max_Fields>;
  min?: Maybe<Album_Location_Min_Fields>;
  stddev?: Maybe<Album_Location_Stddev_Fields>;
  stddev_pop?: Maybe<Album_Location_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Album_Location_Stddev_Samp_Fields>;
  sum?: Maybe<Album_Location_Sum_Fields>;
  var_pop?: Maybe<Album_Location_Var_Pop_Fields>;
  var_samp?: Maybe<Album_Location_Var_Samp_Fields>;
  variance?: Maybe<Album_Location_Variance_Fields>;
};


/** aggregate fields of "album_location" */
export type Album_Location_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Album_Location_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "album_location" */
export type Album_Location_Aggregate_Order_By = {
  avg?: InputMaybe<Album_Location_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Album_Location_Max_Order_By>;
  min?: InputMaybe<Album_Location_Min_Order_By>;
  stddev?: InputMaybe<Album_Location_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Album_Location_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Album_Location_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Album_Location_Sum_Order_By>;
  var_pop?: InputMaybe<Album_Location_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Album_Location_Var_Samp_Order_By>;
  variance?: InputMaybe<Album_Location_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "album_location" */
export type Album_Location_Arr_Rel_Insert_Input = {
  data: Array<Album_Location_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Album_Location_On_Conflict>;
};

/** aggregate avg on columns */
export type Album_Location_Avg_Fields = {
  __typename?: 'album_location_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "album_location" */
export type Album_Location_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "album_location". All fields are combined with a logical 'AND'. */
export type Album_Location_Bool_Exp = {
  _and?: InputMaybe<Array<Album_Location_Bool_Exp>>;
  _not?: InputMaybe<Album_Location_Bool_Exp>;
  _or?: InputMaybe<Array<Album_Location_Bool_Exp>>;
  albums?: InputMaybe<Album_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "album_location" */
export enum Album_Location_Constraint {
  /** unique or primary key constraint */
  AlbumLocationPkey = 'album_location_pkey'
}

/** input type for incrementing numeric columns in table "album_location" */
export type Album_Location_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "album_location" */
export type Album_Location_Insert_Input = {
  albums?: InputMaybe<Album_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Album_Location_Max_Fields = {
  __typename?: 'album_location_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "album_location" */
export type Album_Location_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Album_Location_Min_Fields = {
  __typename?: 'album_location_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "album_location" */
export type Album_Location_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "album_location" */
export type Album_Location_Mutation_Response = {
  __typename?: 'album_location_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Album_Location>;
};

/** on conflict condition type for table "album_location" */
export type Album_Location_On_Conflict = {
  constraint: Album_Location_Constraint;
  update_columns?: Array<Album_Location_Update_Column>;
  where?: InputMaybe<Album_Location_Bool_Exp>;
};

/** Ordering options when selecting data from "album_location". */
export type Album_Location_Order_By = {
  albums_aggregate?: InputMaybe<Album_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: album_location */
export type Album_Location_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "album_location" */
export enum Album_Location_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "album_location" */
export type Album_Location_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Album_Location_Stddev_Fields = {
  __typename?: 'album_location_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "album_location" */
export type Album_Location_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Album_Location_Stddev_Pop_Fields = {
  __typename?: 'album_location_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "album_location" */
export type Album_Location_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Album_Location_Stddev_Samp_Fields = {
  __typename?: 'album_location_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "album_location" */
export type Album_Location_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Album_Location_Sum_Fields = {
  __typename?: 'album_location_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "album_location" */
export type Album_Location_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "album_location" */
export enum Album_Location_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Album_Location_Var_Pop_Fields = {
  __typename?: 'album_location_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "album_location" */
export type Album_Location_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Album_Location_Var_Samp_Fields = {
  __typename?: 'album_location_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "album_location" */
export type Album_Location_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Album_Location_Variance_Fields = {
  __typename?: 'album_location_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "album_location" */
export type Album_Location_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Album_Max_Fields = {
  __typename?: 'album_max_fields';
  album_location_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  flickr_photo_set_id?: Maybe<Scalars['String']>;
  flickr_photo_set_id_num?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "album" */
export type Album_Max_Order_By = {
  album_location_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  flickr_photo_set_id?: InputMaybe<Order_By>;
  flickr_photo_set_id_num?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Album_Min_Fields = {
  __typename?: 'album_min_fields';
  album_location_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  flickr_photo_set_id?: Maybe<Scalars['String']>;
  flickr_photo_set_id_num?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "album" */
export type Album_Min_Order_By = {
  album_location_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  flickr_photo_set_id?: InputMaybe<Order_By>;
  flickr_photo_set_id_num?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "album" */
export type Album_Mutation_Response = {
  __typename?: 'album_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Album>;
};

/** on conflict condition type for table "album" */
export type Album_On_Conflict = {
  constraint: Album_Constraint;
  update_columns?: Array<Album_Update_Column>;
  where?: InputMaybe<Album_Bool_Exp>;
};

/** Ordering options when selecting data from "album". */
export type Album_Order_By = {
  album_location_album_aggregate?: InputMaybe<Album_Location_Aggregate_Order_By>;
  album_location_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  flickr_photo_set_id?: InputMaybe<Order_By>;
  flickr_photo_set_id_num?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: album */
export type Album_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "album" */
export enum Album_Select_Column {
  /** column name */
  AlbumLocationId = 'album_location_id',
  /** column name */
  Description = 'description',
  /** column name */
  FlickrPhotoSetId = 'flickr_photo_set_id',
  /** column name */
  FlickrPhotoSetIdNum = 'flickr_photo_set_id_num',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "album" */
export type Album_Set_Input = {
  album_location_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  flickr_photo_set_id?: InputMaybe<Scalars['String']>;
  flickr_photo_set_id_num?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Album_Stddev_Fields = {
  __typename?: 'album_stddev_fields';
  album_location_id?: Maybe<Scalars['Float']>;
  flickr_photo_set_id_num?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "album" */
export type Album_Stddev_Order_By = {
  album_location_id?: InputMaybe<Order_By>;
  flickr_photo_set_id_num?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Album_Stddev_Pop_Fields = {
  __typename?: 'album_stddev_pop_fields';
  album_location_id?: Maybe<Scalars['Float']>;
  flickr_photo_set_id_num?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "album" */
export type Album_Stddev_Pop_Order_By = {
  album_location_id?: InputMaybe<Order_By>;
  flickr_photo_set_id_num?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Album_Stddev_Samp_Fields = {
  __typename?: 'album_stddev_samp_fields';
  album_location_id?: Maybe<Scalars['Float']>;
  flickr_photo_set_id_num?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "album" */
export type Album_Stddev_Samp_Order_By = {
  album_location_id?: InputMaybe<Order_By>;
  flickr_photo_set_id_num?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Album_Sum_Fields = {
  __typename?: 'album_sum_fields';
  album_location_id?: Maybe<Scalars['Int']>;
  flickr_photo_set_id_num?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "album" */
export type Album_Sum_Order_By = {
  album_location_id?: InputMaybe<Order_By>;
  flickr_photo_set_id_num?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "album" */
export enum Album_Update_Column {
  /** column name */
  AlbumLocationId = 'album_location_id',
  /** column name */
  Description = 'description',
  /** column name */
  FlickrPhotoSetId = 'flickr_photo_set_id',
  /** column name */
  FlickrPhotoSetIdNum = 'flickr_photo_set_id_num',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Album_Var_Pop_Fields = {
  __typename?: 'album_var_pop_fields';
  album_location_id?: Maybe<Scalars['Float']>;
  flickr_photo_set_id_num?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "album" */
export type Album_Var_Pop_Order_By = {
  album_location_id?: InputMaybe<Order_By>;
  flickr_photo_set_id_num?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Album_Var_Samp_Fields = {
  __typename?: 'album_var_samp_fields';
  album_location_id?: Maybe<Scalars['Float']>;
  flickr_photo_set_id_num?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "album" */
export type Album_Var_Samp_Order_By = {
  album_location_id?: InputMaybe<Order_By>;
  flickr_photo_set_id_num?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Album_Variance_Fields = {
  __typename?: 'album_variance_fields';
  album_location_id?: Maybe<Scalars['Float']>;
  flickr_photo_set_id_num?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "album" */
export type Album_Variance_Order_By = {
  album_location_id?: InputMaybe<Order_By>;
  flickr_photo_set_id_num?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "album" */
  delete_album?: Maybe<Album_Mutation_Response>;
  /** delete single row from the table: "album" */
  delete_album_by_pk?: Maybe<Album>;
  /** delete data from the table: "album_location" */
  delete_album_location?: Maybe<Album_Location_Mutation_Response>;
  /** delete single row from the table: "album_location" */
  delete_album_location_by_pk?: Maybe<Album_Location>;
  /** delete data from the table: "photo_size" */
  delete_photo_size?: Maybe<Photo_Size_Mutation_Response>;
  /** delete single row from the table: "photo_size" */
  delete_photo_size_by_pk?: Maybe<Photo_Size>;
  /** delete data from the table: "photo_sizes" */
  delete_photo_sizes?: Maybe<Photo_Sizes_Mutation_Response>;
  /** delete single row from the table: "photo_sizes" */
  delete_photo_sizes_by_pk?: Maybe<Photo_Sizes>;
  /** delete data from the table: "photo_sizes_photo_size_array" */
  delete_photo_sizes_photo_size_array?: Maybe<Photo_Sizes_Photo_Size_Array_Mutation_Response>;
  /** delete single row from the table: "photo_sizes_photo_size_array" */
  delete_photo_sizes_photo_size_array_by_pk?: Maybe<Photo_Sizes_Photo_Size_Array>;
  /** insert data into the table: "album" */
  insert_album?: Maybe<Album_Mutation_Response>;
  /** insert data into the table: "album_location" */
  insert_album_location?: Maybe<Album_Location_Mutation_Response>;
  /** insert a single row into the table: "album_location" */
  insert_album_location_one?: Maybe<Album_Location>;
  /** insert a single row into the table: "album" */
  insert_album_one?: Maybe<Album>;
  /** insert data into the table: "photo_size" */
  insert_photo_size?: Maybe<Photo_Size_Mutation_Response>;
  /** insert a single row into the table: "photo_size" */
  insert_photo_size_one?: Maybe<Photo_Size>;
  /** insert data into the table: "photo_sizes" */
  insert_photo_sizes?: Maybe<Photo_Sizes_Mutation_Response>;
  /** insert a single row into the table: "photo_sizes" */
  insert_photo_sizes_one?: Maybe<Photo_Sizes>;
  /** insert data into the table: "photo_sizes_photo_size_array" */
  insert_photo_sizes_photo_size_array?: Maybe<Photo_Sizes_Photo_Size_Array_Mutation_Response>;
  /** insert a single row into the table: "photo_sizes_photo_size_array" */
  insert_photo_sizes_photo_size_array_one?: Maybe<Photo_Sizes_Photo_Size_Array>;
  /** update data of the table: "album" */
  update_album?: Maybe<Album_Mutation_Response>;
  /** update single row of the table: "album" */
  update_album_by_pk?: Maybe<Album>;
  /** update data of the table: "album_location" */
  update_album_location?: Maybe<Album_Location_Mutation_Response>;
  /** update single row of the table: "album_location" */
  update_album_location_by_pk?: Maybe<Album_Location>;
  /** update data of the table: "photo_size" */
  update_photo_size?: Maybe<Photo_Size_Mutation_Response>;
  /** update single row of the table: "photo_size" */
  update_photo_size_by_pk?: Maybe<Photo_Size>;
  /** update data of the table: "photo_sizes" */
  update_photo_sizes?: Maybe<Photo_Sizes_Mutation_Response>;
  /** update single row of the table: "photo_sizes" */
  update_photo_sizes_by_pk?: Maybe<Photo_Sizes>;
  /** update data of the table: "photo_sizes_photo_size_array" */
  update_photo_sizes_photo_size_array?: Maybe<Photo_Sizes_Photo_Size_Array_Mutation_Response>;
  /** update single row of the table: "photo_sizes_photo_size_array" */
  update_photo_sizes_photo_size_array_by_pk?: Maybe<Photo_Sizes_Photo_Size_Array>;
};


/** mutation root */
export type Mutation_RootDelete_AlbumArgs = {
  where: Album_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Album_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Album_LocationArgs = {
  where: Album_Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Album_Location_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Photo_SizeArgs = {
  where: Photo_Size_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Photo_Size_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Photo_SizesArgs = {
  where: Photo_Sizes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Photo_Sizes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Photo_Sizes_Photo_Size_ArrayArgs = {
  where: Photo_Sizes_Photo_Size_Array_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Photo_Sizes_Photo_Size_Array_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_AlbumArgs = {
  objects: Array<Album_Insert_Input>;
  on_conflict?: InputMaybe<Album_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Album_LocationArgs = {
  objects: Array<Album_Location_Insert_Input>;
  on_conflict?: InputMaybe<Album_Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Album_Location_OneArgs = {
  object: Album_Location_Insert_Input;
  on_conflict?: InputMaybe<Album_Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Album_OneArgs = {
  object: Album_Insert_Input;
  on_conflict?: InputMaybe<Album_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Photo_SizeArgs = {
  objects: Array<Photo_Size_Insert_Input>;
  on_conflict?: InputMaybe<Photo_Size_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Photo_Size_OneArgs = {
  object: Photo_Size_Insert_Input;
  on_conflict?: InputMaybe<Photo_Size_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Photo_SizesArgs = {
  objects: Array<Photo_Sizes_Insert_Input>;
  on_conflict?: InputMaybe<Photo_Sizes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Photo_Sizes_OneArgs = {
  object: Photo_Sizes_Insert_Input;
  on_conflict?: InputMaybe<Photo_Sizes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Photo_Sizes_Photo_Size_ArrayArgs = {
  objects: Array<Photo_Sizes_Photo_Size_Array_Insert_Input>;
  on_conflict?: InputMaybe<Photo_Sizes_Photo_Size_Array_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Photo_Sizes_Photo_Size_Array_OneArgs = {
  object: Photo_Sizes_Photo_Size_Array_Insert_Input;
  on_conflict?: InputMaybe<Photo_Sizes_Photo_Size_Array_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AlbumArgs = {
  _inc?: InputMaybe<Album_Inc_Input>;
  _set?: InputMaybe<Album_Set_Input>;
  where: Album_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Album_By_PkArgs = {
  _inc?: InputMaybe<Album_Inc_Input>;
  _set?: InputMaybe<Album_Set_Input>;
  pk_columns: Album_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Album_LocationArgs = {
  _inc?: InputMaybe<Album_Location_Inc_Input>;
  _set?: InputMaybe<Album_Location_Set_Input>;
  where: Album_Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Album_Location_By_PkArgs = {
  _inc?: InputMaybe<Album_Location_Inc_Input>;
  _set?: InputMaybe<Album_Location_Set_Input>;
  pk_columns: Album_Location_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Photo_SizeArgs = {
  _inc?: InputMaybe<Photo_Size_Inc_Input>;
  _set?: InputMaybe<Photo_Size_Set_Input>;
  where: Photo_Size_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Photo_Size_By_PkArgs = {
  _inc?: InputMaybe<Photo_Size_Inc_Input>;
  _set?: InputMaybe<Photo_Size_Set_Input>;
  pk_columns: Photo_Size_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Photo_SizesArgs = {
  _inc?: InputMaybe<Photo_Sizes_Inc_Input>;
  _set?: InputMaybe<Photo_Sizes_Set_Input>;
  where: Photo_Sizes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Photo_Sizes_By_PkArgs = {
  _inc?: InputMaybe<Photo_Sizes_Inc_Input>;
  _set?: InputMaybe<Photo_Sizes_Set_Input>;
  pk_columns: Photo_Sizes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Photo_Sizes_Photo_Size_ArrayArgs = {
  _inc?: InputMaybe<Photo_Sizes_Photo_Size_Array_Inc_Input>;
  _set?: InputMaybe<Photo_Sizes_Photo_Size_Array_Set_Input>;
  where: Photo_Sizes_Photo_Size_Array_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Photo_Sizes_Photo_Size_Array_By_PkArgs = {
  _inc?: InputMaybe<Photo_Sizes_Photo_Size_Array_Inc_Input>;
  _set?: InputMaybe<Photo_Sizes_Photo_Size_Array_Set_Input>;
  pk_columns: Photo_Sizes_Photo_Size_Array_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/**
 * Flickr Album Photo Data
 *
 *
 * columns and relationships of "photo_size"
 *
 */
export type Photo_Size = {
  __typename?: 'photo_size';
  height?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  label: Scalars['String'];
  media?: Maybe<Scalars['String']>;
  source: Scalars['String'];
  width?: Maybe<Scalars['String']>;
};

/** aggregated selection of "photo_size" */
export type Photo_Size_Aggregate = {
  __typename?: 'photo_size_aggregate';
  aggregate?: Maybe<Photo_Size_Aggregate_Fields>;
  nodes: Array<Photo_Size>;
};

/** aggregate fields of "photo_size" */
export type Photo_Size_Aggregate_Fields = {
  __typename?: 'photo_size_aggregate_fields';
  avg?: Maybe<Photo_Size_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Photo_Size_Max_Fields>;
  min?: Maybe<Photo_Size_Min_Fields>;
  stddev?: Maybe<Photo_Size_Stddev_Fields>;
  stddev_pop?: Maybe<Photo_Size_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Photo_Size_Stddev_Samp_Fields>;
  sum?: Maybe<Photo_Size_Sum_Fields>;
  var_pop?: Maybe<Photo_Size_Var_Pop_Fields>;
  var_samp?: Maybe<Photo_Size_Var_Samp_Fields>;
  variance?: Maybe<Photo_Size_Variance_Fields>;
};


/** aggregate fields of "photo_size" */
export type Photo_Size_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Photo_Size_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Photo_Size_Avg_Fields = {
  __typename?: 'photo_size_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "photo_size". All fields are combined with a logical 'AND'. */
export type Photo_Size_Bool_Exp = {
  _and?: InputMaybe<Array<Photo_Size_Bool_Exp>>;
  _not?: InputMaybe<Photo_Size_Bool_Exp>;
  _or?: InputMaybe<Array<Photo_Size_Bool_Exp>>;
  height?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  source?: InputMaybe<String_Comparison_Exp>;
  width?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "photo_size" */
export enum Photo_Size_Constraint {
  /** unique or primary key constraint */
  PhotoSizeIdKey = 'photo_size_id_key',
  /** unique or primary key constraint */
  PhotoSizePkey = 'photo_size_pkey'
}

/** input type for incrementing numeric columns in table "photo_size" */
export type Photo_Size_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "photo_size" */
export type Photo_Size_Insert_Input = {
  height?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  label?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Photo_Size_Max_Fields = {
  __typename?: 'photo_size_max_fields';
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Photo_Size_Min_Fields = {
  __typename?: 'photo_size_min_fields';
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "photo_size" */
export type Photo_Size_Mutation_Response = {
  __typename?: 'photo_size_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Photo_Size>;
};

/** on conflict condition type for table "photo_size" */
export type Photo_Size_On_Conflict = {
  constraint: Photo_Size_Constraint;
  update_columns?: Array<Photo_Size_Update_Column>;
  where?: InputMaybe<Photo_Size_Bool_Exp>;
};

/** Ordering options when selecting data from "photo_size". */
export type Photo_Size_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: photo_size */
export type Photo_Size_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "photo_size" */
export enum Photo_Size_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Media = 'media',
  /** column name */
  Source = 'source',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "photo_size" */
export type Photo_Size_Set_Input = {
  height?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  label?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Photo_Size_Stddev_Fields = {
  __typename?: 'photo_size_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Photo_Size_Stddev_Pop_Fields = {
  __typename?: 'photo_size_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Photo_Size_Stddev_Samp_Fields = {
  __typename?: 'photo_size_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Photo_Size_Sum_Fields = {
  __typename?: 'photo_size_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "photo_size" */
export enum Photo_Size_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Media = 'media',
  /** column name */
  Source = 'source',
  /** column name */
  Width = 'width'
}

/** aggregate var_pop on columns */
export type Photo_Size_Var_Pop_Fields = {
  __typename?: 'photo_size_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Photo_Size_Var_Samp_Fields = {
  __typename?: 'photo_size_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Photo_Size_Variance_Fields = {
  __typename?: 'photo_size_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/**
 * Collection of PhotoSize
 *
 *
 * columns and relationships of "photo_sizes"
 *
 */
export type Photo_Sizes = {
  __typename?: 'photo_sizes';
  canblog: Scalars['Boolean'];
  candownload: Scalars['Boolean'];
  canprint: Scalars['Boolean'];
  id: Scalars['Int'];
  photo_size_array_id: Scalars['Int'];
};

/** aggregated selection of "photo_sizes" */
export type Photo_Sizes_Aggregate = {
  __typename?: 'photo_sizes_aggregate';
  aggregate?: Maybe<Photo_Sizes_Aggregate_Fields>;
  nodes: Array<Photo_Sizes>;
};

/** aggregate fields of "photo_sizes" */
export type Photo_Sizes_Aggregate_Fields = {
  __typename?: 'photo_sizes_aggregate_fields';
  avg?: Maybe<Photo_Sizes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Photo_Sizes_Max_Fields>;
  min?: Maybe<Photo_Sizes_Min_Fields>;
  stddev?: Maybe<Photo_Sizes_Stddev_Fields>;
  stddev_pop?: Maybe<Photo_Sizes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Photo_Sizes_Stddev_Samp_Fields>;
  sum?: Maybe<Photo_Sizes_Sum_Fields>;
  var_pop?: Maybe<Photo_Sizes_Var_Pop_Fields>;
  var_samp?: Maybe<Photo_Sizes_Var_Samp_Fields>;
  variance?: Maybe<Photo_Sizes_Variance_Fields>;
};


/** aggregate fields of "photo_sizes" */
export type Photo_Sizes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Photo_Sizes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Photo_Sizes_Avg_Fields = {
  __typename?: 'photo_sizes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  photo_size_array_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "photo_sizes". All fields are combined with a logical 'AND'. */
export type Photo_Sizes_Bool_Exp = {
  _and?: InputMaybe<Array<Photo_Sizes_Bool_Exp>>;
  _not?: InputMaybe<Photo_Sizes_Bool_Exp>;
  _or?: InputMaybe<Array<Photo_Sizes_Bool_Exp>>;
  canblog?: InputMaybe<Boolean_Comparison_Exp>;
  candownload?: InputMaybe<Boolean_Comparison_Exp>;
  canprint?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  photo_size_array_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "photo_sizes" */
export enum Photo_Sizes_Constraint {
  /** unique or primary key constraint */
  PhotoSizesPkey = 'photo_sizes_pkey'
}

/** input type for incrementing numeric columns in table "photo_sizes" */
export type Photo_Sizes_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  photo_size_array_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "photo_sizes" */
export type Photo_Sizes_Insert_Input = {
  canblog?: InputMaybe<Scalars['Boolean']>;
  candownload?: InputMaybe<Scalars['Boolean']>;
  canprint?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  photo_size_array_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Photo_Sizes_Max_Fields = {
  __typename?: 'photo_sizes_max_fields';
  id?: Maybe<Scalars['Int']>;
  photo_size_array_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Photo_Sizes_Min_Fields = {
  __typename?: 'photo_sizes_min_fields';
  id?: Maybe<Scalars['Int']>;
  photo_size_array_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "photo_sizes" */
export type Photo_Sizes_Mutation_Response = {
  __typename?: 'photo_sizes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Photo_Sizes>;
};

/** on conflict condition type for table "photo_sizes" */
export type Photo_Sizes_On_Conflict = {
  constraint: Photo_Sizes_Constraint;
  update_columns?: Array<Photo_Sizes_Update_Column>;
  where?: InputMaybe<Photo_Sizes_Bool_Exp>;
};

/** Ordering options when selecting data from "photo_sizes". */
export type Photo_Sizes_Order_By = {
  canblog?: InputMaybe<Order_By>;
  candownload?: InputMaybe<Order_By>;
  canprint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  photo_size_array_id?: InputMaybe<Order_By>;
};

/**
 * Array of photo_size for photo_sizes
 *
 *
 * columns and relationships of "photo_sizes_photo_size_array"
 *
 */
export type Photo_Sizes_Photo_Size_Array = {
  __typename?: 'photo_sizes_photo_size_array';
  id: Scalars['Int'];
  photo_size_id: Scalars['Int'];
  photo_sizes_id: Scalars['Int'];
};

/** aggregated selection of "photo_sizes_photo_size_array" */
export type Photo_Sizes_Photo_Size_Array_Aggregate = {
  __typename?: 'photo_sizes_photo_size_array_aggregate';
  aggregate?: Maybe<Photo_Sizes_Photo_Size_Array_Aggregate_Fields>;
  nodes: Array<Photo_Sizes_Photo_Size_Array>;
};

/** aggregate fields of "photo_sizes_photo_size_array" */
export type Photo_Sizes_Photo_Size_Array_Aggregate_Fields = {
  __typename?: 'photo_sizes_photo_size_array_aggregate_fields';
  avg?: Maybe<Photo_Sizes_Photo_Size_Array_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Photo_Sizes_Photo_Size_Array_Max_Fields>;
  min?: Maybe<Photo_Sizes_Photo_Size_Array_Min_Fields>;
  stddev?: Maybe<Photo_Sizes_Photo_Size_Array_Stddev_Fields>;
  stddev_pop?: Maybe<Photo_Sizes_Photo_Size_Array_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Photo_Sizes_Photo_Size_Array_Stddev_Samp_Fields>;
  sum?: Maybe<Photo_Sizes_Photo_Size_Array_Sum_Fields>;
  var_pop?: Maybe<Photo_Sizes_Photo_Size_Array_Var_Pop_Fields>;
  var_samp?: Maybe<Photo_Sizes_Photo_Size_Array_Var_Samp_Fields>;
  variance?: Maybe<Photo_Sizes_Photo_Size_Array_Variance_Fields>;
};


/** aggregate fields of "photo_sizes_photo_size_array" */
export type Photo_Sizes_Photo_Size_Array_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Photo_Sizes_Photo_Size_Array_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Photo_Sizes_Photo_Size_Array_Avg_Fields = {
  __typename?: 'photo_sizes_photo_size_array_avg_fields';
  id?: Maybe<Scalars['Float']>;
  photo_size_id?: Maybe<Scalars['Float']>;
  photo_sizes_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "photo_sizes_photo_size_array". All fields are combined with a logical 'AND'. */
export type Photo_Sizes_Photo_Size_Array_Bool_Exp = {
  _and?: InputMaybe<Array<Photo_Sizes_Photo_Size_Array_Bool_Exp>>;
  _not?: InputMaybe<Photo_Sizes_Photo_Size_Array_Bool_Exp>;
  _or?: InputMaybe<Array<Photo_Sizes_Photo_Size_Array_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  photo_size_id?: InputMaybe<Int_Comparison_Exp>;
  photo_sizes_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "photo_sizes_photo_size_array" */
export enum Photo_Sizes_Photo_Size_Array_Constraint {
  /** unique or primary key constraint */
  PhotoSizesPhotoSizeArrayPkey = 'photo_sizes_photo_size_array_pkey'
}

/** input type for incrementing numeric columns in table "photo_sizes_photo_size_array" */
export type Photo_Sizes_Photo_Size_Array_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  photo_size_id?: InputMaybe<Scalars['Int']>;
  photo_sizes_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "photo_sizes_photo_size_array" */
export type Photo_Sizes_Photo_Size_Array_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  photo_size_id?: InputMaybe<Scalars['Int']>;
  photo_sizes_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Photo_Sizes_Photo_Size_Array_Max_Fields = {
  __typename?: 'photo_sizes_photo_size_array_max_fields';
  id?: Maybe<Scalars['Int']>;
  photo_size_id?: Maybe<Scalars['Int']>;
  photo_sizes_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Photo_Sizes_Photo_Size_Array_Min_Fields = {
  __typename?: 'photo_sizes_photo_size_array_min_fields';
  id?: Maybe<Scalars['Int']>;
  photo_size_id?: Maybe<Scalars['Int']>;
  photo_sizes_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "photo_sizes_photo_size_array" */
export type Photo_Sizes_Photo_Size_Array_Mutation_Response = {
  __typename?: 'photo_sizes_photo_size_array_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Photo_Sizes_Photo_Size_Array>;
};

/** on conflict condition type for table "photo_sizes_photo_size_array" */
export type Photo_Sizes_Photo_Size_Array_On_Conflict = {
  constraint: Photo_Sizes_Photo_Size_Array_Constraint;
  update_columns?: Array<Photo_Sizes_Photo_Size_Array_Update_Column>;
  where?: InputMaybe<Photo_Sizes_Photo_Size_Array_Bool_Exp>;
};

/** Ordering options when selecting data from "photo_sizes_photo_size_array". */
export type Photo_Sizes_Photo_Size_Array_Order_By = {
  id?: InputMaybe<Order_By>;
  photo_size_id?: InputMaybe<Order_By>;
  photo_sizes_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: photo_sizes_photo_size_array */
export type Photo_Sizes_Photo_Size_Array_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "photo_sizes_photo_size_array" */
export enum Photo_Sizes_Photo_Size_Array_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PhotoSizeId = 'photo_size_id',
  /** column name */
  PhotoSizesId = 'photo_sizes_id'
}

/** input type for updating data in table "photo_sizes_photo_size_array" */
export type Photo_Sizes_Photo_Size_Array_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  photo_size_id?: InputMaybe<Scalars['Int']>;
  photo_sizes_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Photo_Sizes_Photo_Size_Array_Stddev_Fields = {
  __typename?: 'photo_sizes_photo_size_array_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  photo_size_id?: Maybe<Scalars['Float']>;
  photo_sizes_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Photo_Sizes_Photo_Size_Array_Stddev_Pop_Fields = {
  __typename?: 'photo_sizes_photo_size_array_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  photo_size_id?: Maybe<Scalars['Float']>;
  photo_sizes_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Photo_Sizes_Photo_Size_Array_Stddev_Samp_Fields = {
  __typename?: 'photo_sizes_photo_size_array_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  photo_size_id?: Maybe<Scalars['Float']>;
  photo_sizes_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Photo_Sizes_Photo_Size_Array_Sum_Fields = {
  __typename?: 'photo_sizes_photo_size_array_sum_fields';
  id?: Maybe<Scalars['Int']>;
  photo_size_id?: Maybe<Scalars['Int']>;
  photo_sizes_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "photo_sizes_photo_size_array" */
export enum Photo_Sizes_Photo_Size_Array_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PhotoSizeId = 'photo_size_id',
  /** column name */
  PhotoSizesId = 'photo_sizes_id'
}

/** aggregate var_pop on columns */
export type Photo_Sizes_Photo_Size_Array_Var_Pop_Fields = {
  __typename?: 'photo_sizes_photo_size_array_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  photo_size_id?: Maybe<Scalars['Float']>;
  photo_sizes_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Photo_Sizes_Photo_Size_Array_Var_Samp_Fields = {
  __typename?: 'photo_sizes_photo_size_array_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  photo_size_id?: Maybe<Scalars['Float']>;
  photo_sizes_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Photo_Sizes_Photo_Size_Array_Variance_Fields = {
  __typename?: 'photo_sizes_photo_size_array_variance_fields';
  id?: Maybe<Scalars['Float']>;
  photo_size_id?: Maybe<Scalars['Float']>;
  photo_sizes_id?: Maybe<Scalars['Float']>;
};

/** primary key columns input for table: photo_sizes */
export type Photo_Sizes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "photo_sizes" */
export enum Photo_Sizes_Select_Column {
  /** column name */
  Canblog = 'canblog',
  /** column name */
  Candownload = 'candownload',
  /** column name */
  Canprint = 'canprint',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoSizeArrayId = 'photo_size_array_id'
}

/** input type for updating data in table "photo_sizes" */
export type Photo_Sizes_Set_Input = {
  canblog?: InputMaybe<Scalars['Boolean']>;
  candownload?: InputMaybe<Scalars['Boolean']>;
  canprint?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  photo_size_array_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Photo_Sizes_Stddev_Fields = {
  __typename?: 'photo_sizes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  photo_size_array_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Photo_Sizes_Stddev_Pop_Fields = {
  __typename?: 'photo_sizes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  photo_size_array_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Photo_Sizes_Stddev_Samp_Fields = {
  __typename?: 'photo_sizes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  photo_size_array_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Photo_Sizes_Sum_Fields = {
  __typename?: 'photo_sizes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  photo_size_array_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "photo_sizes" */
export enum Photo_Sizes_Update_Column {
  /** column name */
  Canblog = 'canblog',
  /** column name */
  Candownload = 'candownload',
  /** column name */
  Canprint = 'canprint',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoSizeArrayId = 'photo_size_array_id'
}

/** aggregate var_pop on columns */
export type Photo_Sizes_Var_Pop_Fields = {
  __typename?: 'photo_sizes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  photo_size_array_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Photo_Sizes_Var_Samp_Fields = {
  __typename?: 'photo_sizes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  photo_size_array_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Photo_Sizes_Variance_Fields = {
  __typename?: 'photo_sizes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  photo_size_array_id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "album" */
  album: Array<Album>;
  /** fetch aggregated fields from the table: "album" */
  album_aggregate: Album_Aggregate;
  /** fetch data from the table: "album" using primary key columns */
  album_by_pk?: Maybe<Album>;
  /** fetch data from the table: "album_location" */
  album_location: Array<Album_Location>;
  /** fetch aggregated fields from the table: "album_location" */
  album_location_aggregate: Album_Location_Aggregate;
  /** fetch data from the table: "album_location" using primary key columns */
  album_location_by_pk?: Maybe<Album_Location>;
  /** fetch data from the table: "photo_size" */
  photo_size: Array<Photo_Size>;
  /** fetch aggregated fields from the table: "photo_size" */
  photo_size_aggregate: Photo_Size_Aggregate;
  /** fetch data from the table: "photo_size" using primary key columns */
  photo_size_by_pk?: Maybe<Photo_Size>;
  /** fetch data from the table: "photo_sizes" */
  photo_sizes: Array<Photo_Sizes>;
  /** fetch aggregated fields from the table: "photo_sizes" */
  photo_sizes_aggregate: Photo_Sizes_Aggregate;
  /** fetch data from the table: "photo_sizes" using primary key columns */
  photo_sizes_by_pk?: Maybe<Photo_Sizes>;
  /** fetch data from the table: "photo_sizes_photo_size_array" */
  photo_sizes_photo_size_array: Array<Photo_Sizes_Photo_Size_Array>;
  /** fetch aggregated fields from the table: "photo_sizes_photo_size_array" */
  photo_sizes_photo_size_array_aggregate: Photo_Sizes_Photo_Size_Array_Aggregate;
  /** fetch data from the table: "photo_sizes_photo_size_array" using primary key columns */
  photo_sizes_photo_size_array_by_pk?: Maybe<Photo_Sizes_Photo_Size_Array>;
};


export type Query_RootAlbumArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};


export type Query_RootAlbum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};


export type Query_RootAlbum_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAlbum_LocationArgs = {
  distinct_on?: InputMaybe<Array<Album_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Album_Location_Order_By>>;
  where?: InputMaybe<Album_Location_Bool_Exp>;
};


export type Query_RootAlbum_Location_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Album_Location_Order_By>>;
  where?: InputMaybe<Album_Location_Bool_Exp>;
};


export type Query_RootAlbum_Location_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPhoto_SizeArgs = {
  distinct_on?: InputMaybe<Array<Photo_Size_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Size_Order_By>>;
  where?: InputMaybe<Photo_Size_Bool_Exp>;
};


export type Query_RootPhoto_Size_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Photo_Size_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Size_Order_By>>;
  where?: InputMaybe<Photo_Size_Bool_Exp>;
};


export type Query_RootPhoto_Size_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPhoto_SizesArgs = {
  distinct_on?: InputMaybe<Array<Photo_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Sizes_Order_By>>;
  where?: InputMaybe<Photo_Sizes_Bool_Exp>;
};


export type Query_RootPhoto_Sizes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Photo_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Sizes_Order_By>>;
  where?: InputMaybe<Photo_Sizes_Bool_Exp>;
};


export type Query_RootPhoto_Sizes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPhoto_Sizes_Photo_Size_ArrayArgs = {
  distinct_on?: InputMaybe<Array<Photo_Sizes_Photo_Size_Array_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Sizes_Photo_Size_Array_Order_By>>;
  where?: InputMaybe<Photo_Sizes_Photo_Size_Array_Bool_Exp>;
};


export type Query_RootPhoto_Sizes_Photo_Size_Array_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Photo_Sizes_Photo_Size_Array_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Sizes_Photo_Size_Array_Order_By>>;
  where?: InputMaybe<Photo_Sizes_Photo_Size_Array_Bool_Exp>;
};


export type Query_RootPhoto_Sizes_Photo_Size_Array_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "album" */
  album: Array<Album>;
  /** fetch aggregated fields from the table: "album" */
  album_aggregate: Album_Aggregate;
  /** fetch data from the table: "album" using primary key columns */
  album_by_pk?: Maybe<Album>;
  /** fetch data from the table: "album_location" */
  album_location: Array<Album_Location>;
  /** fetch aggregated fields from the table: "album_location" */
  album_location_aggregate: Album_Location_Aggregate;
  /** fetch data from the table: "album_location" using primary key columns */
  album_location_by_pk?: Maybe<Album_Location>;
  /** fetch data from the table: "photo_size" */
  photo_size: Array<Photo_Size>;
  /** fetch aggregated fields from the table: "photo_size" */
  photo_size_aggregate: Photo_Size_Aggregate;
  /** fetch data from the table: "photo_size" using primary key columns */
  photo_size_by_pk?: Maybe<Photo_Size>;
  /** fetch data from the table: "photo_sizes" */
  photo_sizes: Array<Photo_Sizes>;
  /** fetch aggregated fields from the table: "photo_sizes" */
  photo_sizes_aggregate: Photo_Sizes_Aggregate;
  /** fetch data from the table: "photo_sizes" using primary key columns */
  photo_sizes_by_pk?: Maybe<Photo_Sizes>;
  /** fetch data from the table: "photo_sizes_photo_size_array" */
  photo_sizes_photo_size_array: Array<Photo_Sizes_Photo_Size_Array>;
  /** fetch aggregated fields from the table: "photo_sizes_photo_size_array" */
  photo_sizes_photo_size_array_aggregate: Photo_Sizes_Photo_Size_Array_Aggregate;
  /** fetch data from the table: "photo_sizes_photo_size_array" using primary key columns */
  photo_sizes_photo_size_array_by_pk?: Maybe<Photo_Sizes_Photo_Size_Array>;
};


export type Subscription_RootAlbumArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};


export type Subscription_RootAlbum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Album_Order_By>>;
  where?: InputMaybe<Album_Bool_Exp>;
};


export type Subscription_RootAlbum_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAlbum_LocationArgs = {
  distinct_on?: InputMaybe<Array<Album_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Album_Location_Order_By>>;
  where?: InputMaybe<Album_Location_Bool_Exp>;
};


export type Subscription_RootAlbum_Location_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Album_Location_Order_By>>;
  where?: InputMaybe<Album_Location_Bool_Exp>;
};


export type Subscription_RootAlbum_Location_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPhoto_SizeArgs = {
  distinct_on?: InputMaybe<Array<Photo_Size_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Size_Order_By>>;
  where?: InputMaybe<Photo_Size_Bool_Exp>;
};


export type Subscription_RootPhoto_Size_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Photo_Size_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Size_Order_By>>;
  where?: InputMaybe<Photo_Size_Bool_Exp>;
};


export type Subscription_RootPhoto_Size_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPhoto_SizesArgs = {
  distinct_on?: InputMaybe<Array<Photo_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Sizes_Order_By>>;
  where?: InputMaybe<Photo_Sizes_Bool_Exp>;
};


export type Subscription_RootPhoto_Sizes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Photo_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Sizes_Order_By>>;
  where?: InputMaybe<Photo_Sizes_Bool_Exp>;
};


export type Subscription_RootPhoto_Sizes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPhoto_Sizes_Photo_Size_ArrayArgs = {
  distinct_on?: InputMaybe<Array<Photo_Sizes_Photo_Size_Array_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Sizes_Photo_Size_Array_Order_By>>;
  where?: InputMaybe<Photo_Sizes_Photo_Size_Array_Bool_Exp>;
};


export type Subscription_RootPhoto_Sizes_Photo_Size_Array_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Photo_Sizes_Photo_Size_Array_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Sizes_Photo_Size_Array_Order_By>>;
  where?: InputMaybe<Photo_Sizes_Photo_Size_Array_Bool_Exp>;
};


export type Subscription_RootPhoto_Sizes_Photo_Size_Array_By_PkArgs = {
  id: Scalars['Int'];
};

export type GetAlbumsByLocationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAlbumsByLocationQuery = { __typename?: 'query_root', album_location: Array<{ __typename: 'album_location', id: number, name: string, description: string, modified?: boolean | null | undefined, albums: Array<{ __typename: 'album', flickr_photo_set_id?: string | null | undefined, title: string, description: string }> }> };

export type GetAlbumsByLocation2QueryVariables = Exact<{ [key: string]: never; }>;


export type GetAlbumsByLocation2Query = { __typename?: 'query_root', album_location: Array<{ __typename: 'album_location', id: number, name: string, description: string, modified?: boolean | null | undefined, albums: Array<{ __typename: 'album', flickr_photo_set_id?: string | null | undefined, title: string, description: string }> }> };

export const GetAlbumsByLocationDocument = gql`
    query GetAlbumsByLocation {
  album_location {
    __typename
    id
    name
    description
    albums {
      __typename
      flickr_photo_set_id
      title
      description
    }
    modified @client
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAlbumsByLocationGQL extends Apollo.Query<GetAlbumsByLocationQuery, GetAlbumsByLocationQueryVariables> {
    document = GetAlbumsByLocationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAlbumsByLocation2Document = gql`
    query GetAlbumsByLocation2 {
  album_location {
    __typename
    id
    name
    description
    albums {
      __typename
      flickr_photo_set_id
      title
      description
    }
    modified @client
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAlbumsByLocation2GQL extends Apollo.Query<GetAlbumsByLocation2Query, GetAlbumsByLocation2QueryVariables> {
    document = GetAlbumsByLocation2Document;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    