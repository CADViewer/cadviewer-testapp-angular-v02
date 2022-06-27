# Cadviewer Sample for Angular 13 and TypeScript

## CADViewer for Frameworks (ReactJS, VueJS, Angular etc.) 

**1)** Install CADViewer with ***npm i cadviewer*** on all framework platforms. See specifics below for each platform on how to add auxillary files and connect with the back-end CAD conversion server.

**2)** In your ***src*** or ***public*** folder create the ***[assets/cadviewer](https://cadviewer.com/downloads/cadviewer/assets/assets_cadviewer.zip)*** folder and add the following ***[CADViewer assets](https://cadviewer.com/downloads/cadviewer/assets/assets_cadviewer.zip)*** .

**3** In your project, if you are using typescript eiter install or add the types: ***[cadviewer.d.ts](https://cadviewer.com/downloads/cadviewer/assets/cadviewer.d.ts)*** .


***Note 1:*** For any installation issues, please refer to CADViewer [FAQ](https://cadviewer.com/cadviewertechdocs/faq)


***Note 2:*** For plain-vanilla JavaScript top-level library, please use our [GitHub](https://github.com/CADViewer/cadviewer-script-library) repository [cadviewer-script-library](https://github.com/CADViewer/cadviewer-script-library).


***Note 3:*** Always install the back-end [cadviewer-conversion-server](https://github.com/CADViewer/cadviewer-conversion-server) for CAD conversion, Redlines and Space Object management.


## Install Instruction for Angular

1: Install CADViewer as above.

To see how a CAD Canvas is set up with callback methods and initialization of CADViewer use the following samples as a template:

2: Download a CADViewer [Angular](https://github.com/CADViewer/cadviewer-testapp-angular-v01) implementation sample from [Github](https://github.com/CADViewer/cadviewer-testapp-angular-v01) repository [cadviewer-testapp-angular-v01](https://github.com/CADViewer/cadviewer-testapp-angular-v01).


For both methods 1: and 2: , then do the following:

Download the Node JS CAD Conversion server (or alternatively the PHP, .NET or Servlet Server implementations):  Go to:  https://cadviewer.com/download/, register and receive email and then download from **CADViewer Handler/Connector Scripts**.

The [CADViewer](https://github.com/CADViewer/cadviewer-conversion-server) NodeJS CAD Conversion Server can be downloaded from [Github](https://github.com/CADViewer/cadviewer-conversion-server) from the repository [cadviewer-conversion-server](https://github.com/CADViewer/cadviewer-conversion-server).

Download the CAD Converter AutoXchange 2023:  Go to: https://cadviewer.com/download/, register and receive email and then download from **AutoXchange 2023 Downloads**.

Use the Github [cadviewer-testapp-angular-v01](https://github.com/CADViewer/cadviewer-testapp-angular-v01) as reference sample. This sample illustrates initialization and loading of CADViewer as well as illustrates the functional interface for highlight and adding interactive image content to the CAD canvas. 

Note that the path book-keeping is important for proper initialization, where the ServerBackEndUrl and ServerLocation is the location and Url of the CAD Server and ServerUrl is the Url of the Angular application encapulating CADViewer. 


		var ServerBackEndUrl = "http://localhost:3000/";
		var ServerUrl = "http://localhost:4200/";
		var ServerLocation = "";  // leave blank, for devopment purposes can be set: c:/nodejs/cadviewer-conversion-server/

The CADViewer Angular JS general install instructions are at: https://cadviewer.com/cadviewertechdocs/handlers/angular/

**LICENSE: TMS 1.0:** Use freely on localhost. Commercial use requires licensing, both using entirely or in parts. Forbidden to remove license key check.  Contact Tailor Made Software, https://cadviewer.com/contact, for more information. 

Use the [CADViewer API](https://cadviewer.com/cadviewerproapi/global.html) to open and manipulate drawings in your application. 

Read the Guide on how to **[create hotspots](https://cadviewer.com/highlight/main/)** (Space Objects), it outlines how spaces can be processed on a drawing to create interactive objects. 

Read the Guide on how to **[modify hotspots](https://cadviewer.com/highlight2/main/)**  (Space Objects), this will help you work with the code in this sample. 

Read the general documentation on **CADViewer** is found at: https://cadviewer.com/cadviewertechdocs/.

The general documentation on **AutoXchange 2023** is found at: https://tailormade.com/ax2020techdocs/.

The CADViewer API is found at: https://cadviewer.com/cadviewerproapi/global.html.




















This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
