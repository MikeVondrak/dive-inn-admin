export interface PhotoSizes {
  canblog: boolean,
  canprint: boolean,
  candownload: boolean
  size: PhotoSize[]
}

export interface PhotoSize {
  label: string,
  source: string,
  width?: string,
  height?: string,
  media?: string,
}

export interface PhotoSetPhoto {
  id: string,
  title: string,
  isPublic: boolean,
}

export interface PhotoSet {
  id: string,
  primary: string,
  owner: string,
  ownername: string,
  photo: PhotoSetPhoto[],
  page: number,
  per_page: number,
  perpage: number,
  pages: number,
  title: string,
  total: number,
}


export interface PhotoSetListEntry {
  date_create: number,
  description: {_content: string },
  id: string,
  photos: number,
  title: { _content: string }
}

export interface PhotoSetList {
  page: number,
  pages: number,
  perpage: number,
  total: number,
  photoset: PhotoSetListEntry[]
}