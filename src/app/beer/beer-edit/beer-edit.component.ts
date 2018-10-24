import {Component, OnInit} from '@angular/core';
import {Beer, BeerService} from "../service/beer.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {AlertMessage, AlertType} from "../../ui/alert/alert.component";

@Component({
  selector: 'app-beer-edit',
  templateUrl: './beer-edit.component.html'
})
export class BeerEditComponent implements OnInit {

  /**
   * Beer instance fetched by id provided in the URL
   */
  private currentBeer:Beer;

  /**
   * Fetching beer HTTP error
   */
  private httpError:HttpErrorResponse;

  /**
   * Alert message
   */
  private alertMessage:AlertMessage;

  /**
   * Constructor that is used to inject required resources
   *
   * @param beerService responsible for communication with backend
   * @param activatedRoute allows to fetch requested beer's id from URL
   */
  constructor(private beerService:BeerService, private activatedRoute:ActivatedRoute) { }

  /**
   * Init method that is fetching beer by requested ID
   */
  ngOnInit() {
    // Obtaining id form URL parameter
    const id = this.activatedRoute.snapshot.paramMap.get("id");

    this.beerService.getBeer(parseInt(id)).subscribe({
      next: value => this.currentBeer = value,
      error: err => this.httpError = err
    });
  }

  /**
   * Modify beer
   *
   * @param modifiedBeer Beer instance that has been modified
   */
  private modifyBeer(modifiedBeer:Beer) {
    this.beerService.put(modifiedBeer, this.currentBeer.id).subscribe({
      next: value => this.alertMessage = new AlertMessage(AlertType.SUCCESS, "Beer has been modified successfully"),
      error: err => this.alertMessage = new AlertMessage(AlertType.ERROR, "Cannot modify beer due to: " + err.message)
    })
  }
}
