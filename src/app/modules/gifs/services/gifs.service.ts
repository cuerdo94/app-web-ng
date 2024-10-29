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


  private set saveHistory(v: string[]) {
    localStorage.setItem("history", JSON.stringify(v));
    this._tagHistory = v;
  }

  get tagHistory(): string[] {
    let history: string | null = localStorage.getItem("history");
    if (history != null && this._tagHistory.length == 0) {
      return JSON.parse(history);
    }

    return [...this._tagHistory];
  }


  private set saveGifs(v: Gif[]) {
    localStorage.setItem("list_gifs", JSON.stringify(v));
    this._gifsResult = v;
  }


  private organizedHistory(tag: string): void {
    tag = tag.toLowerCase();
    let tagList: string[] = this.tagHistory;
    if (tagList.includes(tag)) {
      tagList = tagList.filter(t => t !== tag);
    }

    tagList.unshift(tag);
    tagList = tagList.splice(0, 10);

    this.saveHistory = tagList;
  }

  async searchTag(tag: string): Promise<void> {
    if (tag.trim().length === 0) return
    this.organizedHistory(tag.trim());


    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', 25)
      .set('offset', 0)
      .set('rating', 'g')
      .set('lang', 'en')
      .set('bundle', 'messaging_non_clips');

    this.httpCliente.get<ApiResponse>(`${this.urlbase}v1/gifs/search`, { params }).subscribe((resp) => {

      this.saveGifs = resp.data.map((gif: GifResponse) => ({
        id: gif.id,
        title: gif.title || 'Sin datos',
        url: gif.url,
        embedUrl: gif.embed_url,
        imageUrl: gif.images.original.url,
        fixedHeightUrl: gif.images.fixed_height.url
      }));
    });

  }

  public get gifs(): Gif[] {
    let listGifs: string | null = localStorage.getItem("list_gifs");
    if (listGifs != null && this._gifsResult.length == 0) {
      return JSON.parse(listGifs);
    }
    return [...this._gifsResult]
  }

}