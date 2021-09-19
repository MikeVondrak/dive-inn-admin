export interface PhotoSet {
  date_create: "1631400225"
  description: {_content: string },
  id: string,
  photos: number,
  title: { _content: string }
}

export interface PhotoSetList {
  page: number,
  pages: number,
  perpage: number,
  photoset: PhotoSet[]
}