# Azure-MERN-Boilerplate
A very basic boilerplate for an Azure ready MERN app

The tutorial for deploying this boilerplate can be found here:
https://medium.com/@tuna.sogut/how-to-deploy-a-mern-stack-app-to-azure-via-continuous-integration-a3a551526e26?sk=0fc4fa9d7c7072ad7e95b94d7e5733e4

I added an environment variable to hide the database name using the "dotenv dependency".
After deploying to Azure app service, kindly navigate to the scm site of your application on Azure (-your-web-app name-.scm.azurewebsites.net/DebugConsole), then add a ".env" file using the command: "type nul > .env".
  
This should create an empty .env file.

![image](https://user-images.githubusercontent.com/45227826/144761159-8e23896e-228f-4ded-bff3-923441d88579.png)

Click on the pencil-like symbol (the icon on the middle), then add the following: (MONGODB_URI=your-database-url), and save.  

For this tutorial to work on Azure app service (windows environment), a "web.config" file needs to be added to your scm site also (inside /site/wwwroot)

I will add it as a text here (.txt format). However, make sure to name it "web.config" in your scm site in /site/wwwroot.
