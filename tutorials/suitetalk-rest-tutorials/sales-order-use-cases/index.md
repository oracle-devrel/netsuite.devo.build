---
layout: collection
title:  SuiteTalk REST Web Services Tutorials - Sales Order Use Cases
series: sales-order-use-cases
parent: [tutorials, suitetalk-rest-tutorials]
description: The following collection contains end-to-end guidelines for sales order use cases.
author: michelle-hu
tags: [open-source, beginner]
sort: asc
color: purple
date: 2021-01-11 11:00:00
---

This section includes the following sample use cases for managing sales order transactions:

*  [Create Your Sales Order Use Case](case-1-create-your-sales-order)
*  [Apply Promotion to Your Sales Order Use Case](case-2-apply-promotion-to-sales-order)
*  [Retrieve Your Sales Order Use Case](case-3-retrieve-sales-order)
*  [Update Your Sales Order Use Case](case-4-update-sales-order)
*  [Approve Your Sales Order Use Case](case-5-approve-sales-order)
*  [Fulfill Your Sales Order Use Case](case-6-fulfill-sales-order)
*  [Create Invoices or Cash Sales from Your Sales Order Use Case](case-7-create-invoice-or-cash-sales-from-sales-order)
*  [Create a Progress Sales Order Use Case](case-8-create-progress-sales-order)
*  [Delete a Sales Order Use Case](case-9-delete-sales-order)

A sales order is a transaction that records a commitment to sell items or services to a customer. Sales orders have no accounting impact until items ship or services are completed. For more information on NetSuite sales orders, see [Creating Sales Orders](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N1216500.html).

## About This Tutorial

The following <!-- {% raw %} --> `{{ VARIABLE }}` <!-- {% endraw %} --> expressions are variables that you need to customize when reusing the code samples.

<table>
  <tbody>
    <tr>
      <td> Variable </td>
      <td> Definition </td>
    </tr>
    <tr>
      <td><!-- {% raw %} --><code>{{REST_SERVICES}}</code><!-- {% endraw %} --></td>
      <td> Indicates your access to the NetSuite REST Service (for example, <code>https://testaccount.corp.netsuite.com/services/rest</code>). </td>
    </tr>
    <tr>
      <td><!-- {% raw %} --><code>{{*_ID}}</code><!-- {% endraw %} --></td>
      <td> These variables refer to the internal ID of the record. For example, <code>ESTIMATE_ID</code> or <code>SALES_ORDER_ID.</code> </td>
    </tr>
  </tbody>
</table>

The IDs and the variables used in the following scenarios are examples only, and are included to show how to write REST commands.