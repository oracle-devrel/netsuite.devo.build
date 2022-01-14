---
title: Create a Progress Sales Order Use Case
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
description: This use case demonstrates how to create a progress sales order.
toc: true
author: Michelle Hu
date: 2022-01-11 11:00:00
---
Creating a progress sales order is similar to creating a new sales order. For a progress sales order, change the custom form to Standard Sales Order - Progress Billing. You do this through REST by setting the custom form value when sending your REST request.

<table>
  <tbody>
    <tr>
      <td> Custom Form Name </td>
      <td> Custom Form ID </td>
    </tr>
    <tr>
      <td> Standard Sales Order (default) </td>
      <td> 68 </td>
    </tr>
    <tr>
      <td> Standard Sales Order - Progress Billing </td>
      <td> 86 </td>
    </tr>
  </tbody>
</table>

To complete the sales order, you need to add:

- a value for the entity field that corresponds to the customer on the sales order
- at least one item

You can also modify the following optional fields:

<table>
  <tbody>
    <tr>
      <td> Field on the Sales Order </td>
      <td> Corresponding Field on the Custom Form </td>
      <td> Valid Values </td>
    </tr>
    <tr>
      <td> date </td>
      <td> trandate </td>
      <td> YYYY-MM-DD </td>
    </tr>
    <tr>
      <td> status </td>
      <td> orderstatus </td>
      <td> A - Pending Approval <br> B - Pending Fulfillment </td>
    </tr>
    <tr>
      <td> billing terms </td>
      <td> terms </td>
      <td> see the terms table in the database </td>
    </tr>
  </tbody>
</table>

For more information, see [Creating Progress Sales Orders](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N1221802.html).

**Progress Sales Order**

<!-- {% raw %} -->
```
POST {{REST_SERVICES}}/record/v1/salesorder
{
    "customform": 86,  //For custom form "Standard Sales Order - Progress Billing"
    "entity": {
        "id": "110"
    },
    "trandate": "2020-07-30",  //optional field
    "orderstatus": "B",  //optional field
    "terms": 3,  //optional field
    "item": {
        "items": [
            {
                "item": {
                    "id": 98
                },
                "quantity": 1
            },
            {
                "item": {
                    "id": 98
                },
                "quantity": 2
            },
            {
                "item": {
                    "id": 98
                },
                "quantity": 3
            } 
        ]
    }
}
```
<!-- {% endraw %} -->