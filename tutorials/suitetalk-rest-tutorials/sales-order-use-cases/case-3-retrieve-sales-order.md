---
title: Retrieve Your Sales Order Use Case
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
description: This use case demonstrates how to retrieve your sales order.
author: michelle-hu
date: 2022-01-11 10:00:00
---
Use a GET request with the Sales Order's ID number to retrieve the sales order data.

<!-- {% raw %} -->
```
GET {{REST_SERVICES}}/record/v1/salesOrder/{{ID}} 
```
<!-- {% endraw %} -->

In the response body, you can see all the data pertaining to the sales order. The data includes the specific field values that you set, as well as default values for the fields that you did not set.

Each of the sublists has its own endpoint for you to gather field data for each line.

**GET Request Results**

```json
{
    "links": [
        {
            "rel": "self",
            "href": "https://runbox3.corp.netsuite.com/services/rest/record/v1/salesOrder/18"
        }
    ],
    "altSalesTotal": 0.0,
    "balance": 0.0,
    "balreadyrefunded": "F",
    "billingaddress": {
        "links": [
            {
                "rel": "self",
                "href": "https://runbox3.corp.netsuite.com/services/rest/record/v1/salesorder/18/billingaddress"
            }
        ]
    },
    "canBeUnapproved": true,
    "carrier": "nonups",
    "ccApproved": false,
    "ccProcessAsPurchaseCard": false,
    "checkCommitted": false,
    "createdDate": "2020-07-29T08:34:00Z",
    "credholdentity": 110,
    "credholdoverride": "F",
    "currency": {
        "links": [
            {
                "rel": "self",
                "href": "https://runbox3.corp.netsuite.com/services/rest/record/v1/currency/1"
            }
        ],
        "id": "1",
        "refName": "USA"
    },
    "currencyName": "USA",
    "currencyPrecision": 2,
    "currencysymbol": "USD",
    "customForm": "68",
    "defaultCatchUp": 92,
    "deferredrevenue": 0.0,
    "discountTotal": 0.0,
    "edition": "US",
    "entity": {
        "links": [
            {
                "rel": "self",
                "href": "https://runbox3.corp.netsuite.com/services/rest/record/v1/customer/110"
            }
        ],
        "id": "110",
        "refName": "Anonymous Customer"
    },
    "entity_nexus_country": "US",
    "entityfieldname": "entity",
    "entityNexus": {
        "links": [
            {
                "rel": "self",
                "href": "https://runbox3.corp.netsuite.com/services/rest/record/v1/nexus/1"
            }
        ],
        "id": "1",
        "refName": "US-CA"
    },
    "exchangeRate": 1.0,
    "excludecommission": false,
    "getAuth": false,
    "giftCertApplied": 0.0,
    "giftCertRedemption": {
        "links": [
            {
                "rel": "self",
                "href": "https://runbox3.corp.netsuite.com/services/rest/record/v1/salesorder/18/giftCertRedemption"
            }
        ]
    },
    "hasanydelayedrevrec": false,
    "hasFedexFreightService": false,
    "hasprecalcs": false,
    "id": "18",
    "ignoreAvs": false,
    "ignoreAvsVis": false,
    "ignoreCsc": false,
    "ignoreCscVis": false,
    "installmentcount": 0,
    "invertrevrecschedule": false,
    "iseitf81on": false,
    "isOnlineTransaction": "F",
    "isRecurringPayment": false,
    "item": {
        "links": [
            {
                "rel": "self",
                "href": "https://runbox3.corp.netsuite.com/services/rest/record/v1/salesorder/18/item"
            }
        ]
    },
    "itemShippingCostFxRate": 1,
    "lastModifiedDate": "2020-07-29T08:34:00Z",
    "linkedTrackingNumberList": {
        "links": [
            {
                "rel": "self",
                "href": "https://runbox3.corp.netsuite.com/services/rest/record/v1/salesorder/18/linkedTrackingNumberList"
            }
        ]
    },
    "manualCreditHold": "F",
    "needsbill": "F",
    "needsPick": true,
    "nextbill": "2020-07-29",
    "nexus": {
        "links": [
            {
                "rel": "self",
                "href": "https://runbox3.corp.netsuite.com/services/rest/record/v1/nexus/1"
            }
        ],
        "id": "1",
        "refName": "US-CA"
    },
    "nexus_country": "US",
    "oldrevenuecommitment": false,
    "ordbilled": "F",
    "orderStatus": "A",
    "ordpicked": false,
    "ordrecvd": false,
    "originalNexus": {
        "links": [
            {
                "rel": "self",
                "href": "https://runbox3.corp.netsuite.com/services/rest/record/v1/nexus/1"
            }
        ],
        "id": "1",
        "refName": "US-CA"
    },
    "originalNexusCountry": "US",
    "overallbalance": 0.0,
    "overallunbilledorders": 39.95,
    "paymentSessionAmount": 39.95,
    "payPalOverride": false,
    "payPalProcess": false,
    "prevDate": "2020-07-29",
    "primarycurrency": 1.0,
    "primarycurrencyfxrate": 1.0,
    "recognizedrevenue": 0.0,
    "revenuestatus": "A",
    "saleseffectivedate": "2020-07-29",
    "salesTeam": {
        "links": [
            {
                "rel": "self",
                "href": "https://runbox3.corp.netsuite.com/services/rest/record/v1/salesorder/18/salesTeam"
            }
        ]
    },
    "shipComplete": false,
    "shipDate": "2020-07-29",
    "shipIsResidential": false,
    "shipItemHasFreeShippingItems": false,
    "shipOverride": false,
    "shippingAddress": {
        "links": [
            {
                "rel": "self",
                "href": "https://runbox3.corp.netsuite.com/services/rest/record/v1/salesorder/18/shippingAddress"
            }
        ]
    },
    "shippingCostOverridden": false,
    "status": "A",
    "storeorder": "F",
    "subsidiary": {
        "links": [
            {
                "rel": "self",
                "href": "https://runbox3.corp.netsuite.com/services/rest/record/v1/subsidiary/1"
            }
        ],
        "id": "1",
        "refName": "Parent Company"
    },
    "subtotal": 39.95,
    "taxTotal": 0.0,
    "threedStatusCodeVis": false,
    "toBeEmailed": false,
    "toBeFaxed": false,
    "toBePrinted": false,
    "total": 39.95,
    "tranDate": "2020-07-29",
    "tranId": "1",
    "tranisvsoebundle": false,
    "unbilledOrders": 39.95,
    "usingVSOEFldSet": false,
    "vsoeautocalc": false,
    "warnNexusChange": false,
    "webstore": "F",
    "weekendpreference": "ASIS"
}
```