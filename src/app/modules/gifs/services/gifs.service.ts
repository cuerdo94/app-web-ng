import { Injectable } from '@angular/core';
import { ApiResponse, Gif, GifResponse } from '../interfaces/gif.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "DfqKAN7LdUpsKjIVEdFZaY4RzCWm4pLr";
  private urlbase: string = "https://api.giphy.com/";

  private _tagHistory: string[] = []
  private _gifsResult: Gif[] = [];
  constructor(private httpCliente: HttpClient) {

  }


  get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  private organizedHistory(tag: string): void {

    if (this._tagHistory.includes(tag.toLowerCase())) {
      this._tagHistory = this._tagHistory.filter(t => t !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
  }

  async searchTag(tag: string): Promise<void> {
    if (tag.trim().length === 0) return
    this.organizedHistory(tag.trim());

    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', 25)
      .set('offset', 0)
      .set('rating', 'g')
      .set('lang', 'en')
      .set('bundle', 'messaging_non_clips')
    this.httpCliente.get<ApiResponse>(`${this.urlbase}v1/gifs/search`, { params }).subscribe((resp) => {

      console.log(resp);
      this._gifsResult = resp.data.map((gif: GifResponse) => ({
        id: gif.id,
        title: gif.title,
        url: gif.url,
        embedUrl: gif.embed_url,
        imageUrl: gif.images.original.url,
        fixedHeightUrl: gif.images.fixed_height.url
      }));
    });

    console.log(this._gifsResult);
  }

  public get gifs(): Gif[] {
    return [...this._gifsResult]
  }

}