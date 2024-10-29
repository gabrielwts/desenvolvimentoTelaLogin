import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { Plataforma } from '../../../../../models/plataforma';
import { PlataformaService } from '../../../../../services/plataforma.service';


@Component({
  selector: 'app-filtro-plataforma',
  standalone: true,
  imports: [MultiSelectModule, FormsModule],
  templateUrl: './filtro-plataforma.component.html',
  styleUrl: './filtro-plataforma.component.css'
})
export class FiltroPlataformaComponent {
  plataformasDisponiveis!: Plataforma[];
  plataformas: Plataforma[];

  constructor(private plataformaService: PlataformaService){
    this.plataformaService.obterTodos().subscribe({
      next: (plataformas) => this.plataformasDisponiveis = plataformas,
      error: (erro) => {
        alert("Ocorreu um erro ao carregar as plataformas")
        console.error(erro)
      }
    });
    //sort = função para ordenação || localeCompare == função para ordernar strings
    this.plataformas = []
  }
}
