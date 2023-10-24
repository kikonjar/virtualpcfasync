
# Project Title

Sample about how to consume async services (like Dynamics 365 Web API) in Virtual PCF


## The problem
While working on the [virtual PCF control](https://powerapps.microsoft.com/en-us/blog/virtual-code-components-for-power-apps-using-react-and-fluent-ui-react-platform-libraries/) we noticed that the updateView() in the virtual PCF works in a different manner as compared to standard PCF control with async functions. In standard PCF control, the return type of the updateView() is void while in the virtual PCF the return type is react-element. So when we return the promise to the updateView() by calling the callback function in a virtual PCF control, we do not get the desired result.



## Demo

In this sample I use an external free API instead Dynamics 365 Web API just for clarification.
The solution will work with any async service.

The array response from external asyn service it's used to load options in a dropdown FluentUI control.