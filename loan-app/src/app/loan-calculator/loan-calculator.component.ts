import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.scss']
})
export class LoanCalculatorComponent implements OnInit {

  // defined variables type
  loanFormCalculator!: FormGroup;
  monthlyPayment: number = 0;
  interest: number = 0;


  loanApp: string;



   /* Initialize Form */
  constructor(private fb: FormBuilder) {
    this.loanApp = "Loan Application"
   }

  ngOnInit(): void {
    this.loanFormCalculator = this.fb.group({

      // loanAmount: [''],
      // interestRate: [''],
      // numOfYears: ['']

      // loanAmount: [ '', [ Validators.required] ],
      // interestRate: [ '', [ Validators.required]],
      // numOfYears: [ '', [ Validators.required]]


      loanAmount: [ '', [ Validators.required, Validators.pattern("^^\\d{1,100}(\\.\\d{1,2})?$")]],
      interestRate: [ '', [ Validators.required, Validators.pattern("^^\\d{1,2}(\\.\\d{1,2})?$") ] ],
      numOfYears: [ '', [ Validators.required, Validators.pattern("^[0-9]*$") ] ]

      })
}

    // function for calculating the loan payment and interest amount
onSubmit(){
  const formValues = this.loanFormCalculator.value;
  const loanAmount = parseFloat(formValues.loanAmount);
  const interestRate = parseFloat(formValues.interestRate);
  const numOfYears = parseFloat(formValues.numOfYears);

  /* variables  for loan formula calculating */
  const numOfMonths = (numOfYears * 12);
  const ratePerPeriod = ((interestRate / 100) / 12);

  /* Loan rate formula */
  this.monthlyPayment = (loanAmount * (ratePerPeriod * Math.pow((ratePerPeriod + 1), numOfMonths))) / (Math.pow((1 + ratePerPeriod), numOfMonths) - 1);
  this.interest = (this.monthlyPayment * numOfMonths) - loanAmount;

}
  // loanAmount!: number;
  // let errors: { [key: string]: any } = loanAmount.errors;
  // hasError(errorCode: string, path?: loanAmount | (loanAmount | number)[]): boolean {

  // }

//   getErrorMessage(errors) {
//     if (this.loanAmount.hasError('required')) {
//       return 'Loan amount is required.';
//     }

//     return this.loanAmount.hasError('loanAmount') ? 'Not a valid loan amount' : '';
//   }
// }

  // Function to clear the entries
  clearEntries() {
    this.monthlyPayment = 0;
    this.interest = 0;
    this.loanFormCalculator.reset()

  }

// get form(){
  // return this.loanFormCalculator.controls;
  // return this.loanFormCalculator;
// }



}

