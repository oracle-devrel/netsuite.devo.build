---
title: Manage Your Subscription Sales Use Case
parent:
- tutorials
- suitetalk-rest-tutorials
- suitebilling-use-cases
tags:
- open-source
- suitebilling
- beginner
categories:
- suitebilling
- opensource
description: This use case demonstrates how to manage your subscription sales.
toc: true
author: michelle-hu
date: 2022-01-11 09:30:00
---
REST services provide a convenient channel to manage your subscription sales.

In this use case, you create the necessary records using REST for your fictitious company, CED Cyber Solutions.

## Create Prerequisite Records

Before you begin, you need to create the following records:

- [Subscription Plan](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1493329269.html) – If you have not created a subscription plan (or its associated pricing records) yet and would like to do so using REST, see [Use Case For Managing Your Subscription Catalog](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158109852746.html).
- [Price Plan](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1494646160.html) – See [Creating Price Plans](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1546981313.html)
- [Price Book](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1493327517.html) - See [Creating Price Books](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1546981356.html)
- [Customer](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N385885.html) – You need a customer to sell your subscription plan to. In this example, your customer is called Clean Water Co.
- [Billing Schedule](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_3884921707.html) – You need to create a charge-based billing schedule to determine how frequently we bill the customer. Your billing schedule is monthly, on the first of the month.

After creating these records, make note of their internal IDs. Throughout this example, use the IDs listed in the following table:

<table>
  <tbody>
    <tr>
      <td> Record Type </td>
      <td> Name </td>
      <td> ID </td>     
    </tr>
    <tr>
      <td><a href = "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1493329269.html"> Subscription Plan </a></td>
      <td> DEFEND Package </td>
      <td> 1 </td>
    </tr>
    <tr>
      <td><a href = "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1493327517.html"> Price Book </a></td>
      <td> Standard Pricing </td>
      <td> 1 </td>
    </tr>
    <tr>
      <td><a href = "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N385885.html"> Customer </a></td>
      <td> Clean Water Co. </td>
      <td> 1 </td>
    </tr>
    <tr>
      <td><a href = "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1493328447.html"> Subscription </a></td>
      <td> Three Years </td>
      <td> 1 </td>
    </tr>
    <tr>
      <td><a href = "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_3884921707.html"> Billing Schedule </a></td>
      <td> Monthly, 1st of the month </td>
      <td> 1 </td>
    </tr>
    <tr>
      <td><a href = "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N2248153.html"> Service Items </a></td>
      <td> Managed Detection and Response </td>
      <td> 7 </td>
    </tr>
  </tbody>
</table>


## Create a Billing Account

Clean Water Co. wants to be billed on the first of the month. They use the same currency as your primary currency. Since they are starting their subscription on January 1, 2020, that is when billing starts.

The **startDate** must always be in the format YYYY-MM-DD. Use this format regardless of the date format preferences set.

A successful request returns a response with HTTP status **204 No Content**. The returned response headers contain the endpoint for the new record. Make note of the Billing Account ID. The example Billing Account internal ID is 1.

**Example Billing Account**

```json
{
    "billingSchedule": { "id": "1" },
    "currency": { "id": "1" },
    "customer": { "id": "16" },
    "name": "REST Billing Account",
    "startDate": "2020-01-01"
}
```

## Create a Draft Subscription

Your subscription references all records that you have created.

On a successful response, make note of the subscription ID. Use the ID to make changes to your draft subscription. The ID for your example subscription is 1.

**Example Subscription**

```json
{
    "customer": { "id": "1" },
    "billingAccount": { "id": "1" },
    "subscriptionPlan": { "id": "1" },
    "priceBook": { "id": "1" },
    "initialTerm": { "id": "1" }
}
```

## Edit Your Draft Subscription

When you created your subscription, you chose not to supply information about the line items included or the pricing of those line items. This means that the fields use the default values from the subscription plan.

If desired, you can change the defaults. To change the defaults, you send a PATCH request with the ID of the target record appended to the end of the patch request. The contents of the request body only need to include your changes. Make sure that all changes to dependent fields are included.

Clean Water Co. wants the silver support tier and has 25 users. Because they are one of your first customers, they receive a 50% discount on their setup costs.

> 📢 &nbsp; **Note:** Leaving a field undefined leaves it unchanged. If you want to set the value of a field to an empty value, you must explicitly set the field to null in the request body.

A successful request returns a response with HTTP status **204 No Content**. The endpoint for the modified record is returned in the response headers.

**Example Edited Subscription**

```json
{
    "subscriptionLine": {
        "items": [
            {
                "lineNumber": 4,
                "isIncluded": true
            }
        ]
    },
    "priceInterval": {
        "items": [
            {
                "subscriptionPlanLineNumber": 1,
                "discount": 50.0
            },
            {
                "subscriptionPlanLineNumber": 3,
                "quantity": 25
            }
        ]
    }
}
```

## Add an Add-On Item

Before adding add-on items to any subscription plan, you must [Enabling SuiteBilling Features](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1546981120.html).

Clean Water Co. would like to add Managed Detection and Response to their subscription. The requirements for the line are as follows:

- Bill in advance
- Always add to renewal subscriptions
- Have a prorated start and end date
- Charge $50.00 per month, prorated by day

Adding an add-on item to a draft subscription is an edit. You complete this edit by sending a PATCH request to the subscription endpoint with the ID appended to the end.

Because the add-on item is not tied to any subscription plan or price book, you must supply all of the subscription line and price book line information.

Because the add-on line requires new pricing information, you must create another price plan. If you are unfamiliar with this process, see [Use Case For Managing Your Subscription Catalog](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158109852746.html). You assign an ID of 19 to the new price plan.

If the customer decides that they no longer want the add-on item, you can PATCH the subscription to mark the line as not included.


**Example Add-On Items**

```json
{
    "subscriptionLine": {
        "items": [
            {
                "lineNumber": 7,
                "item": { "id": "7" },
                "subscriptionLineType": "2",
                "billingMode": "IN_ADVANCE",
                "renewalOption": "ALWAYS",
                "prorateStartDate": true,
                "prorateEndDate": true
            }
        ]
    },
    "priceInterval": {
        "items": [
            {
                "subscriptionPlanLineNumber": 7,
                "pricePlan": { "id": "19" },
                "frequency": "MONTHLY",
                "repeatEvery": "1",
                "startOffsetUnit": "MONTH",
                "startOffsetValue": 1,
                "prorateBy": "DAY"
            }
        ]
    }
}
```