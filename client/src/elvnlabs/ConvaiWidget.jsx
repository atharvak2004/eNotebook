// ConvaiWidget.jsx
import { useEffect } from "react";

export default function ConvaiWidget() {
  useEffect(() => {
    // only inject if not already present
    if (!document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]')) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }

    // no need to remove the script; leaving it is fine
  }, []);

  return (
    <elevenlabs-convai agent-id="agent_4901k56ms0z4fm88fmge51nd856y"></elevenlabs-convai>
  );
}
