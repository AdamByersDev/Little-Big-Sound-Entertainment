// app/(sections)/GallerySection.jsx  ← server component (no "use client")
import GalleryImage from '@/lib/components/GalleryImage';
import { Box, Typography } from '@mui/material';

// pack: top row newest L→R, then shortest-column placement
function packColumns(images, cols, gapPx = 16, refW = 400) {
  const C = Math.max(cols, 1);
  const out = Array.from({ length: C }, () => []);
  const heights = Array(C).fill(0);
  const estH = (img) => Math.round(refW * (img.imageHeight / img.imageWidth));

  // first row across
  for (let c = 0; c < Math.min(C, images.length); c++) {
    const img = images[c];
    out[c].push(img);
    heights[c] += estH(img) + gapPx;
  }
  // rest into shortest column
  for (let i = C; i < images.length; i++) {
    const img = images[i];
    let target = 0;
    for (let c = 1; c < C; c++) if (heights[c] < heights[target]) target = c;
    out[target].push(img);
    heights[target] += estH(img) + gapPx;
  }
  return out;
}

function ColumnGrid({ columns, cols }) {
  return (
    <Box
      sx={{ display: 'grid', alignItems: 'start' }}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, columnGap: 2 * 8 }} // keep 2*8
    >
      {columns.map((col, ci) => (
        <Box key={ci} sx={{ display: 'grid' }} style={{ rowGap: 2 * 8 }}>
          {col.map((image, i) => (
            <Box key={`${ci}-${image.fileName}-${i}`}>
              <GalleryImage
                src={`/gallery/${image.fileName}`}
                width={500}
                height={0}
                alt=""
                style={{
                  height: 'auto',
                  width: '100%',
                  aspectRatio: `${image.imageWidth}/${image.imageHeight}`,
                  display: 'block',
                }}
                imageWidth={image.imageWidth}
                imageHeight={image.imageHeight}
              />
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default function GallerySection({ images }) {
  const gapPx = 2 * 8; // keep exactly your 2*8
  // Precompute for each breakpoint
  const cols1 = packColumns(images, 1, gapPx);
  const cols2 = packColumns(images, 2, gapPx);
  const cols3 = packColumns(images, 3, gapPx);

  return (
    <>
      <Box
        component="section"
        id="packages"
        sx={{ backgroundColor: 'grey.900', position: 'relative', px: 2, pb: 1 }}
      >
        <Box maxWidth="lg" sx={{ mx: 'auto', pt: 4, px: { xs: 0, sm: 4 } }}>
          <Typography variant="h3" component="h1">Gallery</Typography>
        </Box>

        <Box maxWidth="lg" sx={{ mx: 'auto', px: { xs: 0, sm: 4 }, pt: 0 }}>
          {/* xs: 1 column */}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <ColumnGrid columns={cols1} cols={1} gapPx={gapPx} />
          </Box>

          {/* sm: 2 columns */}
          <Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
            <ColumnGrid columns={cols2} cols={2} gapPx={gapPx} />
          </Box>

          {/* md+: 3 columns */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <ColumnGrid columns={cols3} cols={3} gapPx={gapPx} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
