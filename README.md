_disclaimer: The following sample application is an open-source project shared by the app creator and meant for demonstration purposes **only**, not for production code use. Please use this sample application for inspiration, exploration, and experimentation at your own risk and enjoyment. You may reach out to the app creator and broader Zoom Developer community on https://devforum.zoom.us/ for technical discussion and assistance, but understand there is no service level agreement support for this application._

## Zoom VideoSDK Web - Getting Started Sample

### Prerequisites

For this application to function correctly, make sure you have the following items:

- [Node v18.12.0 (LTS)](https://nodejs.org/en/blog/release/v18.12.0)
- [VideoSDK developer account](https://developers.zoom.us/docs/video-sdk/developer-accounts/)

To run this application locally:

- Clone this repository

- Rename the environment file
  - `mv .env-example .env`


- Log into your [VideoSDK developer account](https://developers.zoom.us/docs/video-sdk/developer-accounts/), and go to the [application dashboard](https://marketplace.zoom.us/)
  - Add `ZOOM_SDK_KEY` value to `.env`
  - Add `ZOOM_SDK_SECRET` value to `.env`
- `npm install`
- `npm run dev`

This will start an Express server and serve a demo application.
