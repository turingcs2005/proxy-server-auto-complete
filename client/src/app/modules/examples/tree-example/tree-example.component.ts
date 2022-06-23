import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'src/app/app-data/app-models';

@Component({
  selector: 'app-tree-example',
  templateUrl: './tree-example.component.html',
  styleUrls: ['./tree-example.component.scss']
})
export class TreeExampleComponent implements OnInit {
  
  TREE_DATA: TreeNode[] = [
    {
      name: 'Spreader',
      children: [
        {name: 'Policy',
         children: [
          {name: 'Business Segment'},
          {name: 'Underwriter Name (xHanover Programs)'},
          {name: 'Program Manager Name (Hanover Programs only)'},
          {name: 'Underwriting Technician Name (xHanover Programs)'},
          {name: 'Underwriter Name (Hanover Programs)'},
          {name: 'Producing Agent Code (xHanover Programs)'},
          {name: 'Producing Agent Name (xHanover Programs)'},
          {name: 'Program Name (Hanover Programs)'},
          {name: 'Insured Name'},
          {name: 'Account Number'},
          {name: 'Policy Symbol'},
          {name: 'Policy Number'},
          {name: 'Policy Mod'},
          {name: 'Policy Effective Date'},
          {name: 'Policy Expiration Date'},
          {name: 'Reinsurance Effective Date'},
          {name: 'Reinsurance Expiration Date'},
          {name: 'Mid-term Fac Adjustment?'},
          {name: 'Mid-term Fac Adjustment Effective Date'}
         ]
        },
        {name: 'Building/Location Group Array [ ]',
          children: [
            {name: 'Reason for Reinsurance'},
            {name: 'Additional comments'},
            {name: 'Building/Location Array [ ]',
              children: [
                {name: 'Location Number'},
                {name: 'Building Number'},
                {name: 'Risk Street Address'},
                {name: 'Risk City'},
                {name: 'Risk State'},
                {name: 'Risk ZIP Code'},
                {name: 'B, BPP, BI'},
                {name: 'Additional Exposure'},
                {name: 'Total Exposure'},
                {name: 'Direct Property Premium'}
              ]
            },
            {name: 'Reinsurer Array [ ]',
              children: [
                {name: 'Certificate Number'},
                {name: 'Covered Perils'},
                {name: 'Reinsurer Name'},
                {name: '% Participation'},
                {name: 'Retention Amount'},
                {name: 'Limit Purchased'},
                {name: 'Reinsurance Premium'},
                {name: 'Ceding Commission?'},
                {name: 'Commission Type'},
                {name: 'Commission Amount'}
              ]
            }
          ]}
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
