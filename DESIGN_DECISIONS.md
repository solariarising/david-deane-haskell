# DESIGN DECISIONS

## Foundation

- Kept the existing technical foundation intact.
- Did not weaken prerender, static output, or metadata hardening.
- Did not introduce new architecture or a content system overhaul.

## Visual Direction

- Kept `The Solarian Deep` as the homepage hero image.
- Strengthened the hero with copy, overlay, and CTA treatment rather than a redesign.
- Preserved the existing sci-fi / bridge / healing visual language because it already expresses the unified DDH ecosystem.

## Copy Direction

- Treated David Deane Haskell as one unified author identity across fiction and nonfiction.
- Used the framing:
  - past = healing
  - present = understanding
  - future = vision
- Avoided generic author-site language in favor of grounded, specific language around:
  - inner child work
  - mindfulness
  - trauma and truth
  - speculative fiction and science fiction vision

## Conversion Direction

- Made the homepage hero point to the strongest single starting offer:
  - `The Solarian Deep`
- Added clearer secondary navigation into the broader reading paths.
- Kept three simple entry routes visible:
  - flagship fiction
  - healing memoir
  - free fiction entry

## Editability

- Kept changes in page files and existing metadata files.
- Avoided creating reusable abstractions beyond very local view helpers.
- Chose copy-led refinement so future swaps remain easy and low risk.

## Speculative Choices Implemented Cleanly

- Framed the homepage path cards as `Past / Present / Future`.
- Used `Present` for the free-fiction reader path because it functions as the fastest live entry into David's voice and ongoing reader relationship.
- Kept this implementation lightweight so it can be reordered or relabeled later without disturbing the site structure.
