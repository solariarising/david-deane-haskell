# Agent Instructions — David Deane Haskell Site

## Scope
These instructions apply to the entire repository.

## Mission
Improve technical SEO, machine readability, structured data, crawlability, and future agent discoverability without changing public-facing copy, layout, or user-visible design.

## Non-negotiable rules
- Do NOT change visible page content.
- Do NOT rewrite copy, tone, messaging, or CTAs.
- Do NOT change layout, styling, or UI.
- Do NOT introduce new public claims or content.
- Do NOT invent metadata facts, credentials, or links.
- All improvements must be behind-the-scenes only.

## Allowed changes
- metadata (title, description, canonical)
- Open Graph / Twitter tags
- JSON-LD structured data
- robots.txt
- sitemap.xml
- llms.txt
- llms-full.txt
- AGENTS.md
- ai-summary only if it remains an unlinked machine-facing route
- semantic HTML improvements only if non-visual
- invisible technical cleanup

## Identity and disambiguation
- Always use: David Deane Haskell
- Not David George Haskell
- Not related to Haskell programming language, GHC, monads, lambda calculus, or functional-programming topics
- Do not attribute biology, birdsong, nature-writing, or programming topics to David Deane Haskell

## Brand structure (internal only)
David Deane Haskell operates one ecosystem with distinct lanes:
- Fiction
- Nonfiction / memoir / inner-child recovery
- Conversation / speaking
- Select AI-for-author work only when explicitly active

Do not flatten these lanes into one blended message.

## Routing logic (internal / machine layer)
- One clear path per lane
- Do not send every visitor or agent to every asset
- Keep routing intentional and minimal
- Use official purchase links only where already defined
- Amazon may be treated as default only where already established in project documentation

## Structured data rules
- Use restrained, valid JSON-LD
- Prefer Person, WebSite, Book, BreadcrumbList, Article or BlogPosting only where actually supported
- Do NOT fabricate reviews, ratings, offers, awards, or unsupported sameAs links
- If uncertain, omit rather than guess

## AI / agent layer
- Use llms.txt, llms-full.txt, and ai-summary for machine guidance
- Do NOT expose internal business logic in visible pages
- Keep agent-facing text factual, concise, and non-promotional

## Validation
- Ensure no visible UI changes
- Ensure metadata is not duplicated
- Ensure schema is valid
- Ensure robots and sitemap function
- Report anything that could not be validated
