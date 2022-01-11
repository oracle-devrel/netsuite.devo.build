---
title: Delete a Sales Order Use Case
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
description: This use case demonstrates how to delete your sales order.
toc: true
author: Michelle Hu
date: 2022-01-11 11:00:00
---
To delete a sales order, send the DELETE call to delete the specific record with the specified ID.

```
DELETE {{REST_SERVICES}}/record/v1/salesOrder/{{ID}}
```