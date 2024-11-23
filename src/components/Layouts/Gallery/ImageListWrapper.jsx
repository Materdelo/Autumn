import { Box, ImageList, ImageListItem, Typography} from "@mui/material";
import { itemData } from "./GalleryData.js";

export default function ImageListWrapper({ onItemClick }) {
    return (
        <Box sx={{ width: "100%", height: 1000, overflowY: 'scroll', mt: 2, pl: 10, pr: 10 }}>
            <ImageList variant="masonry" cols={4} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem
                        key={item.img}
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '4px',
                            '& img': {
                                transition: 'transform 0.3s ease-in-out',
                            },
                            '&:hover img': {
                                transform: 'scale(1.1)',
                            },
                            '&:hover .title-bar': {
                                opacity: 1,
                            },
                        }}
                        onClick={() => onItemClick(item)}
                    >
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <Box
                            className="title-bar"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                color: 'white',
                                textAlign: 'center',
                                padding: '10px 0',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                            }}
                        >
                            <Typography variant="subtitle1">{item.title}</Typography>
                        </Box>
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}