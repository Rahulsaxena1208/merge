const fs = require('fs');

const serverJsPath = 'c:/Users/DELL/Downloads/PHASE2/PHASE-1/server.js';
let serverJs = fs.readFileSync(serverJsPath, 'utf8');

// Remove QR Receipt Module block
serverJs = serverJs.replace(/\/\/ ═══════════════════════════════════════════════════════════════════════════════\r?\n\/\/  QR RECEIPT MODULE — Renew Flow Only[\s\S]*?\/\/  End QR Receipt Module\r?\n\/\/ ═══════════════════════════════════════════════════════════════════════════════\r?\n+/, '');

// Remove QR Receipt routes
serverJs = serverJs.replace(/[ \t]*\/\/ ── QR Receipt routes \(Renew-only, isolated\) ────────────────────────────────[\s\S]*?\/\/ ── End QR Receipt routes ────────────────────────────────────────────────────\r?\n/, '');

fs.writeFileSync(serverJsPath, serverJs);

const apiJsPath = 'c:/Users/DELL/Downloads/PHASE2/PHASE-1/public/js/api.js';
let apiJs = fs.readFileSync(apiJsPath, 'utf8');

// Remove QR Receipt api block
apiJs = apiJs.replace(/[ \t]*\/\/ ─── QR Receipt \(Renew Only\) ──────────────────────────────────────────────[\s\S]*?\/\/ ─── End QR Receipt ───────────────────────────────────────────────────────\r?\n+/, '');

fs.writeFileSync(apiJsPath, apiJs);

const stylesPath = 'c:/Users/DELL/Downloads/PHASE2/PHASE-1/public/css/renew-styles.css';
let styles = fs.readFileSync(stylesPath, 'utf8');

// Remove QR styling and layout wrapper styling
styles = styles.replace(/\/\* ══════════════════════════════════════════════════════════════\r?\n   QR RECEIPT PANEL — Renew Flow Only[\s\S]*/, '');

fs.writeFileSync(stylesPath, styles);

const htmlPath = 'c:/Users/DELL/Downloads/PHASE2/PHASE-1/public/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// Remove the QR receipt outer and the QR receipts panel
html = html.replace(/    <!-- Outer: QR panel LEFT \+ existing receipt options RIGHT -->\r?\n    <div class="renew-receipt-outer">\r?\n\r?\n      <!-- ══ QR RECEIPT PANEL \(new, Renew-only\) ══════════════════════ -->[\s\S]*?<!-- ══ END QR RECEIPT PANEL ═══════════════════════════════════ -->\r?\n/, '');

// Close the outer div cleanly by replacing the old ending
html = html.replace(/    <\/div><!-- end \.renew-receipt-outer -->\r?\n/, '');

// Remove the included scripts
html = html.replace(/[ \t]*<script src="js\/qrcode\.min\.js"><\/script>\r?\n[ \t]*<script src="js\/qr-receipt\.js"><\/script>\r?\n/, '');

fs.writeFileSync(htmlPath, html);
console.log('Successfully removed QR code functionality files.');
