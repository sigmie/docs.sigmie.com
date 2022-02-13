(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{453:function(e,t,a){"use strict";a.r(t);var r=a(56),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[e._v("#")]),e._v(" Application")]),e._v(" "),a("p",[e._v("Sigmie application is focused to help developers using Elasticsearch as search engine.")]),e._v(" "),a("p",[e._v("When it comes to using Elasticsearch as a search engine most of us are facing a lot of common problems. Beginning with the infrastructure, security, and data synchronization, until the relevance of the search results.")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#common-problems"}},[e._v("Common problems")]),a("ul",[a("li",[a("a",{attrs:{href:"#security"}},[e._v("Security")])]),a("li",[a("a",{attrs:{href:"#searching"}},[e._v("Searching")])])])]),a("li",[a("a",{attrs:{href:"#solution"}},[e._v("Solution")]),a("ul",[a("li",[a("a",{attrs:{href:"#creation"}},[e._v("Creation")])])])]),a("li",[a("a",{attrs:{href:"#usage"}},[e._v("Usage")])]),a("li",[a("a",{attrs:{href:"#admin-token"}},[e._v("Admin Token")])]),a("li",[a("a",{attrs:{href:"#search-only-token"}},[e._v("Search-Only Token")])]),a("li",[a("a",{attrs:{href:"#bug-reports"}},[e._v("Bug Reports")])]),a("li",[a("a",{attrs:{href:"#security-vulnerabilities"}},[e._v("Security Vulnerabilities")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"common-problems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-problems"}},[e._v("#")]),e._v(" Common problems")]),e._v(" "),a("p",[e._v("Despite the fact Elasticsearch is free to use, it can become challenging to configure everything correctly. And that's exactly where our app can help you.")]),e._v(" "),a("h3",{attrs:{id:"security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Since Elasticsearch has no build in authentication one of the first\nthings that somebody installing Elasticsearch has to take care of\nauthentication. One common used method is using\n"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Basic_access_authentication",target:"_blank",rel:"noopener noreferrer"}},[e._v("basic authentication"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Also good practice is to hide your server's public ip\naddress to the world in order to avoid any malicious attempts.")])])]),e._v(" "),a("h3",{attrs:{id:"searching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#searching"}},[e._v("#")]),e._v(" Searching")]),e._v(" "),a("p",[e._v("When using search-as-a-service provider you can comfortably send your\nuser's input directly from your frontend to your search. With\nElasticsearch you will need a controller in your application's\nbackend to validate the request data.")]),e._v(" "),a("h2",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),a("p",[e._v("The application's goal is to take over the pain of dealing with the above problems.")]),e._v(" "),a("h3",{attrs:{id:"creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creation"}},[e._v("#")]),e._v(" Creation")]),e._v(" "),a("p",[e._v("In less than 10 minutes you can have a secure and reliable Elasticsearch cluster. After you have\nbeen registered and you have created a project.")]),e._v(" "),a("p",[e._v("You will choose the:")]),e._v(" "),a("ul",[a("li",[e._v("Desired amount of nodes")]),e._v(" "),a("li",[e._v("Cluster's location")])]),e._v(" "),a("p",[e._v("And we take care of:")]),e._v(" "),a("ul",[a("li",[e._v("Creating the Elasticsearch nodes")]),e._v(" "),a("li",[e._v("Putting a Loadbalancer in front of them")]),e._v(" "),a("li",[e._v("Configuring basic authentication")]),e._v(" "),a("li",[e._v("Hiding your Clusters public IP address")])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("When your Cluster is up and running you can make use of the following access tokens.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#admin-token"}},[e._v("Admin Token")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#search-only-token"}},[e._v("Search-Only Token")])])]),e._v(" "),a("h2",{attrs:{id:"admin-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-token"}},[e._v("#")]),e._v(" Admin Token")]),e._v(" "),a("p",[e._v("You can make any request that you would normally send to your Elasticsearch by using the "),a("strong",[e._v("Admin Token")]),e._v(". You will have set the "),a("code",[e._v("Bearer")]),e._v(" token in your requests "),a("code",[e._v("Authorization")]),e._v(" header and use our "),a("a",{attrs:{href:"/app/proxy"}},[e._v("proxy")]),e._v(" URL address.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),a("p",[e._v("Keep in mind that there is monthly proxy request limit. It's preferred to use proxy requests for your search operations and not for data indexing.")])]),e._v(" "),a("h2",{attrs:{id:"search-only-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-only-token"}},[e._v("#")]),e._v(" Search-Only Token")]),e._v(" "),a("p",[e._v("Same like with the "),a("a",{attrs:{href:"#admin-token"}},[e._v("Admin Token")]),e._v(" you will have a search token available. Difference is that\nwith this token you will be allowed to make only search operation.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),a("p",[e._v("The purpose of this token is to allow you to query Elasticsearch directly from your frontend. Saving you the backend work.")])]),e._v(" "),a("h2",{attrs:{id:"bug-reports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-reports"}},[e._v("#")]),e._v(" Bug Reports")]),e._v(" "),a("p",[e._v("If you discover a bug in Sigmie application, please open an issue on the "),a("a",{attrs:{href:"https://github.com/sigmie/app-issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sigmie Application issues GitHub repository"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"security-vulnerabilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-vulnerabilities"}},[e._v("#")]),e._v(" Security Vulnerabilities")]),e._v(" "),a("p",[e._v("If you discover a security vulnerability within the application, please send an email to security@sigmie.com. All security vulnerabilities will be promptly addressed.")])])}),[],!1,null,null,null);t.default=i.exports}}]);