# Google Contacts Tab
Unofficial Google Contacts add-on for Thunderbird, it adds a button that opens a Google Contacts tab in Thunderbird.
The [home page](https://addons.mozilla.org/thunderbird/addon/thundercontacts/) of the extension contains some pictures and reviews.

#### Installing 
A new Google Contacts icon should appear in the top-right corner of Thunderbird. Click to open.

#### Installing from sources
Download the repository, zip it, rename it to Google-Contacts-Tab.xpi and choose install addon from file in Thunderbird.

In linux the xpi file can be created with the following commands
* `git clone https://github.com/feranick/Thunderbird-Google-Contacts-Tab`
* `cd ./Thunderbird-Google-Contacts-Tab`
* `VERSION=$(cat ./manifest.json | jq --raw-output '.version')`
* `zip -r "../Google-Contacts-Tab-${VERSION}-tb.xpi" *`
