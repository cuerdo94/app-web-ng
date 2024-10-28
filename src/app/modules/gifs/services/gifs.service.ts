import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagHistory: string[] = []

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

  searchTag(tag: string): void {
    if (tag.trim().length === 0) return
    this.organizedHistory(tag.trim());
  }
}