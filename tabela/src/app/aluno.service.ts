import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
import { DADOS_ALUNOS } from './alunos-lista';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor() { }
  
  getAlunos():Observable<Aluno[]> {
    const aluno = of(DADOS_ALUNOS)
    return aluno
  }

}
