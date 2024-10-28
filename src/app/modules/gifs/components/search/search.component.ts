import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search',
  // templateUrl: './search.component.html',
  template: `
  <div class="mb-3">
    <label for="" class="form-label">Buscar:</label>
    <input
      type="text"
      class="form-control"
      name="filter-gif"
      id="filter-gif"
      placeholder="Gifs..."
    />
  </div>
  `,
  styleUrl: './search.component.css'
})
export class SearchComponent {

}