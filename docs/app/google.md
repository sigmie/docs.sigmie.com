# Google Cloud

## Service Account
In order to authorize Sigmie Application to create Google Cloud Resources on your behalf,
you will need to generate a service account json file.

1. Navigate to [New Project](https://console.cloud.google.com/projectcreate) on your Google Cloud Console and create a project with a liked billing account.

::: warning Active billing account
Be sure that you have an **active** Billing Account linked. Otherwise you won't be able to create any resources.
:::

2. When your project is ready, visit the [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts) page and click on **+ Create service account**.

3. On the **Service account permissions** page, select the **Compute Admin** role.

4. Once you are done creating your Service Account, your will be navigated to the table overview of your Service Accounts. Right under the table's "actions"
column click on the the three dots, and select "Create key" in the dropdown menu.

5. Select the recommended **JSON** key type and click "Create".

6. Next copy the JSON file contents in the **Google Service Account** in the Project creation page.

::: tip Service account permissions
Since Sigmie manages many resources across Compute Engine, it's recommended to give the **Compute Admin** role to your service account.
If your don't wish to give too many permissions, can always pick the corresponding roles according to the [Resources section](#resources).
:::

## Resources
When you create an Elasticsearch cluster using Sigmie on Google Cloud, the following resources will be created in your Google Cloud Project:
* VPC Network
* Subnet in your desired region
* Firewalls allowing internal connections for the following ports:
    * 9200
    * 9300
* Firewalls for the following external ports:
    * 443
    * 22
* Reserved external ip addresses for each requested node
* A VM Instance for each request node