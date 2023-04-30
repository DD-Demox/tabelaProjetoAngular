import { Component } from '@angular/core';
import { DADOS_ALUNOS } from '../alunos-lista';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formadicionaraluno',
  templateUrl: './formadicionaraluno.component.html',
  styleUrls: ['./formadicionaraluno.component.css']
})
export class FormadicionaralunoComponent {
  registrarAluno(form:NgForm){
    console.log(form.value)
  }
}
