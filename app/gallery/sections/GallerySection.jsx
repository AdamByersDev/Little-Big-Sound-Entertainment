import GalleryImage from "@/lib/components/GalleryImage";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";

export default function GallerySection({ images }) {
  return(
    <>
      <Box
        component='section'
        id="packages"
        sx={{
          backgroundColor: 'grey.900',
          position: 'relative',
          paddingX: 2,
          paddingBottom: 1
        }}
      >
        <Box
          maxWidth='lg'
          sx={{
            marginX: 'auto',
            paddingTop: 4,
            paddingX: { xs: 0, sm: 4 }
          }}
        >
          <Typography variant="h3" component='h1'>
            Gallery
          </Typography>
        </Box>
        <Box
        maxWidth='lg'
          sx={{
            marginX: 'auto',
            paddingX: { xs: 0, sm: 4 },
            paddingTop: 0,
          }}
        >
          <ImageList
            variant='masonry'
            gap={2*8}
            cols={3}
            sx={{
              columnCount: { xs: '1 !important', sm: '2 !important', md: '3 !important' },
              overflow: 'visible'
            }}
          >
          {images.map((image, index) => (
              <ImageListItem
                key={index}
              >
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
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </>
  )
}
