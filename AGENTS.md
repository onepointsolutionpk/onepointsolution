<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep company facts, offices, services, editorial summaries, and media mappings centralized in `src/lib/site-data.ts` so every public route stays consistent.
- Use reusable shared site chrome and content components while keeping each route's SEO metadata and page composition explicit.
- Quotation requests remain browser-only WhatsApp message preparation; do not add persistence or imply delivery unless the owner changes the workflow.
- Source homepage carousel slides and separate client/brand logo lists from centralized media mappings; keep manufacturer logos out of client sections and show image controls only for genuinely scrollable hero media.
- Use the shared Embla logo carousel with autoplay without visible navigation or play/pause controls, focus/hover pausing and reduced-motion handling so both logo sections behave consistently.
- Use one shared, content-sized navigation with explicit submenu state across breakpoints; document dismissal and focus-leave handling keep click, keyboard, and touch behaviour consistent.
- Animate company statistics once upon viewport entry, retaining final values for reduced motion and server rendering so claims remain readable without animation.

- Public pages consume centralized absolute HTTPS original-media URLs, while asset pointers remain upload records only; this keeps external-host deployments independent of same-origin asset routing.
- Share service cards, project galleries and quotation sections across public pages; centralized service detail and project records keep presentation and editorial information consistent without inventing media.
