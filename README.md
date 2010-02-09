
DeepaMehta 3 Icons Plugin
=========================

The DM3 Icons plugin adds an iconpicker widget to DeepaMehta 3.

Note: this plugin is a required install when using the *DM3 Type Editor* plugin (<http://github.com/jri/dm3-typeeditor>).
For the moment the *DM3 Icons* plugin provides no benefit except for the DM3 Type Editor.


Requirements
------------

* A DeepaMehta 3 installation  
  <http://github.com/jri/deepamehta3>


Installation
------------

1.  Go to your DeepaMehta 3 installation directory:
        cd deepamehta3

2.  Download the DM3 Icons plugin:
        couchapp vendor install git://github.com/jri/dm3-icons.git

3.  Activate the plugin by adding one line to DeepaMehta's `_attachments/javascript/plugins.js`:
        add_plugin("vendor/dm3-icons/script/dm3_icons.js")

4.  Copy additional stuff:
        cp -r vendor/dm3-icons/views/dm3-icons views

5.  Upload changes to CouchDB:
        couchapp push http://localhost:5984/deepamehta3-db

6.  Check if installation is successful: visit DeepaMehta 3 in your webbrowser (resp. press reload):  
    <http://localhost:5984/deepamehta3-db/_design/deepamehta3/index.html>  
    If you see the *Icon* entry in the *Create* menu (upper right corner) everything is OK.


Usage Hints
-----------

* Create a new icon by choosing *Icon* from the Create menu and click the *Create* button. An icon topic will be appear on the canvas. Attach an image file to the icon topic (like to any other topic).

* Assign an icon to a topic type by selecting the topic type and clicking the link next to the *Icon* field. An iconpicker widget will appear. Choose an icon by clicking it.


Issues
------

* The image file is not scaled automatically. Scaling must be done by the user before the file is attached. The size of a typical DeepaMehta 3 icon is about 40 pixel.


------------
Jörg Richter  
Feb 9, 2010
