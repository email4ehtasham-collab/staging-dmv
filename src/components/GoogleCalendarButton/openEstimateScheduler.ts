const SCRIPT_SRC = "https://calendar.google.com/calendar/scheduling-button-script.js";
const OVERLAY_SELECTOR = ".hur54b";

let opening = false;

function schedulerOverlayExists(): boolean {
  return !!document.querySelector<HTMLElement>(OVERLAY_SELECTOR);
}

function ensureCalendarScript(): void {
  if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;

  const script = document.createElement("script");
  script.src = SCRIPT_SRC;
  script.async = true;
  document.body.appendChild(script);
}

export function openEstimateScheduler(): void {
  if (typeof document === "undefined") return;
  if (opening || schedulerOverlayExists()) return;

  opening = true;
  ensureCalendarScript();

  let attempts = 0;
  const tryOpen = () => {
    if (schedulerOverlayExists()) {
      opening = false;
      return;
    }

    if (clickSchedulerButton()) {
      window.setTimeout(() => {
        opening = false;
      }, 400);
      return;
    }

    attempts += 1;
    if (attempts < 30) {
      window.setTimeout(tryOpen, 200);
    } else {
      opening = false;
    }
  };

  tryOpen();
}

function clickSchedulerButton(): boolean {
  const button = document.querySelector<HTMLElement>(".qxCTlb");
  if (!button) return false;

  button.click();
  return true;
}
