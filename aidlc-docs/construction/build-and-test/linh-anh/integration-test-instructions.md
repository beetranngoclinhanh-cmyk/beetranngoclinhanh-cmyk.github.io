# Linh Anh — Integration Test Instructions

There is one static unit and no service/database integrations. Relevant integration checks connect the root, typed data, navigation, browser actions and packaged assets.

## Automated component integration

```sh
npx vitest run src/App.test.tsx src/TalkRoute.test.tsx src/components/linh-anh/SiteHeader.test.tsx
```

Expected: section links have existing targets; the correct identity, public email, resume and evidence actions render; pending/planned states remain explicit; old talk/journal hashes do not mount the inherited site; mobile-menu selection/Escape close it and focus returns on Escape.

These tests are part of the recorded 88 passing tests; do not add their counts again to the total.

## Production asset integration

Build, then run npm run preview and open the printed URL. Activate both resume links, both project evidence links and the co-authored paper link. Confirm labelled destinations match their documents. Verify all three project/community images load. The recorded production check fetched six distinct curated file URLs and received HTTP 200 for all six.

Email actions should target mailto:beetranngoclinhanh@gmail.com; actual sending depends on the visitor’s email client and is outside the website. No message delivery is asserted.

Confirm dist contains only the current bundle, favicon and curated files, with no archive, signed research letters or inherited public identity. Stop the preview with Ctrl+C. No external service configuration or teardown is required.
