---
title: Manage Your Subscription Catalog Use Case
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
description: This use case demonstrates how to manage your subscription catalog.
toc: true
author: michelle-hu
date: 2022-01-11 11:00:00
---
REST services provide a convenient channel to manage your subscription catalog.

In this use case, you create the necessary records using REST for your fictitious company, CED Cyber Solutions.

## Create Service Items

Before you begin, you need to create service items for your subscription plan. The security subscription plan that you want to sell includes the following items:

- Setup
- License
- Seats
- Bronze Support
- Silver Support
- Gold Support

You need to create a subscription term because you want your subscription plan to have an initial term of three years.

Although the subscription plan depends on these records, this use case does not cover how to create them through REST. For now, you can create them through the user interface.

After you create each record, make note of its internal ID so that you can reference it. You can find the internal ID of each record by navigating to the record's list page.

The following table lists prerequisite records along with the record type and example internal ID for each:

<table>
  <tbody>
    <tr>
      <td> Record Type </td>
      <td> Record Name </td>
      <td> Example Internal ID </td>
    </tr>
    <tr>
      <td><a href = "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N2248153.html"> Service Items </a></td>
      <td> License </td>
      <td> 1 </td>
    </tr>
    <tr>
      <td><a href = "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N2248153.html"> Service Items </a></td>
      <td> Setup </td>
      <td> 2 </td>
    </tr>
    <tr>
      <td><a href = "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N2248153.html"> Service Items </a></td>
      <td> Seats </td>
      <td> 3 </td>
    </tr>
    <tr>
      <td><a href = "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N2248153.html"> Service Items </a></td>
      <td> Bronze Support </td>
      <td> 4 </td>
    </tr>
    <tr>
      <td><a href = "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N2248153.html"> Service Items </a></td>
      <td> Silver Support </td>
      <td> 5 </td>
    </tr>
    <tr>
      <td><a href = "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N2248153.html"> Service Items </a></td>
      <td> Gold Support </td>
      <td> 6 </td>
    </tr>
    <tr>
      <td> Subscription Item </td>
      <td> Three Years </td>
      <td> 1 </td>
    </tr>
  </tbody>
</table>


## Create a Subscription Plan

To create records, you send POST requests to the endpoint for the record type. The request body should contain information for all required fields and any optional fields.

Your requirements are as follows:

- The plan name is "DEFEND Package"
- Setup is a one-time line
- Licensing and the number of users (seats) are recurring lines
- Customers must choose one of the three support tiers
> 📢 &nbsp; **Note:** At present time, there is no way to enforce this behavior through NetSuite, so you can make the lines optional and let the sales person enforce this rule.
- All recurring lines should be prorated except for seats
- All lines are billed in advance

To set the initialTerm to the subscription term that you have created, you need to reference an existing record. Because you created a custom subscription term, wrap the ID of that term in an object with the ID property. Wrapping the ID in an object is commonly how records are referenced in REST.

Lines on subscription plans are specified in the member sublist. The member sublist is an object with an items property. The items property is an array of objects that each represent a line. The lines have their own fields that must be defined. Although the lineNumber can be inferred in some cases, it is best to always specify it. Lines are 1-indexed. This is the common structure for sublists in requests.

Some fields on the lines in the member sublist require enumeration values. Usually, the possible values are clearly defined in the Metadata Catalog. However, sometimes they can be unclear. For example, subscriptionLineType has an enumeration value of integer strings. Those strings map to subscription line types:

- **1** – One-Time
- **2** – Recurring
- **3** – Usage

A successful request returns a response with a HTTP status of **204 No Content**. In the response headers, there is a Location key with an associated value representing the endpoint at which you can access your newly created record. Make note of the ID so that you can reference your subscription plan later. The ID for your example subscription plan is 1.

**Example Subscription Plan**

