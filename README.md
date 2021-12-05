# Azure-MERN-Boilerplate
A very basic boilerplate for an Azure ready MERN app

The tutorial for deploying this boilerplate can be found here:
https://medium.com/@tuna.sogut/how-to-deploy-a-mern-stack-app-to-azure-via-continuous-integration-a3a551526e26?sk=0fc4fa9d7c7072ad7e95b94d7e5733e4

I added an environment variable to hide the database uri using the "dotenv dependency".
The environment variable, which contains connection to the MongoDB database was not deployed to GitHub because it was added in the .gitignore file.

To add the details of the environment variable to your web application on Azure app service, navigate to your web app. On the left pane, navigate to configuration, application settings, then "New Applications setting":

![image](https://user-images.githubusercontent.com/45227826/144764024-a9a87463-dd20-40e0-ac0f-184a2f4cbcd0.png)

After that, add the following in the field:

![image](https://user-images.githubusercontent.com/45227826/144764132-018b924d-edbb-4160-b8cc-defa5b1c15a7.png)

The value should be your mongodb uri.

When done, click "save".

Lastly, for this tutorial to work on Azure app service (windows environment), a "web.config" file also needs to be added to your scm site (inside /site/wwwroot)

I will add it as a text here (.txt format). However, make sure to name it "web.config" in your scm site in /site/wwwroot.
