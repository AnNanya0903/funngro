/* Generates a branded 1200x628 PNG for Open Graph (built-in node modules only). */
const { deflateSync } = require("zlib");
const { writeFileSync } = require("fs");
const { join } = require("path");

const W = 1200;
const H = 628;

// Palette
const navy = [11, 26, 43]; // #0b1a2b
const green = [46, 204, 113]; // #2ecc71
const panel = [14, 32, 54]; // #0e2036 slightly lighter

// RGBA-aware: we use color type 2 (RGB, no alpha)
function px(r, g, b) {
  return [r & 255, g & 255, b & 255];
}

// Build raw image data: each scanline is a filter byte (0) + W*3 bytes.
const rows = [];
for (let y = 0; y < H; y++) {
  const scanline = [0];
  for (let x = 0; x < W; x++) {
    // default navy
    let c = navy;
    // green rounded panel on the right
    const inPanel =
      x >= 780 && x <= 1140 && y >= 170 && y <= 460 &&
      !(roundedBoxExclude(x, y, 780, 170, 1140, 460, 28));
    if (inPanel) c = panel;
    // green circle (brand accent)
    const cx = 320, cy = 320, cr = 110;
    const dx = x - cx, dy = y - cy;
    if (dx * dx + dy * dy <= cr * cr) c = green;
    // smaller green dot
    const cx2 = 320, cy2 = 320;
    const dx2 = x - cx2 - 0, dy2 = y - cy2 + 0;
    scanline.push(...c);
  }
  rows.push(Buffer.from(scanline));
}

function roundedBoxExclude(px, py, x0, y0, x1, y1, r) {
  // returns true if point is in the rounded corner area (to be excluded)
  let inCorner = false;
  if (px < x0 + r && py < y0 + r) {
    const ddx = px - (x0 + r), ddy = py - (y0 + r);
    if (ddx * ddx + ddy * ddy > r * r) inCorner = true;
  } else if (px > x1 - r && py < y0 + r) {
    const ddx = px - (x1 - r), ddy = py - (y0 + r);
    if (ddx * ddx + ddy * ddy > r * r) inCorner = true;
  } else if (px < x0 + r && py > y1 - r) {
    const ddx = px - (x0 + r), ddy = py - (y1 - r);
    if (ddx * ddx + ddy * ddy > r * r) inCorner = true;
  } else if (px > x1 - r && py > y1 - r) {
    const ddx = px - (x1 - r), ddy = py - (y1 - r);
    if (ddx * ddx + ddy * ddy > r * r) inCorner = true;
  }
  return inCorner;
}

const data = Buffer.concat(rows);
const compressed = deflateSync(data);

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const buf = Buffer.concat([len, typeBuf, data]);
  const crcv = crc32(Buffer.concat([typeBuf, data]));
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crcv, 0);
  return Buffer.concat([buf, crcBuf]);
}

function crc32(buf) {
  const table = [];
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[i] = c >>> 0;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0);
ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8; // bit depth
ihdr[9] = 2; // color type RGB
ihdr[10] = 0; // compression
ihdr[11] = 0; // filter
ihdr[12] = 0; // interlace

const png = Buffer.concat([
  signature,
  chunk("IHDR", ihdr),
  chunk("IDAT", compressed),
  chunk("IEND", Buffer.alloc(0)),
]);

writeFileSync(join(process.cwd(), "public", "og-image.png"), png);
console.log("Wrote public/og-image.png", png.length, "bytes");
