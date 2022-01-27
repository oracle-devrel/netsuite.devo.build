---
title: Create Invoices or Cash Sales From Your Sales Order Use Case
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
description: This use case demonstrates how to create invoices or cash sales from your sales order.
toc: true
author: michelle-hu
date: 2022-01-11 12:00:00
---
This use case shows you how to create an invoice or cash sale for all fulfilled lines on the sales order.

## Create an Invoice

To create an invoice from a sales order, you need an approved sales order with the Custom Form field set to Standard sales order - Invoice and some fulfilled items. 

<!-- {% raw %} -->
```
POST {{REST_SERVICES}}/record/v1/salesorder/{{SALES_ORDER_ID}}/!transform/invoice
```
<!-- {% endraw %} -->

If you leave the request body empty, NetSuite creates an Invoice for all fulfilled items and quantities. However, if you plan to fulfill only part of the order, you need to be able to create a matching partial invoice. As shown in the example, you can create a partial invoice by specifying the quantity for each item line.

**Invoice From a Sales Order**

```json
{
    "item": {
        "items": [
            {
                "orderLine": 1,
                "quantity": 3
            },
            {
                "orderLine": 2,
                "quantity": 0
            }
        ]
    }
}
```

## Create a Cash Sale

To create a cash sale from a sales order, you need an approved sales order with the Custom Form field set to Standard Sales Order - Cash Sale and some fulfilled items. 

<!-- {% raw %} -->
```
POST {{REST_SERVICES}}/record/v1/salesorder/{{SALES_ORDER_ID}}/!transform/cashsale
```
<!-- {% endraw %} -->

If you leave the request body empty, NetSuite creates a cash sale for all fulfilled items and quantities. You can create a partial cash sale by specifying the quantity for each item line as shown in the following example.

**Cash Sale From a Sales Order**

```json
{
    "item": {
        "items": [
            {
                "orderLine": 1,
                "quantity": 0
            },
            {
                "orderLine": 2,
                "quantity": 4
            }
        ]
    }
}
```
