---
title: Approve Your Sales Order Use Case
parent:
- tutorials
- suitetalk-rest-tutorials
- sales-order-use-cases
tags:
- open-source
- sales-order
- beginner
categories:
- sales-order
- opensource
thumbnail: assets/landing-zone.png
description: This use case demonstrates how to approve your sales order.
toc: true
author: Michelle Hu
date: 2022-01-11 11:00:00
---
After you create a sales order, the `orderStatus` field of the sales order is initially set to value "A", and later changes to value "B". These letters denote the state of the sales order in the approval workflow as follows:

<table>
  <tbody>
    <tr>
      <td> orderStatus </td>
      <td> Approval Status </td>
    </tr>
    <tr>
      <td> A </td>
      <td> Pending Approval </td>
    </tr>
    <tr>
      <td> B </td>
      <td> Pending Fulfillment </td>
    </tr>
  </tbody>
</table>

To create a preapproved sales order, set the `orderStatus` in the POST request to "B".

**Setting Sales Order Approval Status**

```
POST {{REST_SERVICES}}/record/v1/salesOrder
{
    "entity": {
        "id": "110"
    },
   "orderStatus": "B",
    "item": {
        "items": [
            {
                "item": {
                    "id": 98
                },
                "quantity": 1
            }
        ]
    }
}
```

If you want to create a sales order that requires approval after you create it, send in a PATCH request with `orderStatus "B"` in the body. 

```
PATCH {{REST_SERVICES}}/record/v1/salesOrder/{{SALES_ORDER_ID}}
{
   "orderStatus": "B"
}
```

## Reset Approval Status

If you already approved the sales order but need to reset the approval status, send a PATCH request with the updated `orderStatus` in the body.

```
PATCH {{REST_SERVICES}}/record/v1/salesOrder/{{SALES_ORDER_ID}}
{
   "orderStatus": "A"
}
```

## Close a Sales Order

To close the sales order, close individual line items on the sales order using the following PATCH call and body.

**Patch Call for Closing a Sales Order**

```
PATCH {{REST_SERVICES}}/record/v1/salesOrder/{{SALES_ORDER_ID}}
{
   "item": {
        "items": [
            {
                "line": 1,
            "isclosed": true
            },
         {
                "line": 2,
            "isclosed": true
            },
         {
                "line": 3,
            "isclosed": true
            }
        ]
    }
}
```