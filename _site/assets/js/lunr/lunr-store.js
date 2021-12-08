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
        "title": null,
        "excerpt":"    Jekyll         2021-12-07T13:54:54-06:00   http://localhost:4000/excerpts.xml     Oracle Dev.O Tutorials     Cool stuff from Oracle&apos;s Developer Relations team              Oracle Developer Community       ","categories": null,
        "tags": null,
        "url": "/excerpts.xml",
        "teaser": ""
      },{
        "title": "Topics",
        "excerpt":"                 Filter:             All Tags     Collections     Personas     Languages     Frameworks     Topics                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Personas                                                                                                                                                                                                                                                                                                                                                                                                                             Languages                                                                                                                                                                                                                                                                                                                                Frameworks                                                                                                                                                                                                                                                                                                                                          Tags                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ","categories": null,
        "tags": null,
        "url": "/topics/",
        "teaser": ""
      },{
        "title": "Collections",
        "excerpt":"                        Latest tutorials                        ","categories": null,
        "tags": null,
        "url": "/collections/",
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
        "title": "Oracle Dev.O Tutorials",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/index.html",
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
      }]
