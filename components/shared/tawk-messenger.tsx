'use client';
import Script from 'next/script';


export default function TawkMessenger() {
    return (
        <Script
            id="tawk-script"
            strategy="lazyOnload"
            src="https://embed.tawk.to/68fe139f381cce1952b1fed9/1j8g7p9th"
            onLoad={() => {
                // Initialize Tawk_API callbacks if needed
                if (window.Tawk_API) {
                    window.Tawk_API.onLoad = function () {
                        window.Tawk_API?.hideWidget();
                    };
                    window.Tawk_API.onChatMinimized = function () {
                        window.Tawk_API?.hideWidget();
                    };
                    window.Tawk_API.onChatEnded = function () {
                        window.Tawk_API?.hideWidget();
                    };
                }
            }}
        />
    );
}
