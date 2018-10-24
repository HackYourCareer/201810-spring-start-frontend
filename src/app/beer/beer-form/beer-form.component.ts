import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Beer} from "../service/beer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html'
})
export class BeerFormComponent {

  /**
   * Save button event emitter
   */
  @Output('submit')
  submitEvent: EventEmitter<Beer> = new EventEmitter<Beer>()

  /**
   * Form object
   */
  private beerForm: FormGroup;

  /**
   * Constructor creates empty form
   */
  constructor() {
    this.createForm(null);
  }


  /**
   * Input of a component that is creating a for out of passed object
   *
   * @param value
   */
  @Input('beer')
  set beer(value: Beer) {
    this.createForm(value);
  }

  /**
   * @return FormControl of a beer's name
   */
  private get beerName() {
    return this.beerForm.get('name');
  }

  /**
   * @return FormControl of a beer's alcohol content
   */
  private get beerAlcoholContent() {
    return this.beerForm.get('alcoholContent');
  }

  /**
   * @return FormControl of a beer's IBU
   */
  private get beerIBU() {
    return this.beerForm.get('ibu');
  }

  /**
   * Emits event of a save button
   */
  private submit() {
    const beer: Beer = Object.assign({}, this.beerForm.value);

    this.submitEvent.emit(beer);
  }

  /**
   * Create beer form out of passed object, if it's null empty form is created
   *
   * @param beer object of which data are passed as default values to the form
   */
  private createForm(beer?: Beer) {
    this.beerForm = new FormGroup({
      name: new FormControl((beer) ? beer.name : "", [
        Validators.required
      ]),
      description: new FormControl((beer) ? beer.description : ""),
      alcoholContent: new FormControl((beer) ? beer.alcoholContent : "", [
        Validators.required,
        Validators.min(0),
        Validators.max(100)
      ]),
      ibu: new FormControl((beer) ? beer.ibu : "", [
        Validators.min(0),
        Validators.max(100)
      ]),
    });
  }
}
