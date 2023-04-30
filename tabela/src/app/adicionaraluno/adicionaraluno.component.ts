import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormadicionaralunoComponent } from '../formadicionaraluno/formadicionaraluno.component';

@Component({
  selector: 'app-adicionaraluno',
  templateUrl: './adicionaraluno.component.html',
  styleUrls: ['./adicionaraluno.component.css']
})
export class AdicionaralunoComponent {

 constructor(public matDialog:MatDialog){}

 openDialog(){
  const dialog = this.matDialog.open(FormadicionaralunoComponent)
 }

}

// @Component({
//   selector: 'app-dialog-adicionaraluno',
//   templateUrl: 'adicionaralunodialog.html',
// })
// export class DialogAnimationsExampleDialog {
//   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
// }
