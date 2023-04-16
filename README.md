React Test

Description:

Your task is to create a client application based on the API of the Art Institute of Chicago
(https://api.artic.edu/docs/#introduction). The app consists of 3 pages:
-Artwork list
-Artwork details
-Favorite artworks

You will find the corresponding endpoints in the documentation to load data for the first 2 pages. The
favorite functionality on the other hand should be handled locally in the browser.

The “Artwork list” is a paginated list page containing 25 items per page by default. Each item is an
artwork with an image and a title. There should be controls for loading other pages, a selector to change
items per page, and a plain text search bar to load items based on the search criteria. There should be
a favorite button on every item.

The “Artwork details” page contains detailed information about a single item. You should display the
image, title, information about the author and the department. This page also contains a favorite
button.

The “Favorite artworks” page lists all of your favorite artworks. There should be a button to remove an
item from this list.

Technology Requirements:

Use react, redux and either redux-thunk or redux-saga to build the app. You can use other libraries as
well to help your work. TypeScript and Docker usage is recommended but not mandatory.
Suggestions

There are no limitations or requirements about the look and feel of the app, but good UX is appreciated.
You can use any CSS frameworks or component libraries to achieve this.
Spamming the API might lead to rate limiting or IP blocking. Mind your queries, especially when
searching.
