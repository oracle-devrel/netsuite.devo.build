---
title: Fulfill Your Sales Order Use Case
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
description: This use case demonstrates how to fulfill your sales order.
author: michelle-hu
date: 2022-01-11 11:30:00
---
To start the sales order fulfillment process, create a fulfillment from your sales order. You can create a fulfillment by sending a POST request with the ID of the sales order you want to fulfill.

<!-- {% raw %} -->
```
POST {{REST_SERVICE}}/record/v1/salesorder/{{SALES_ORDER_ID}}/!transform/itemfulfillment
```
<!-- {% endraw %} -->

The following code sample contains two orderLine groupings:

- In the first grouping, you partially fulfill an order by specifying a `quantity` of less than the full order **("quantity": 1).**
- In the second grouping, you leave the order unfulfilled by setting the `itemreceive` parameter to false **("itemreceive": false).**

```json
{
    "item": {
        "items": [
            {
                "orderLine": 1,
                "location": 6,
                "quantity": 1
            },
            {
                "orderLine": 4,
                "location": 6,
                "itemreceive": false
            }
        ]
    }
}
```

> 📢 &nbsp; **Note:** Like the provided code sample, your sales order may not have sequential order lines. For example, `"orderLine": 4` follows `"orderLine": 1` in the code sample.

To check the correct `orderLine` number for an item, use a GET call to retrieve the sales order item information through REST as show here: 

<!-- {% raw %} -->
```
GET {{REST_SERVICES}}/record/v1/salesOrder/{{ID}}/item
```
<!-- {% endraw %} -->
