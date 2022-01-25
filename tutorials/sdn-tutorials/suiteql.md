---
title: Migrating N/Query Syntax to SuiteQL in SuiteScript
parent:
- tutorials
- sdn-tutorials
- sdn
tags:
- open-source
- beginner
categories:
- opensource
description: This use case demonstrates how to migrate N/Query syntax to SuiteQL in SuiteScript.
toc: true
author: michelle-hu
date: 2022-01-25 11:00:00
---
## **Introduction**

This document demonstrates the process of converting an existing SuiteScript query to SuiteQL.

## **Disclaimer**

The step-by-step procedures indicated and screenshots in this document are taken from NetSuite release 2021.1.  The recommendations in this document are from the best practices gathered by the SDN Solutions Engineering team.  The processes, screenshots, and link descriptions may vary slightly from the latest versions of NetSuite and SuiteApp Control Center.

## **SuiteQL**

SuiteQL is a query language based on the SQL database query language supported by SuiteScirpt via the N/query module. It provides advanced query capabilities you can use to access your NetSuite records and data, and it supports querying the analytics data source. SuiteQL supports the syntax for both SQL-92 and Oracle SQL. However, you cannot use both syntaxes in the same query.

## **N/query Module** – Query object vs SuiteQL object

You can use the `N/query` module to create and run queries using the SuiteAnalytics Workbook query engine either by creating a `query.Query` object or creating a `query.SuiteQL` object.

Using both query objects, you can:
* Use multi-level joins to create queries using field data from multiple record types.
* Create conditions (filters) using AND, OR, and NOT logic, as well as formulas and relative dates.
* Sort query results based on the values of multiple columns.
* Load and delete existing saved queries that were created using the SuiteAnalytics Workbook interface.
* View paged query results.
* Use promises for asynchronous execution.

Where they differ is how they are structured. The `query.Query` object and the `query.Component` object are the primary building blocks for a more modular query created with the `N/query` module. The `query.Query` object encapsulates the query definition, and the `query.Component` object encapsulates one component of the query definition. `query.Query` is a much more structured method to query than `query.SuiteQL`, which can take more effort to create your code. However, this query object can be much easier to debug and step through in code than SuiteQL.  

e.g.

Querying customer email addresses using the `query.Query` object

```js
var myCustomerQuery = query.create({
    type: query.Type.CUSTOMER
});

myCustomerQuery.columns = [
    myCustomerQuery.createColumn({
        fieldId: 'entityid'
    }),
    myCustomerQuery.createColumn({
        fieldId: 'email'
    })
];

var resultSet = myCustomerQuery.run();
```

Queries created using SuiteQL can be more powerful and flexible than queries created using other `query.Query` in the `N/query` module. SuiteQL queries can also provide the best query performance for many use cases. You can create your own SuiteQL query strings, which lets you design and run complex SQL queries that cannot be created otherwise. However, for longer, more complex queries, query strings can be more complicated to debug and step-through compared to the `query.Query` object.

e.g.

Querying customer email addresses using the `query.SuiteQL` object

```js
var results = query.runSuiteQL({
    query: 'SELECT customer.entityid, customer.email FROM customer'
});
```

## **Converting an Existing Query to SuiteQL**

Instead of needing to rebuild and old query from scratch to utilize SuiteQL, the `N/query` module allows you to convert query objects to SuiteQL queries. If you have a `query.Query` object in your script (one that you created using `query.create(options)` or loaded using `query.load(options)`), the `Query.toSuiteQL()` method converts a `query.Query` object to a `query.SuiteQL` object. The resulting `query.SuiteQL` object represents the same query as the original `query.Query` object and, when run, returns the same query results. Additionally, you can extract the SQL string from the `query.SuiteQL` object and modify it if required.

A `query.SuiteQL` object includes the following properties:

* **SuiteQL.columns** — The result columns to be returned from the query. This property is an array of `query.Column` objects. The value of this property is the same as the value of the `Query.columns` property in the original `query.Query` object.
* **SuiteQL.params** — The parameters for the query. In SuiteQL, query conditions are represented using the WHERE clause and a set of parameters.
* **SuiteQL.query** — The string representation of the SuiteQL query. This string can contain SQL clauses, record or table names, field names, operators, and more. Once you have converted the `query.Query`, you can now arbitrarily modify the string and create a new query. 
* **SuiteQL.type** — The type of the query. This property uses values from the `query.Type` enum. The value of this property is the same as the value of the `Query.type` property in the original `query.Query` object.

To run the SuiteQL query, use one of the following methods:

Use `SuiteQL.run()` to run the query as a non-paged query. This method returns the results as a `query.ResultSet` object.

Use `SuiteQL.runPaged(options)` to run the query as a paged query. This method returns the results as a `query.PagedData` object. The default page size is 50 results per page. The minimum page size is 5 results per page, and the maximum page size is 1000 results per page.

e.g.

```js
/**
* @NApiVersion 2.x
* @NScriptType restlet
*/
define(['N/query'], function(query) {
    return {
        get: function(context) {
            
            var myCustomerQuery = query.create({
                type: query.Type.CUSTOMER
            });

            myCustomerQuery.columns = [
                myCustomerQuery.createColumn({
                    fieldId: 'entityid'
                }),
                
                myCustomerQuery.createColumn({
                        fieldId: 'email'
                })
            ];

            // Convert the query to its SuiteQL representation
            var customerEmailsQL = myCustomerQuery.toSuiteQL();

            // Examine the SuiteQL query string
            var suiteQL = customerEmailsQL.query;

            // Run the SuiteQL query, additionally, you can modify the string before executing
            var resultSuiteQL = query.runSuiteQL(suiteQL);

            // Compose the RESTlet response
            var response = {
                query: openSalesOrders,
                resultQuery: resultQuery,
                suiteQL: suiteQL,
                resultSuiteQL: resultSuiteQL
            };

            // Return the response
            return JSON.stringify(response);
        }
    }
});
```

**NOTE**: The `suiteQL` string in this example can also contain field formatting metadata, such as `/\*{entityid#RAW}\*/`. When you use `Query.toSuiteQL()` to convert a constructed query to its SuiteQL query equivalent, metadata may be added to the query string to indicate the formatting (or context) of fields in the query. For example, `/\*{entityid#RAW}\*/` metadata indicates that the `entityid` field is formatted using the `query.FieldContext.RAW` field context from the `query.FieldContext` enum. This metadata is added as comments (using `/\*` and `\*/`) and does not affect query execution or the query results.

## **References**

**[SDN Technical Onboarding Site](https://sites.oracle.com/site/SDN_Site/)**
