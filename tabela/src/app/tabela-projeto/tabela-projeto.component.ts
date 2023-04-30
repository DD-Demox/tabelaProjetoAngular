import { Component, ViewChild } from '@angular/core';
import { Aluno } from '../aluno';
import { DADOS_ALUNOS } from '../alunos-lista';
import { AlunoService } from '../aluno.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';






@Component({
  selector: 'app-tabela-projeto',
  templateUrl: './tabela-projeto.component.html',
  styleUrls: ['./tabela-projeto.component.css']
})
export class TabelaProjetoComponent {
  
  constructor(private alunoService:AlunoService){}
  @ViewChild(MatSort,{ static: true }) sort: MatSort;
  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  colunas: string[] = ['nome','idade', 'peso', 'altura'];
  dadosTabela = new MatTableDataSource<Aluno>();
  key=[];
  colunasFinal=[{}];

  ngOnInit():void{
    this.getAlunos()
  }
  getAlunos():void{
    this.alunoService.getAlunos().subscribe(aluno =>{ this.dadosTabela.data = aluno;this.dadosTabela.sort=this.sort;this.dadosTabela.paginator=this.paginator})
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dadosTabela.filter = filterValue.trim().toLowerCase();
    if (this.dadosTabela.paginator) {
      this.dadosTabela.paginator.firstPage();
    }
  }
}
