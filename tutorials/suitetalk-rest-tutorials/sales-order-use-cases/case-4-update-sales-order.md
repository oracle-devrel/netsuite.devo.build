---
title: Update Your Sales Order Use Case
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
description: This use case demonstrates how to update your sales order.
toc: true
author: Michelle Hu
date: 2022-01-11 11:00:00
---
Some common updates to an existing sales order include the following options:

- [Update Field Values](#update-field-values)
- [Update a Field for a Specific Line](#update-a-field-for-a-specific-line)
- [Add a New Transaction Line Without Updating a Field Value](#add-a-new-transaction-line-without-updating-a-field-value)
- [Remove an Item](#remove-an-item)

## Update Field Values

To update a specific field on the sales order, send a PATCH request with the changed field in the body.

<!-- {% raw %} -->
```
PATCH {{REST_SERVICES}}/record/v1/salesOrder/{{SALES_ORDER_ID}}

{     "orderStatus": "B" }
```
<!-- {% endraw %} -->

## Update a Field for a Specific Line

Updating a transaction line item is similar to updating a field by sending a PATCH request with the changed value in the body.

<!-- {% raw %} -->
```
PATCH {{REST_SERVICES}}/record/v1/salesOrder/{{SALES_ORDER_ID}}
```
<!-- {% endraw %} -->

To update a field for a specific line, specify the line number in the body of your request.

**Updating an Existing Item**

```
{
    "item": {
        "items": [
            {
                "line": 1,
                "isclosed": true
            }
        ]
    }
}
```

## Add a New Transaction Line Without Updating a Field Value

To add a new transaction line without updating a field value, leave out the line number. The request creates a new transaction line for the sales order.

<!-- {% raw %} -->
```
PATCH {{REST_SERVICES}}/record/v1/salesOrder/{{SALES_ORDER_ID}}
```
<!-- {% endraw %} -->

**Creating a New Line Item**

```
{
    "item": {
        "items": [
            {
            "item": { "id": 98 },
            "quantity": 2
            }
        ]
    }
}
```

## Remove an Item

After saving a sales order, you can use the sales order’s ID to remove an item by using the following PATCH call. Using an existing sales order, update `{{salesOrderId}}` with the ID of the sales order you wish to modify and specify the new items. When specifying the new items in the sales order, make sure the item you wish to remove is no longer listed.

<!-- {% raw %} -->
```
PATCH {{REST_SERVICES}}/record/v1/salesOrder/{{salesOrderId}}?replace=item
```
<!-- {% endraw %} -->

> 📢  **Note:** Currently, there is no option to individually delete a specific line through REST, so you can make the lines optional and let the sales person enforce this rule.

**Removing a Line Item (Future)**

```
{
   "item": {
      "items": [{
         "item": { "id": {{itemId}} },
         "rate": 40
      }, {
         "item": { "id": {{itemId}} },
         "rate": 50
      }]
   }
}
```