---
title: Apply a Promotion to Your Sales Order Use Case
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
description: This use case demonstrates how to apply a promotion to your sales order.
toc: true
author: michelle-hu
date: 2022-01-11 09:30:00
---
To apply a promotion to a sales order, provide the ID value to the `promocode` field.

You can do this when you create a new sales order or when you make an update to an existing sales order.

**Applying a Promotion to a Sales Order**

<!-- {% raw %} -->
```
POST {{REST_SERVICES}}/record/v1/salesOrder
{
    "entity": {
        "id": "110"
    },
    "promocode": { "id": 1 },
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
<!-- {% endraw %} -->

## Apply a Discount Item to a Sales Order

If you have a discount item you want to apply to a sales order, you can either add in the discount item when you create a new sales order or when you make an update to an existing sales order. For the `discountitem id`, you specify the internal ID of the discount item.

**Applying a Discount Item When Creating a New Sales Order**

<!-- {% raw %} -->
```
POST {{REST_SERVICES}}/record/v1/salesOrder
{
    "entity": {
        "id": "110"
    },
    "discountitem": { "id": 99 },
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
<!-- {% endraw %} -->

**Applying a Discount Item When Updating an Existing Sales Order**

<!-- {% raw %} -->
```
PATCH {{REST_SERVICES}}/record/v1/salesOrder/{{SALES_ORDER_ID}}
{
    "discountitem": { "id": 99 }
}
```
<!-- {% endraw %} -->