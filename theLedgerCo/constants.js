const ACTION = {
  LOAN: 'LOAN',
  PAYMENT: 'PAYMENT',
  BALANCE: 'BALANCE',
};

const STATEMENT = {
  ACTION_INDEX: 0,
  BANK_NAME_INDEX: 1,
  BORROWER_NAME_INDEX: 2,
  PRINCIPAL_INDEX: 3,
  LUMP_SUM_AMOUNT_INDEX: 3,
  NO_OF_YEARS_INDEX: 4,
  EMI_NO_INDEX: {
    PAYMENT: 4,
    BALANCE: 3
  },
  RATE_OF_INTEREST_INDEX: 5
};

const EMI = {
    ZEROTH_MONTH: 0,
    FIRST_MONTH: 1,
    PREVIOUS_MONTH: 1,
    MINIMUM_BALANCE: 0,
    MINIMUM_AVAILABLE_EMI: 1,
    MINIMUM_PAYABLE_EMI: 1,
}

const MONTHS = 12;
const MINIMUM_BALANCE = 0;
const ZEROTH_LOAN_PAYMENT = 0;

module.exports = {
  STATEMENT,
  ACTION,
  MONTHS,
  MINIMUM_BALANCE,
  ZEROTH_LOAN_PAYMENT,
  EMI,
};
