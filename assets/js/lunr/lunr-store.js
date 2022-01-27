var store = [{
        "title": null,
        "excerpt":"     404     Page not found :(    The requested page could not be found.   ","categories": null,
        "tags": null,
        "url": "/404.html",
        "teaser": ""
      },{
        "title": "About",
        "excerpt":"About DevO/DevRel.  ","categories": null,
        "tags": null,
        "url": "/about/",
        "teaser": ""
      },{
        "title": "Create Your Sales Order Use Case",
        "excerpt":"There are two ways you can create a sales order: Create a Sales Order from an Estimate Create a New Stand-Alone Sales Order Create a Sales Order from an Estimate To create a sales order from an existing estimate, use the transform function in the REST API: POST /record/v1/estimate//!transform/salesOrder This...","categories": ["sales-order","opensource"],
        "tags": ["open-source","sales-order","beginner"],
        "url": "/tutorials/suitetalk-rest-tutorials/sales-order-use-cases/case-1-create-your-sales-order",
        "teaser": ""
      },{
        "title": "Manage Your Subscription Catalog Use Case",
        "excerpt":"REST services provide a convenient channel to manage your subscription catalog. In this use case, you create the necessary records using REST for your fictitious company, CED Cyber Solutions. Create Service Items Before you begin, you need to create service items for your subscription plan. The security subscription plan that...","categories": ["suitebilling","opensource"],
        "tags": ["open-source","suitebilling","beginner"],
        "url": "/tutorials/suitetalk-rest-tutorials/suitebilling-use-cases/case-1-manage-your-subscription-catalog",
        "teaser": ""
      },{
        "title": "Apply a Promotion to Your Sales Order Use Case",
        "excerpt":"To apply a promotion to a sales order, provide the ID value to the promocode field. You can do this when you create a new sales order or when you make an update to an existing sales order. Applying a Promotion to a Sales Order POST /record/v1/salesOrder { \"entity\": {...","categories": ["sales-order","opensource"],
        "tags": ["open-source","sales-order","beginner"],
        "url": "/tutorials/suitetalk-rest-tutorials/sales-order-use-cases/case-2-apply-promotion-to-sales-order",
        "teaser": ""
      },{
        "title": "Manage Your Subscription Sales Use Case",
        "excerpt":"REST services provide a convenient channel to manage your subscription sales. In this use case, you create the necessary records using REST for your fictitious company, CED Cyber Solutions. Create Prerequisite Records Before you begin, you need to create the following records: Subscription Plan – If you have not created...","categories": ["suitebilling","opensource"],
        "tags": ["open-source","suitebilling","beginner"],
        "url": "/tutorials/suitetalk-rest-tutorials/suitebilling-use-cases/case-2-manage-your-subscription-sales",
        "teaser": ""
      },{
        "title": "Retrieve Your Sales Order Use Case",
        "excerpt":"Use a GET request with the Sales Order’s ID number to retrieve the sales order data. GET /record/v1/salesOrder/ In the response body, you can see all the data pertaining to the sales order. The data includes the specific field values that you set, as well as default values for the...","categories": ["sales-order","opensource"],
        "tags": ["open-source","sales-order","beginner"],
        "url": "/tutorials/suitetalk-rest-tutorials/sales-order-use-cases/case-3-retrieve-sales-order",
        "teaser": ""
      },{
        "title": "Update Your Sales Order Use Case",
        "excerpt":"Some common updates to an existing sales order include the following options: Update Field Values Update a Field for a Specific Line Add a New Transaction Line Without Updating a Field Value Remove an Item Update Field Values To update a specific field on the sales order, send a PATCH...","categories": ["sales-order","opensource"],
        "tags": ["open-source","sales-order","beginner"],
        "url": "/tutorials/suitetalk-rest-tutorials/sales-order-use-cases/case-4-update-sales-order",
        "teaser": ""
      },{
        "title": "Approve Your Sales Order Use Case",
        "excerpt":"After you create a sales order, the orderStatus field of the sales order is initially set to value “A”, and later changes to value “B”. These letters denote the state of the sales order in the approval workflow as follows: orderStatus Approval Status A Pending Approval B Pending Fulfillment To...","categories": ["sales-order","opensource"],
        "tags": ["open-source","sales-order","beginner"],
        "url": "/tutorials/suitetalk-rest-tutorials/sales-order-use-cases/case-5-approve-sales-order",
        "teaser": ""
      },{
        "title": "Fulfill Your Sales Order Use Case",
        "excerpt":"To start the sales order fulfillment process, create a fulfillment from your sales order. You can create a fulfillment by sending a POST request with the ID of the sales order you want to fulfill. POST /record/v1/salesorder//!transform/itemfulfillment The following code sample contains two orderLine groupings: In the first grouping, you...","categories": ["sales-order","opensource"],
        "tags": ["open-source","sales-order","beginner"],
        "url": "/tutorials/suitetalk-rest-tutorials/sales-order-use-cases/case-6-fulfill-sales-order",
        "teaser": ""
      },{
        "title": "Create Invoices or Cash Sales From Your Sales Order Use Case",
        "excerpt":"This use case shows you how to create an invoice or cash sale for all fulfilled lines on the sales order. Create an Invoice To create an invoice from a sales order, you need an approved sales order with the Custom Form field set to Standard sales order - Invoice...","categories": ["sales-order","opensource"],
        "tags": ["open-source","sales-order","beginner"],
        "url": "/tutorials/suitetalk-rest-tutorials/sales-order-use-cases/case-7-create-invoice-or-cash-sales-from-sales-order",
        "teaser": ""
      },{
        "title": "Create a Progress Sales Order Use Case",
        "excerpt":"Creating a progress sales order is similar to creating a new sales order. For a progress sales order, change the custom form to Standard Sales Order - Progress Billing. You do this through REST by setting the custom form value when sending your REST request. Custom Form Name Custom Form...","categories": ["sales-order","opensource"],
        "tags": ["open-source","sales-order","beginner"],
        "url": "/tutorials/suitetalk-rest-tutorials/sales-order-use-cases/case-8-create-progress-sales-order",
        "teaser": ""
      },{
        "title": "Delete a Sales Order Use Case",
        "excerpt":"To delete a sales order, send the DELETE call to delete the specific record with the specified ID.    DELETE /record/v1/salesOrder/   ","categories": ["sales-order","opensource"],
        "tags": ["open-source","sales-order","beginner"],
        "url": "/tutorials/suitetalk-rest-tutorials/sales-order-use-cases/case-9-delete-sales-order",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"Jekyll 2022-01-27T17:36:35+00:00 https://netsuite.devo.build/excerpts.xml Oracle NetSuite Tutorials Cool stuff from Oracle NetSuite's Developer Relations team Oracle NetSuite Developer Community Migrating N/Query Syntax to SuiteQL in SuiteScript 2022-01-25T09:00:00+00:00 2022-01-25T09:00:00+00:00 https://netsuite.devo.build/tutorials/sdn-tutorials/suiteql &lt;p&gt;This use case demonstrates how to migrate N/Query syntax to SuiteQL in SuiteScript.&lt;/p&gt; Michelle Hu This use case demonstrates how to migrate...","categories": null,
        "tags": null,
        "url": "/excerpts.xml",
        "teaser": ""
      },{
        "title": "Topics",
        "excerpt":"                 Filter:             All Tags     Collections     Personas     Languages     Frameworks     Topics                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             open-source 15                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               SDN Tutorials                      SuiteTalk REST Web Services Tutorials - Sales Order Use Cases                      SuiteTalk REST Web Services Tutorials - SuiteBilling Use Cases                                    Personas                                                                                                                                                                                                                                                                                                                                                                                                                             Languages                                                                                                                                                                                                                                                                                                                                Frameworks                                                                                                                                                                                                                                                                                                                                          Tags                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     open-source 15                                                                                                                                                                                                                                      ","categories": null,
        "tags": null,
        "url": "/topics/",
        "teaser": ""
      },{
        "title": "Collections",
        "excerpt":"SDN Tutorials The following collection contains SuiteCloud Developer Network (SDN) tutorials. SuiteTalk REST Web Services Tutorials - Sales Order Use Cases The following collection contains end-to-end guidelines for sales order use cases. SuiteTalk REST Web Services Tutorials - SuiteBilling Use Cases The following collection contains end-to-end guidelines for SuiteBilling use...","categories": null,
        "tags": null,
        "url": "/collections/",
        "teaser": ""
      },{
        "title": "SuiteTalk REST Web Services Tutorials - SuiteBilling Use Cases",
        "excerpt":"This section includes the following sample use cases for managing subscriptions using REST web services:  ","categories": null,
        "tags": ["open-source","beginner"],
        "url": "/tutorials/suitetalk-rest-tutorials/suitebilling-use-cases/",
        "teaser": ""
      },{
        "title": "SDN Tutorials",
        "excerpt":" ","categories": null,
        "tags": ["open-source","beginner"],
        "url": "/tutorials/sdn-tutorials/",
        "teaser": ""
      },{
        "title": "SuiteTalk REST Web Services Tutorials - Sales Order Use Cases",
        "excerpt":"This section includes the following sample use cases for managing sales order transactions: A sales order is a transaction that records a commitment to sell items or services to a customer. Sales orders have no accounting impact until items ship or services are completed. For more information on NetSuite sales...","categories": null,
        "tags": ["open-source","beginner"],
        "url": "/tutorials/suitetalk-rest-tutorials/sales-order-use-cases/",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","categories": null,
        "tags": null,
        "url": "/assets/js/lunr/lunr-en.js",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","categories": null,
        "tags": null,
        "url": "/assets/js/lunr/lunr-gr.js",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"var store = [ { \"title\": , \"excerpt\": {{ doc.content | newlinetobr | replace:\" \", \" \" | replace:\" \", \" \" | replace:\" \", \" \" | replace:\" \", \" \" | replace:\" \", \" \" | replace:\" \", \" \" | replace:\" \", \" \" | replace:\" \",...","categories": null,
        "tags": null,
        "url": "/assets/js/lunr/lunr-store.js",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"@charset \"utf-8\"; $asset-url: \"/assets\"; @import \"minimal-mistakes/skins/\"; // skin @import \"minimal-mistakes\"; // main partials ","categories": null,
        "tags": null,
        "url": "/assets/css/main.css",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"         Jekyll                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ","categories": null,
        "tags": null,
        "url": "/main.xml",
        "teaser": ""
      },{
        "title": "Projects",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/pages",
        "teaser": ""
      },{
        "title": "Sample Page",
        "excerpt":"= Sample Page :url-asciidoctor: http://asciidoctor.org  This is a sample page composed in AsciiDoc. Jekyll converts it to HTML using {url-asciidoctor}[Asciidoctor].  [source,ruby] puts \"Hello, World!\" ","categories": null,
        "tags": null,
        "url": "/sample/",
        "teaser": ""
      },{
        "title": "Migrating N/Query Syntax to SuiteQL in SuiteScript",
        "excerpt":"Introduction This document demonstrates the process of converting an existing SuiteScript query to SuiteQL. Disclaimer The step-by-step procedures indicated and screenshots in this document are taken from NetSuite release 2021.1. The recommendations in this document are from the best practices gathered by the SDN Solutions Engineering team. The processes, screenshots,...","categories": ["opensource"],
        "tags": ["open-source","beginner"],
        "url": "/tutorials/sdn-tutorials/suiteql",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"{}","categories": null,
        "tags": null,
        "url": "/redirects.json",
        "teaser": ""
      },{
        "title": "always-free",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/always-free",
        "teaser": ""
      },{
        "title": "apache",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/apache",
        "teaser": ""
      },{
        "title": "apex",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/apex",
        "teaser": ""
      },{
        "title": "get-started",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/get-started",
        "teaser": ""
      },{
        "title": "hardware",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/hardware",
        "teaser": ""
      },{
        "title": "iac",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/iac",
        "teaser": ""
      },{
        "title": "iot",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/iot",
        "teaser": ""
      },{
        "title": "jupyter",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/jupyter",
        "teaser": ""
      },{
        "title": "machine-learning",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/machine-learning",
        "teaser": ""
      },{
        "title": "oci",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/oci",
        "teaser": ""
      },{
        "title": "oke",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/oke",
        "teaser": ""
      },{
        "title": "open-source",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/open-source",
        "teaser": ""
      },{
        "title": "orm",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/orm",
        "teaser": ""
      },{
        "title": "pytorch",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/pytorch",
        "teaser": ""
      },{
        "title": "rpi",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/rpi",
        "teaser": ""
      },{
        "title": "serverless",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/serverless",
        "teaser": ""
      },{
        "title": "streaming",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/streaming",
        "teaser": ""
      },{
        "title": "ubuntu",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/ubuntu",
        "teaser": ""
      },{
        "title": "data-visualization",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/data-visualization",
        "teaser": ""
      },{
        "title": "analytics",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/analytics",
        "teaser": ""
      },{
        "title": "architect",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/architect",
        "teaser": ""
      },{
        "title": "arvr",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/arvr",
        "teaser": ""
      },{
        "title": "back-end",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/back-end",
        "teaser": ""
      },{
        "title": "community",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/community",
        "teaser": ""
      },{
        "title": "data-management",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/data-management",
        "teaser": ""
      },{
        "title": "data-science",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/data-science",
        "teaser": ""
      },{
        "title": "dbre",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/dbre",
        "teaser": ""
      },{
        "title": "devops",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/devops",
        "teaser": ""
      },{
        "title": "front-end",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/front-end",
        "teaser": ""
      },{
        "title": "full-stack",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/full-stack",
        "teaser": ""
      },{
        "title": "game-dev",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/game-dev",
        "teaser": ""
      },{
        "title": "robotics",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/robotics",
        "teaser": ""
      },{
        "title": "go",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/go",
        "teaser": ""
      },{
        "title": "java",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/java",
        "teaser": ""
      },{
        "title": "javascript",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/javascript",
        "teaser": ""
      },{
        "title": "mysql",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/mysql",
        "teaser": ""
      },{
        "title": "php",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/php",
        "teaser": ""
      },{
        "title": "python",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/python",
        "teaser": ""
      },{
        "title": "ruby",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/ruby",
        "teaser": ""
      },{
        "title": "terraform",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/terraform",
        "teaser": ""
      },{
        "title": "typescript",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/typescript",
        "teaser": ""
      },{
        "title": "express",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/express",
        "teaser": ""
      },{
        "title": "flask",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/flask",
        "teaser": ""
      },{
        "title": "kubernetes",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/kubernetes",
        "teaser": ""
      },{
        "title": "micronaut",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/micronaut",
        "teaser": ""
      },{
        "title": "nodejs",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/nodejs",
        "teaser": ""
      },{
        "title": "spark",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/spark",
        "teaser": ""
      },{
        "title": "spring",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/spring",
        "teaser": ""
      },{
        "title": "tensorflow",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/tensorflow",
        "teaser": ""
      },{
        "title": "ansible",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/ansible",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"                ","categories": null,
        "tags": null,
        "url": "/sitemap.xml",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"Sitemap:  ","categories": null,
        "tags": null,
        "url": "/robots.txt",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"Jekyll","categories": null,
        "tags": null,
        "url": "/tutorials.xml",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"Jekyll","categories": null,
        "tags": null,
        "url": "/feed.xml",
        "teaser": ""
      },{
        "title": "Oracle NetSuite Tutorials",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/index.html",
        "teaser": ""
      }]
