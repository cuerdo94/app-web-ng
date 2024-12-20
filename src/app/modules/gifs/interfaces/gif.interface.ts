export interface Gif {
  id: string,
  title: string,
  url: string,
  imageUrl: string,
}

export interface GifResponse {
  id: string;
  title: string;
  url: string;
  embed_url: string;
  images: {
    original: { url: string };
    fixed_height: { url: string };
  };
}

export interface ApiResponse {
  data: GifResponse[];
}