// ConvaiWidget.jsx
import { useEffect } from "react";

export default function ConvaiWidget() {
  useEffect(() => {
    // inject script only if it’s not already present
    if (
      !document.querySelector(
        'script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <elevenlabs-convai agent-id="agent_4901k56ms0z4fm88fmge51nd856y"></elevenlabs-convai>
    </>
  );
}
