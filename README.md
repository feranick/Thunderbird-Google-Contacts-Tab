# Google Contacts Tab
Unofficial Google Contacts add-on for Thunderbird, it adds a button in Spaces that opens a Google Contacts tab in Thunderbird.
The [home page](https://addons.thunderbird.net/en-US/thunderbird/addon/google-contacts-spaces-tab/) of the extension contains the latest code.

#### Installing 
A new Google Contacts icon should appear in the Spaces Toolbar of Thunderbird. Click to open.

#### Installing from sources
Download the repository, zip it, rename it to Google-Contacts-Tab.xpi and choose install addon from file in Thunderbird.

In linux the xpi file can be created with the following commands
* `git clone https://github.com/feranick/Thunderbird-Google-Contacts-Tab`
* `cd ./Thunderbird-Google-Contacts-Tab`
* `VERSION=$(cat ./manifest.json | jq --raw-output '.version')`
* `zip -r "../Google-Contacts-Tab-${VERSION}-tb.xpi" *`
