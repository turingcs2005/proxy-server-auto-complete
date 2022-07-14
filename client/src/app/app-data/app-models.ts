export interface TreeNode {
  name: string;
  children?: TreeNode[];
}


// return display type base on field name
export class DisplayType {
  
  static currencyFields = ['TIV', 'additionalExposure', 'directPropertyPremium', 'retentionLimit', 'limitPurchased', 
  'reinsurancePremium', 'commissionAmount', 'policyTIV', 'grossReinsurancePremium', 'reinsuranceCommission', 
  'HanoverNetRetention', 'facultativeAmountPurchased', 'totalInsuredValue', 'grossPremium', 'cededRetention', 'cededLimit',
  'commission', 'netReinsurancePremium', 'retention', 'layer', 'retentionAmount'];

  static dateFields = ['policyEffectiveDate', 'policyExpirationDate', 'midTermFacAdjustmentDate', 'createdAt', 
  'updatedAt', 'deletedAt', 'dateOfPreparation', 'dateOfEndorsement', 'dateOfCancellation', 'cancellationDate', 'endorsementDate',
  'facExpirationDate', 'facEffectiveDate', 'reinsuranceEffectiveDate', 'reinsuranceExpirationDate'];

  constructor() {}

  static currencyCheck(x: string) {
    return DisplayType.currencyFields.includes(x);
  }

  static dateCheck(x: string) {
    return DisplayType.dateFields.includes(x);
  }

  static displayType(x: string) {
    if (DisplayType.currencyCheck(x)) {
      return 'currency';
    } else if (DisplayType.dateCheck(x)) {
      return 'date';
    } else {
      return 'other';
    }
  }
}
