Deployed to https://race-review-react-firebase.firebaseapp.com/

This is a basic react project with a firebase backend that uses firebase's no-sql datastore.

To Login:
Email: test@fake.com
PW: 123456

...Or signup with your own login that will be persisted.

After logging in you'll be taken to the main page, which has a section for all the summarized RRs and a section that notifies every logged in user when a new user joins or when a new RR is posted.

Some basic workflows after logging in would be:

Create RR
(Main Page) Click the "Create..." navbar link.

View RR
(Main Page) Click one of the existing RRs to view the details of that RR.

Update RR
(Main Page) Click one of the existing RRs that has been created by the logged in user. Scroll to the bottom of the page. Click the edit button.

Delete RR
(Main Page) Click one of the existing RRs that has been created by the logged in user. Scroll to the bottom of the page. Click the delete button. On the modal that pops up, click the Delete button.

Update Username, firstname, lastname
(Any Page) Click on the gear icon in the upper right corner of the navbar. (Settings Page) Click on the name you want to change, then either hit enter or click somewhere else on the screen or tab out to make the text form disappear.