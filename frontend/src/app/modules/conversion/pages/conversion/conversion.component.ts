import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../../services/conversion.service';
import { BreakpointObserver, MediaMatcher, Breakpoints } from '@angular/cdk/layout';
import { IGridConfig } from 'src/app/shared/interfaces/browser.interfaces';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ALL_UNIT_TYPES } from '../../../../shared/constants/conversion.contants';
import { IUnit } from 'src/app/shared/interfaces/conversion.interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationsComponent } from '../../../../shared/components/notifications/notifications.component';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  public units: string[] = [
    ...ALL_UNIT_TYPES
  ];

  public output: string;
  
  public gridConfig: IGridConfig = { cols: 0, rowHeight: '1:1' };
  public conversionForm = new FormGroup({
    input: new FormControl('', [
      Validators.required,
      this.regExValidation(/^(([0-9]+)?\.?([0-9]+)?)$/)
    ]),
    from: new FormControl('', [
      Validators.required,
      this.includesValidation(ALL_UNIT_TYPES)
    ]),
    to: new FormControl('', [
      Validators.required,
      this.includesValidation(ALL_UNIT_TYPES)
    ]),
    studentResponse: new FormControl('', [
      Validators.required,
      this.regExValidation(/^(([0-9]+)?\.?([0-9]+)?)$/)
    ]),
  });
  constructor(
    private breakpointObserver: BreakpointObserver,
    private _snackBar: MatSnackBar,
    private readonly conversionService: ConversionService) { }

  ngOnInit(): void {
    this.conversionForm.valueChanges.subscribe(value => {
    const { input, from, to, studentResponse } = this.conversionForm.controls

      this.output = '';
      if (
        this.conversionForm.valid
      ){
        this.onSubmit();
      } else if (
        !this.conversionForm.valid && input.value && from.value && to.value && studentResponse.value
        ) {
          this.output = 'invalid';
        }
    })
    const {XSmall, Small, Medium, Large, XLarge, Tablet, Web  } = Breakpoints;
    this.breakpointObserver.observe([XSmall, Small, Medium, Large, XLarge]).subscribe(result => {
      if (result.matches){
        const { breakpoints } = result;
        const currentBreakPoint = Object.keys(breakpoints).filter(key => breakpoints[key])[0];
        switch(currentBreakPoint){
          case XSmall: 
            this.gridConfig.cols = 1;
            this.gridConfig.rowHeight = "6:1";
            break;
          case Small:
            this.gridConfig.cols = 2;
            this.gridConfig.rowHeight = "4:1"
            break;
          default:
            this.gridConfig.cols = 4;
            this.gridConfig.rowHeight = "2:1"
            break;
        }
      }
    })
  }


  onSubmit(){
    const { input, from, to, studentResponse } = this.conversionForm.controls

    this.conversionService.isValid({
      input: input.value,
      from: from.value,
      to: to.value,
      response: studentResponse.value
    }).subscribe(data => {
      if (data.error){
        this._snackBar.openFromComponent(NotificationsComponent, {
          data: 'An Error Has Occured! Please check your connection.',
          horizontalPosition: 'start',
          duration: 10 * 1000,
          panelClass: 'error-msg'
        });
        // handle error in the UI
      }
      this.output = data.message
    })
  }

  regExValidation(standardRegex: RegExp): ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null => {
      const isValid = standardRegex.test(control.value);
      return isValid ? null: { 'isValid': { value: control.value }};
    };
  }

  includesValidation(arr: any[]): ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null => {
      const isValid = arr.includes(control.value);
      return isValid? null : { 'isValid': { value: control.value }}
    }
  }

}
