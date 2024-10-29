import { Component } from '@angular/core';
import { CategoriaService } from '../../../../../services/categoria.service';
import { Categoria } from '../../../../../models/categoria';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtro-categoria',
  standalone: true,
  imports: [FormsModule, DropdownModule],
  templateUrl: './filtro-categoria.component.html',
  styleUrl: './filtro-categoria.component.css'
})
export class FiltroCategoriaComponent {
  categoriasDisponiveis!: Categoria[];
  categorias!: Categoria[];

  constructor(private categoriaService: CategoriaService){
    this.categoriaService.obterTodos().subscribe({
      next: (categorias) => this.categoriasDisponiveis = categorias,
      error: (erro) => {
        alert("Ocorreu um erro ao carregar as categorias")
        console.error(erro)
      }
    });
    //sort = função para ordenação || localeCompare == função para ordernar strings
  }
}
