import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../shared/misce/snack-bar/snack-bar.component';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-snack-bar-example',
  templateUrl: './snack-bar-example.component.html',
  styleUrls: ['./snack-bar-example.component.scss']
})
export class SnackBarExampleComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
  }

  displaySnackbar() {
    this.globalService.snackBarText = 'Data have been successfully saved!';
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 5000
    });
  }

}
