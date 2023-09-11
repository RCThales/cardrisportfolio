import Script from 'next/script';

export default function BrevoConversations() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        async
        src="https://conversations-widget.brevo.com/brevo-conversations.js"
        id="brevo-conversations-external"
      />
      <Script strategy="afterInteractive" id="brevo-conversations-inline">
        {`
        (function(d, w, c) {
            w.BrevoConversationsID = '64feab7d6d2385156e66689f';
            w[c] = w[c] || function() {
                (w[c].q = w[c].q || []).push(arguments);
            };
        })(document, window, 'BrevoConversations');
        `}
      </Script>
    </>
  );
}
