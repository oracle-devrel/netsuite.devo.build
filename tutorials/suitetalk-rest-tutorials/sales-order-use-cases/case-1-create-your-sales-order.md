---
title: Create Your Sales Order Use Case
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
description: This use case demonstrates how to create your sales order.
toc: true
author: michelle-hu
date: 2022-01-11 11:00:00
---
There are two ways you can create a sales order:
- [Create a Sales Order from an Estimate](#create-a-sales-order-from-an-estimate)
- [Create a New Stand-Alone Sales Order](#create-a-new-stand-alone-sales-order)

## Create a Sales Order from an Estimate

To create a sales order from an existing estimate, use the transform function in the REST API:

<!-- {% raw %} -->
```json
POST {{REST_SERVICES}}/record/v1/estimate/{{ESTIMATE_ID}}/!transform/salesOrder
```
<!-- {% endraw %} -->

This function takes an estimate with an ID of <!-- {% raw %} --> `{{ESTIMATE_ID}}` <!-- {% endraw %} --> and transforms it into a sales order. You can also specify in the body of the request which fields you want to change during the transformation.

<!-- {% raw %} -->
```json
POST {{REST_SERVICES}}/record/v1/estimate/{{ESTIMATE_ID}}/!transform/salesOrder
{
    "memo": "Transformed Estimate to Sales Order!"
}
```
<!-- {% endraw %} -->

## Create a New Stand-Alone Sales Order

In the Basic Sales Order example, you can create a sales order without filling in the details of the other fields.

The system automatically calculates many fields in the sales order based on the value of the `entity` field.

The transaction Date (or tranDate in REST) is the creation date of the sales order. If you leave the field blank, it defaults to the current date.

For a complete list of fields you can populate on a sales order, see the [Sales Order Records Browser](https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2021_2/script/record/salesorder.html).

Use the Custom Form field (customform in REST) to determine what type of record the system creates after you bill a sales order. For more information about the custom form field, see [Creating Sales Orders](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N1216500.html).

Custom Form Types include:

- Standard Sales Order
- Standard Sales Order - Cash Sale
- Standard Sales Order - Invoice
- Standard Sales Order - Progress Billing

<!-- {% raw %} -->
```json
POST {{REST_SERVICES}}/record/v1/salesOrder
```
<!-- {% endraw %} -->

**Basic Sales Order**

```json
{
    "entity": {
        "id": "110"
    },
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

**More Complicated Sales Order**

```json
{
    "entity": {
        "id": "110"
    },
    "customForm": "68",
    "tranDate": "2020-6-15",
    "otherrefnum": "11037",
    "memo": "This is a test memo!",
    "item": {
        "items": [
            {
                "item": {
                    "id": 98
                },
                "quantity": 1,
                "Description": "Test Item"
            }
        ]
    }
}
```