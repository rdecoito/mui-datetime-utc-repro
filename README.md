# mui-datetime-utc-repro

A minimum repository to reproduce an error reported in a MUI ticket

# Running the reproduction

1. clone the repository
2. cd into the repository
3. run `npm i`
4. run `npm run dev`
5. open localhost:5173

You'll see a single MobileDateTimePicker in the center of your screen. Note that the date is expressed in UTC, per the `timezone='UTC'` prop.

Click the text box to open the popup datetime picker. Note that the time in the upper right is expressed in your local timezone rather than UTC, despite the `timezone='UTC'` prop.
