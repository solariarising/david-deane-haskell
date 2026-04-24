import { useCallback, useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { trackCtaClick, trackPopupEvent } from "@/lib/analytics";
import { EXTERNAL_LINKS } from "@/siteConfig";

const POPUP_SESSION_KEY = "freeStoriesPopupShownThisSession";
const POPUP_SIGNUP_KEY = "freeStoriesSignedUp";
const TRIGGER_DELAY_MS = 27777;
const POPUP_ID = "free_fiction_vault_popup";
const POPUP_LOCATION = "global_popup";

const FreeFictionPopup = () => {
  const [open, setOpen] = useState(false);
  const popupShownRef = useRef(false);
  const popupDismissedRef = useRef(false);
  const popupSignupRef = useRef(false);

  const recordDismissal = useCallback(() => {
    if (!popupShownRef.current || popupDismissedRef.current || popupSignupRef.current) {
      return;
    }

    popupDismissedRef.current = true;
    trackPopupEvent({
      popupId: POPUP_ID,
      popupLocation: POPUP_LOCATION,
      action: "dismissed",
      destinationUrl: EXTERNAL_LINKS.freeFiction,
    });
  }, []);

  const handleSignupClick = useCallback(() => {
    popupSignupRef.current = true;
    trackPopupEvent({
      popupId: POPUP_ID,
      popupLocation: POPUP_LOCATION,
      action: "signup_click",
      destinationUrl: EXTERNAL_LINKS.freeFiction,
    });
    trackCtaClick({
      ctaId: "popup_get_free_stories",
      ctaLabel: "GET FREE STORIES",
      ctaLocation: POPUP_LOCATION,
      destinationUrl: EXTERNAL_LINKS.freeFiction,
      destinationKind: "external",
    });
    setOpen(false);
    localStorage.setItem(POPUP_SIGNUP_KEY, "true");
  }, []);

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (!nextOpen && open) {
        recordDismissal();
      }

      setOpen(nextOpen);
    },
    [open, recordDismissal],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(POPUP_SESSION_KEY)) return;
    if (localStorage.getItem(POPUP_SIGNUP_KEY)) return;
    const timer = setTimeout(() => {
      setOpen(true);
      popupShownRef.current = true;
      sessionStorage.setItem(POPUP_SESSION_KEY, "true");
      trackPopupEvent({
        popupId: POPUP_ID,
        popupLocation: POPUP_LOCATION,
        action: "shown",
        destinationUrl: EXTERNAL_LINKS.freeFiction,
      });
    }, TRIGGER_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md text-center space-y-6" style={{ background: "hsl(220 25% 10%)", borderColor: "hsl(195 60% 25%)" }}>
        <DialogTitle className="sr-only">Free Fiction Vault signup prompt</DialogTitle>
        <div className="space-y-4 pt-4">
          <p className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: "hsl(195 85% 50%)" }}>
            Free Fiction Vault
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: "hsl(200 30% 90%)" }}>
            Two free reads are waiting.
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "hsl(210 15% 58%)" }}>
            A standalone short story and a full-length novel, free when you join.
          </p>
        </div>
        <a
          href="https://dl.bookfunnel.com/k7osg3nq37"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
          onClick={handleSignupClick}
        >
          GET FREE STORIES
        </a>
        <button
          onClick={() => {
            recordDismissal();
            setOpen(false);
          }}
          className="text-xs transition-colors" style={{ color: "hsl(210 15% 45%)" }}
        >
          No thanks, maybe later
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default FreeFictionPopup;
