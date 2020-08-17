# Google Cloud

## Service Account
In order to authorize Sigmie Application to create Google Cloud Resources on your behalf,
you will need to generate a service account json file.

1. Navigate to [New Project](https://console.cloud.google.com/projectcreate) on your Google Cloud Console and create a project with a liked billing account.

::: warning Warning
Be sure that you have an **active** Billing Account linked. Otherwise you won't be able to create any resources.
:::

###

## Resources
When you create an Elasticsearch cluster using Sigmie on Google Cloud, the following resources will be created in your Google Cloud Project:
* VPC Network
* Subnet in your desired region
* Reserved external IP address
* Firewalls allowing internal connections for the following ports:
    * 9200
    * 9300
* Firewalls for the following external ports:
    * 443
* Loadbalancer VM
* Desired VM nodes across different zones