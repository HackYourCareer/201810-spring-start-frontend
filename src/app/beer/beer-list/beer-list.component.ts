import {Component, OnInit} from '@angular/core';
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Beer, BeerService} from "../service/beer.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AlertMessage, AlertType} from "../../ui/alert/alert.component";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  /**
   * Edit beer icon const
   */
  private readonly faEdit = faPen;

  /**
   * Edit beer icon const
   */
  private readonly faTrash = faTrash;

  /**
   * Alert message
   */
  private alertMessage:AlertMessage;

  /**
   * Array of beers presented
   */
  private beers: Beer[] = [];

  /**
   * Beer that is mark to remove
   */
  private beerToRemove: Beer;

  /**
   * Constructor is used to inject required resources
   *
   * @param beerService to obtain beers and allow to remove it
   * @param modalService to handle modal functionality
   */
  constructor(private beerService:BeerService, private modalService:NgbModal) { }

  /**
   * Fetch list of beers from beer service
   */
  ngOnInit() {
    this.beerService.getAll().subscribe({
      next: value => this.beers = value
    });
  }

  /**
   * Handle open of remove beer confirmation modal
   *
   * @param beerToRemove instance
   * @param removeBeerModal instance
   */
  private openRemoveModal(beerToRemove:Beer, removeBeerModal) {
    this.beerToRemove = beerToRemove;
    this.modalService.open(removeBeerModal);
  }

  /**
   * Close beer remove confirmation modal
   *
   * @param modal
   */
  private closeBeerRemoveConfirmationModal(modal) {
    modal.close();
  }

  /**
   * Handle beer remove
   *
   * @param modal
   */
  private removeBeer(modal) {
    const beerId = this.beerToRemove.id;
    this.beerToRemove = null;

    this.beerService.delete(beerId).subscribe({
      next: value => this.handleSuccessfulBeerRemoval(beerId),
      error: err => this.alertMessage = new AlertMessage(AlertType.ERROR, "Beer cannot be remove due to: " + err.message)
    });

    this.closeBeerRemoveConfirmationModal(modal);
  }

  /**
   * Handle successful beer removal
   *
   * @param id
   */
  private handleSuccessfulBeerRemoval(id:number) {
    this.beers = this.beers.filter(value => value.id != id);
    this.alertMessage = new AlertMessage(AlertType.SUCCESS, "Beer has been removed successfully");
  }
}
