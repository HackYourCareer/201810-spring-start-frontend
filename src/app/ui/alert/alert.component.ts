import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {

  /**
   * Alert type
   */
  private alertType: AlertType = AlertType.ERROR;

  /**
   * Alert message
   */
  private alertMessage: string = "";

  /**
   * Alert timeout in milliseconds
   */
  private alertTimeout: number = 5000;

  /**
   * Determinate whether alert is active
   */
  private isAlertActive: boolean = false;

  /**
   * Input with a alert message payload
   *
   * @param alertPayload that contains essential data to display message
   */
  @Input('alertMessage')
  set alertPayload(alertMessage: AlertMessage) {
    if( alertMessage == undefined ) return;
    this.showAlert(alertMessage.alertType, alertMessage.alertMessage);
  }

  /**
   * Common login to display alert
   *
   * @param type of an alert to display
   * @param message of alert to display
   */
  private showAlert(type: AlertType, message: string) {
    this.alertType = type;
    this.isAlertActive = true;
    this.alertMessage = message;

    setTimeout(() => this.isAlertActive = false, this.alertTimeout);
  }

  /**
   * Close alert
   */
  private closeAlert() {
    this.isAlertActive = false;
  }
}

/**
 * Interface that represent alert message
 */
export class AlertMessage {
  constructor(
    public alertType: AlertType,
    public alertMessage: string
  ) {}
}

/**
 * Enum is representing supported alert types
 */
export enum AlertType {
  ERROR = "danger",
  SUCCESS = "success"
}
