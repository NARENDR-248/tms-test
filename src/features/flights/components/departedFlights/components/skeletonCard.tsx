import theme from "@/utils/theme";
import { Box, Skeleton } from "@mui/material";

const generateSkeletonCards = () => {
  const skeletonCount = 10;
  const skeletonCards: any = [];

  for (let i = 0; i < skeletonCount; i++) {
    skeletonCards.push(
      <Box
        key={i}
        style={{
          width: "16%",
          height: "10%",
        }}
      >
        <Skeleton
          sx={{
            backgroundColor: "#0D2437",
          }}
          variant="rectangular"
          animation="wave"
          width={250}
          height={80}
        />
        <Skeleton
          sx={{
            backgroundColor: theme.palette.primary.light,
          }}
          variant="rectangular"
          animation="wave"
          width={250}
          height={100}
        />
        <Skeleton
          sx={{
            backgroundColor: "#0D2437",
          }}
          variant="rectangular"
          animation="wave"
          width={250}
          height={120}
        />
      </Box>,
    );
  }

  return skeletonCards;
};

export default generateSkeletonCards;
