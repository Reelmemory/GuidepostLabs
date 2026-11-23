# Guidepost Labs — Release Checklist

## Before preview deployment

- [ ] Install dependencies with Node 22 and npm 10+.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Test `/`, `/products`, `/products/mintpulse`, `/products/dropcheck`, `/products/strike`, `/community` and `/studio`.
- [ ] Test the mobile navigation with keyboard and touch.
- [ ] Verify the official Discord invite from a signed-out browser.
- [ ] Check product status copy against the current owner-confirmed state.
- [ ] Confirm the brand assets render without cropping or distortion.
- [ ] Review the 404 route, page titles, descriptions, Open Graph image and sitemap.

## Before production domain cutover

- [ ] Confirm the founder controls the `guidepostlabs.xyz` domain and DNS.
- [ ] Approve all public copy and product availability statements.
- [ ] Confirm Strike access enquiries should route to the Discord invite.
- [ ] Confirm DropCheck's public launch destination when available; replace the community CTA only after verification.
- [ ] Confirm MintPulse installation/access instructions when available.
- [ ] Deploy a Vercel preview and complete desktop/mobile review.
- [ ] Confirm production branch and rollback target.
- [ ] Attach the domain and verify HTTPS, canonical URL, robots and sitemap.
- [ ] Check social share previews on the final production URL.

## Known release blockers / pending verification

1. The source repository and production deployment were not supplied in this handoff. This project is a standalone implementation, not a patch to an existing production repository.
2. The connected GitHub search surfaced `Reelmemory/GuidepostLabs`, but it is empty and the available GitHub connection has no push permission. No code was pushed.
3. Dependency installation in the authoring environment failed because the npm registry hostname could not be resolved (`EAI_AGAIN`). Type-check, lint and production build must be run in a network-enabled environment.
4. The live domain could not be inspected in this environment. Domain ownership, current DNS and existing production routes have not been verified.
5. Product application URLs and owner contacts have not been supplied. The site therefore uses the official Discord invite for access and launch-update CTAs.

## Current confirmed product states

| Product | State | What the site says |
|---|---|---|
| Strike | Completed; special access required | Completed, special access required; ask in Discord |
| DropCheck | Final development stage; public launch planned | Final development stage; public launch planned; no public app URL yet |
| MintPulse | In development | In development; no install link or release date announced |
