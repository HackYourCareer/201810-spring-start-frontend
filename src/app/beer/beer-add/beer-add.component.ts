import {Component} from '@angular/core';
import {Beer, BeerService} from "../service/beer.service";
import {AlertMessage, AlertType} from "../../ui/alert/alert.component";

@Component({
  selector: 'app-beer-add',
  templateUrl: './beer-add.component.html'
})
export class BeerAddComponent {

  /**
   * Alert message
   */
  private alertMessage:AlertMessage;

  /**
   *
   * @param beerService
   */
  constructor(private beerService:BeerService) {
  }

  /**
   * Call BeerService to save beer
   *
   * @param beer to save
   */
  private saveBeer(beer:Beer) {
    this.beerService.post(beer).subscribe({
      next: value => this.alertMessage = new AlertMessage(AlertType.SUCCESS, "Beer has been successfully created"),
      error: err => this.alertMessage = new AlertMessage(AlertType.ERROR, "There has been problem with creating a beer: " + err.message)
    });
  }
}