```
{
    "itemId": "DEFEND Package",
    "initialTerm": { "id": "1" },
    "member": {
        "items": [
            {
                "lineNumber": 1,
                "item": { "id": "1" },
                "isRequired": true,
                "subscriptionLineType": "1",
                "billingMode": "IN_ADVANCE",
                "renewalOption": "DIFFERENT_PLAN"
            },
            {
                "lineNumber": 2,
                "item": { "id": "2" },
                "isRequired": true,
                "subscriptionLineType": "2",
                "prorateStartDate": true,
                "prorateEndDate": true,
                "billingMode": "IN_ADVANCE",
                "renewalOption": "ALWAYS"
            },
            {
                "lineNumber": 3,
                "item": { "id": "3" },
                "isRequired": true,
                "subscriptionLineType": "2",
                "prorateStartDate": false,
                "prorateEndDate": false,
                "billingMode": "IN_ADVANCE",
                "renewalOption": "ALWAYS"
            },
            {
                "lineNumber": 4,
                "item": { "id": "4" },
                "isRequired": false,
                "subscriptionLineType": "2",
                "prorateStartDate": true,
                "prorateEndDate": true,
                "billingMode": "IN_ADVANCE",
                "renewalOption": "ALWAYS"
            },
            {
                "lineNumber": 5,
                "item": { "id": "5" },
                "isRequired": false,
                "subscriptionLineType": "2",
                "prorateStartDate": true,
                "prorateEndDate": true,
                "billingMode": "IN_ADVANCE",
                "renewalOption": "ALWAYS"
            },
            {
                "lineNumber": 6,
                "item": { "id": "6" },
                "isRequired": false,
                "subscriptionLineType": "2",
                "prorateStartDate": true,
                "prorateEndDate": true,
                "billingMode": "IN_ADVANCE",
                "renewalOption": "ALWAYS"
            }
        ]
    }
}
```

## Create a Price Plan

Your pricing requirements are as follows:

- Setup costs $100.00
- A license costs $1000.00
- Seats have a volume-based cost that decreases as your customer adds more users
    - For 0 - 20 seats, each seat costs $7.00
    - For 21- 50 seats, each seat costs $6.00
    - For 51+ seats, each seat costs $5.00
- Support prices change over time
    - Bronze starts at $30.00 and drops to $20.00 after the first year
    - Silver starts at $60.00 and drops to $40.00 after the first year
    - Gold starts at $90.00 and drops to $60.00 after the first year

There are six lines on your subscription plan, which means that you need at least six price plans. You need three more price plans to account for the price drop after the first year on your support lines. To satisfy these requirements, you need nine price plans.

Each price plan requires its own request.

**Price Plan 1**

```
{
    "currency": { "id": "1" },
    "pricePlanType": "2",
    "priceTiers": {
        "items": [
            {
                "fromVal": 0,
                "pricingOption": { "id": "-102" },
                "value": 100.00
            }
        ]
    }
}
```

**Price Plan 2**

```
{
    "currency": { "id": "1" },
    "pricePlanType": "2",
    "priceTiers": {
        "items": [
            {
                "fromVal": 0,
                "pricingOption": { "id": "-102" },
                "value": 250.00
            }
        ]
    }
}
```

**Price Plan 3**

```
{
    "currency": { "id": "1" },
    "pricePlanType": "4",
    "priceTiers": {
        "items": [
            {
                "fromVal": 0,
                "pricingOption": { "id": "-101" },
                "value": 7.00
            },
            {
                "fromVal": 20,
                "pricingOption": { "id": "-101" },
                "value": 6.00
            },
            {
                "fromVal": 50,
                "pricingOption": { "id": "-101" },
                "value": 5.00
            }
        ]
    }
}
```

**Price Plan 4**

```
{
    "currency": { "id": "1" },
    "pricePlanType": "2",
    "priceTiers": {
        "items": [
            {
                "fromVal": 0,
                "pricingOption": { "id": "-102" },
                "value": 30.00
            }
        ]
    }
}
```

