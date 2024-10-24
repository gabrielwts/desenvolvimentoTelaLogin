import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [FormsModule, InputTextModule, PasswordModule, CalendarModule, InputMaskModule, ToastModule],
  providers: [MessageService],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})

interface Endereco {
  uf: string,
  logradouro: string,
  bairro: string,
  localidade: string,
}

export class CadastroUsuarioComponent {
  nome: string = "";
  email: string = "";
  senha: string = "";
  dataNascimento: Date = new Date();
  cpf: string = "";
  cep: string = "";
  estado: string = "";
  cidade: string = "";
  bairro: string = "";
  logradouro: string = "";


  constructor(private httpClient: HttpClient, private messageService: MessageService){

  }

  buscarEndereco(){
    let cep = this.cep.replace("-", "").replace(".", "")

    if (cep.length !=8){
      this.messageService.add({summary: "CEP inválido", severity: "error"})
      return;
    }
    this.httpClient.get<Endereco>(`https://viacep.com.br/ws/${this.cep}/json/`)
      .subscribe(res => {
        this.estado = res.uf;
        this.cidade = res.localidade;
        this.logradouro = res.logradouro;
        this.bairro = res.bairro;
      })
  }

  cadastrar(){
    this.buscarEndereco();
  }
}
