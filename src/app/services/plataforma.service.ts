import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plataforma } from '../models/plataforma';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {

  constructor() { }

  obterTodos(): Observable<Plataforma[]>{
    let Plataformas = [
      {nome: "Nintendo"},
      {nome: "PlayStation"},
      {nome: "Xbox"},
      {nome: "PC"},
      {nome: "Mobile"},
    ]
    Plataformas.sort((a, b) => a.nome.localeCompare(b.nome));
    return of(Plataformas);
  }
}