**Price Plan 5**

```
{
    "currency": { "id": "1" },
    "pricePlanType": "2",
    "priceTiers": {
        "items": [
            {
                "fromVal": 0,
                "pricingOption": { "id": "-102" },
                "value": 20.00
            }
        ]
    }
}
```

**Price Plan 6**

```
{
    "currency": { "id": 1 },
    "pricePlanType": "2",
    "priceTiers": {
        "items": [
            {
                "fromVal": 0,
                "pricingOption": { "id": "-102" },
                "value": 60.00
            }
        ]
    }
}
```

**Price Plan 7**

```
{
    "currency": { "id": "1" },
    "pricePlanType": "2",
    "priceTiers": {
        "items": [
            {
                "fromVal": 0,
                "pricingOption": { "id": "-102" },
                "value": 40.00
            }
        ]
    }
}
```

**Price Plan 8**

```
{
    "currency": { "id": "1" },
    "pricePlanType": "2",
    "priceTiers": {
        "items": [
            {
                "fromVal": 0,
                "pricingOption": { "id": "-102" },
                "value": 90.00
            }
        ]
    }
}
```

**Price Plan 9**

```
{
    "currency": { "id": "1" },
    "pricePlanType": "2",
    "priceTiers": {
        "items": [
            {
                "fromVal": 0,
                "pricingOption": { "id": "-102" },
                "value": 60.00
            }
        ]
    }
}
```

## Create a Price Book

Your requirements are as follows:

Setup is a one-time cost

License cost is billed annually and prorated by month

Seats are billed monthly and prorated by day

Support is billed monthly, prorated by day, and prices decrease after the first year

The subscriptionPlanLineNumber has an integer value and is the number of the line to which the price interval should apply. The sublist line number cannot be inferred by the system because the relationship between subscription plan lines and price intervals is one-to-many.

The repeatEvery is connected to the frequency and determines how often the line should be billed. It has an enum value instead of an integer. The values map directly to their integer values.

For one-time lines, you must specify that repeatEvery is 0 and prorateBy is an empty string.

The startOffsetUnit and startOffsetValue are related to time-based pricing. Combined, the two fields determine when the pricing of a certain line should follow the tiers in the referenced price plan. For example, the support lines (4, 5, and 6) have two price intervals each. The first interval defines the pricing for the first year as startOffsetUnit = YEAR and startOffsetValue = 1. The second interval defines the pricing for the second year as startOffsetUnit = YEAR and startOffsetValue = 2. This results in a reduced recurring price for support in every year after the first.

On a successful response, you have completed the process for creating a subscription plan and price plans linked by a single price book.

**Price Book**

```
{
    "subscriptionPlan": { "id": "1" },
    "currency": { "id": "1" },
    "name": "TEST Pricing",
    "priceInterval": {
        "items": [
            {
                "subscriptionPlanLineNumber": 1,
                "pricePlan": { "id": "10" },
                "frequency": "ONETIME",
                "repeatEvery": "0",
                "startOffsetUnit": "MONTH",
                "startOffsetValue": 1,
                "prorateBy": ""
            },
            {
                "subscriptionPlanLineNumber": 2,
                "pricePlan": { "id": "11" },
                "frequency": "ANNUALLY",
                "repeatEvery": "1",
                "startOffsetUnit": "MONTH",
                "startOffsetValue": 1,
                "prorateBy": "MONTH"
            },
            {
                "subscriptionPlanLineNumber": 3,
                "pricePlan": { "id": "12" },
                "frequency": "MONTHLY",
                "repeatEvery": "1",
                "startOffsetUnit": "MONTH",
                "startOffsetValue": 1,
                "prorateBy": "DAY"
            },
            {
                "subscriptionPlanLineNumber": 4,
                "pricePlan": { "id": "13" },
                "frequency": "MONTHLY",
                "repeatEvery": "1",
                "startOffsetUnit": "YEAR",
                "startOffsetValue": 1,
                "prorateBy": "DAY"
            },
            {
                "subscriptionPlanLineNumber": 4,
                "pricePlan": { "id": "14" },
                "frequency": "MONTHLY",
                "repeatEvery": "1",
                "startOffsetUnit": "YEAR",
                "startOffsetValue": 2,
                "prorateBy": "DAY"
            },
            {
                "subscriptionPlanLineNumber": 5,
                "pricePlan": { "id": "15" },
                "frequency": "MONTHLY",
                "repeatEvery": "1",
                "startOffsetUnit": "YEAR",
                "startOffsetValue": 1,
                "prorateBy": "DAY"
            },
            {
                "subscriptionPlanLineNumber": 5,
                "pricePlan": { "id": "16" },
                "frequency": "MONTHLY",
                "repeatEvery": "1",
                "startOffsetUnit": "YEAR",
                "startOffsetValue": 2,
                "prorateBy": "DAY"
            },
            {
                "subscriptionPlanLineNumber": 6,
                "pricePlan": { "id": "17" },
                "frequency": "MONTHLY",
                "repeatEvery": "1",
                "startOffsetUnit": "YEAR",
                "startOffsetValue": 1,
                "prorateBy": "DAY"
            },
            {
                "subscriptionPlanLineNumber": 6,
                "pricePlan": { "id": "18" },
                "frequency": "MONTHLY",
                "repeatEvery": "1",
                "startOffsetUnit": "YEAR",
                "startOffsetValue": 2,
                "prorateBy": "DAY"
            }
        ]
    }
}
```

## Retrieve Records

You can retrieve records using a GET request. You can also use a GET request for validating records after creation. The endpoint is similar to the POST requests. The only difference is that the ID of the record is appended to the end.

**Example:** In this example, the GET request returns the response body that follows.

> 📢 &nbsp; **Note:** The response body is slightly different from the request body because there are other optional fields. These fields were set to their default values internally. The member sublist has its own endpoint that you can access to gather field data for each line.

This GET request:

```
GET http://demo123.suitetalk.api.netsuite.com/services/rest/record/v1/subscriptionplan/1          
```

Returns this response body:

```
{
    "links": [
        {
            "rel": "self",
            "href": "http://demo123.suitetalk.api.netsuite.com/services/rest/record/v1/subscriptionplan/1"
        }
    ],
    "autoRenewal": false,
    "createdDate": "2020-1-1T00:00:00Z",
    "customForm": "-950",
    "defaultRenewalTerm": {
        "links": [],
        "id": "1",
        "refName": "Three Years"
    },
    "id": "1",
    "includeChildren": false,
    "incomeAccount": {
        "links": [
            {
                "rel": "self",
                "href": "http://demo123.suitetalk.api.netsuite.com/services/rest/record/v1/account/1"
            }
        ],
        "id": "1",
        "refName": "Sales"
    },
    "initialTerm": {
        "links": [],
        "id": "1",
        "refName": "Three Years"
    },
    "isInactive": false,
    "itemId": "DEFEND Package",
    "lastModifiedDate": "2020-1-1T00:00:00Z",
    "member": {
        "links": [
            {
                "rel": "self",
                "href": "http://demo123.suitetalk.api.netsuite.com/services/rest/record/v1/subscriptionplan/1/member"
            }
        ]
    },
    "subsidiary": {
        "links": [
            {
                "rel": "self",
                "href": "http://demo123.suitetalk.api.netsuite.com/services/rest/record/v1/subscriptionplan/1/subsidiary"
            }
        ]
    },
    "userNotes": {
        "links": [
            {
                "rel": "self",
                "href": "http://demo123.suitetalk.api.netsuite.com/services/rest/record/v1/subscriptionplan/1/userNotes"
            }
        ]
    }
}
```